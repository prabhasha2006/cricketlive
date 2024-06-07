// evelocore
const axios = require('axios');
const cheerio = require('cheerio');

const cricketlive = async (url) => {
    try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);

        const teamScores = {};
        // Extract team names and scores
        $('div.ci-team-score.ds-flex.ds-justify-between.ds-items-center.ds-text-typo.ds-mb-1').each((index, element) => {
            const teamName = $(element).find('span.ds-text-tight-l.ds-font-bold.ds-text-typo').text().trim();
            const scoreText = $(element).find('strong').text().trim();
            teamScores[teamName] = scoreText;
        });

        // Find the batting team based on the presence of overs and target
        let battingTeam;
        let battingTeamOversAndTarget;
        $('div.ci-team-score.ds-flex.ds-justify-between.ds-items-center.ds-text-typo.ds-mb-1').each((index, element) => {
            const oversAndTargetText = $(element).find('div.ds-text-compact-m.ds-text-typo.ds-text-right.ds-whitespace-nowrap').text().trim();
            if (oversAndTargetText.includes('ov')) {
                const teamName = $(element).find('span.ds-text-tight-l.ds-font-bold.ds-text-typo').text().trim();
                battingTeam = teamName;
                battingTeamOversAndTarget = oversAndTargetText;
            }
        });

        // Extract match status message if available
        const matchStatus = $('p.ds-text-tight-s.ds-font-medium.ds-truncate.ds-text-typo').text().trim();

        // Determine if the match has started
        const matchIsStarted = Object.values(teamScores).every(score => score === '') ? false : true;

        // Determine if the match has ended
        const matchIsEnd = matchIsStarted && matchStatus.toLowerCase().includes('won');

        // Determine if the match hold on break
        const matchInBreak = matchIsStarted && matchStatus.toLowerCase().includes('break');

        return {
            battingTeam,
            battingTeamOversAndTarget,
            teamScores,
            matchStatus,
            matchIsStarted,
            matchIsEnd,
            matchInBreak
        };
    } catch (error) {
        console.error(`Error fetching data for ${url}: ${error}`);
    }
};

module.exports = { cricketlive }
