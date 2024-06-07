// Import cricket live module
const { cricketlive } = require('./index');

// Get The URL Of The Cricket Match From espncricinfo.com 
// NOTE* - THE URL MUST END WITH THE PATH /live-cricket-score (Get the URL by going into summary section of the Match).

const url = 'https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2024-1411166/nepal-vs-netherlands-7th-match-group-d-1415707/live-cricket-score'; 
// replace with actual match URL

cricketlive(url).then(details => {
    console.log(details)
}).catch(error => {
    console.error(error)
})