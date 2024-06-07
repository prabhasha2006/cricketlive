<br><br>
<p align="center">
<img width="140" src="https://i.ibb.co/9bWQGVP/image.png">
</p>

<h1 align="center">CricketLive</h1>

<div align="center">

  ![GitHub stars](https://img.shields.io/github/stars/prabhasha2006/cricketlive.svg?style=social)
  ![GitHub forks](https://img.shields.io/github/forks/prabhasha2006/cricketlive.svg?style=social)
  ![GitHub views](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/prabhasha2006/cricketlive)
  ![npm](https://img.shields.io/npm/dt/cricketlive.svg)
  [![Creator](https://img.shields.io/badge/creator-prabhasha2006-blue.svg)](https://github.com/prabhasha2006)

</div>

<hr>
<br>
<h3 align="center">cricketlive is a Node.js module that scrapes cricket match details from a given URL using axios and cheerio. This module was created by Evelocore.</h3>
<br>

<hr>

## Table of Contents
<br>

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Example Data](#example-data)
- [API](#api)
- [Errors](#errors)
- [Prerequisites](#prerequisites)
- [Configuration](#configuration)
- [Testing](#testing)
- [Changelog](#changelog)
- [FAQ](#faq)
- [Credits](#credits)
- [Special Thanks](#special-thanks)
- [Contributing](#contributing)
- [License](#license)

<br>
<hr>

## Features
<br>

- Fetches live cricket scores from [ESPN Cricinfo]()
- Provides detailed match information including team scores, overs, and match status
- Easy to integrate with Node.js projects

<br>

<hr>

## Installation
<br>

- Before using this module, it is required to download NodeJS from [nodejs.org](https://nodejs.org).
- To install the module, use [npm](https://www.npmjs.com/package/cricketlive):
<br>

```bash
npm i cricketlive
```

<br>
<hr>

## Usage
<br>
Here’s how to use the cricketlive module in your project:
<br><br>

```javascript
// Import cricket live module
const { cricketlive } = require('cricketlive')

// Get The URL Of The Cricket Match From espncricinfo.com 
// NOTE* - THE URL MUST END WITH THE PATH /live-cricket-score (Get the URL by going into summary section of the Match).

const url = 'https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2024-1411166/nepal-vs-netherlands-7th-match-group-d-1415707/live-cricket-score'
// replace with actual match URL

cricketlive(url).then(details => {
    console.log(details)
}).catch(error => {
    console.error(error)
})
```

<br>
<hr>

## Example Data
<br>
Here is an example of the data returned by the cricketlive function:
<br><br>

```bash
{
  "battingTeam": "Netherlands",
  "battingTeamOversAndTarget": "(18.4/20 ov, T:107) 109/4",
  "teamScores": { "Nepal": "106", "Netherlands": "109/4" },
  "matchStatus": "Netherlands won by 6 wickets (with 8 balls remaining)",
  "matchIsStarted": true,
  "matchIsEnd": true,
  "matchInBreak": false
}
```

<br>
<hr>

## API
<br>

<b> Parameters </b>
<br>

- <b>url</b> `(string)`: The URL of the cricket match details page to scrape.

<b> Returns </b>
<br>
- A `promise` that resolves to an object containing the match details:

<br>

```bash
{
  "battingTeam": "Team Name",
  "battingTeamOversAndTarget": "20 ov, target 150",
  "teamScores": {
    "Team Name 1": "150/5",
    "Team Name 2": "145/9"
  },
  "matchStatus": "Team Name won by 5 runs",
  "matchIsStarted": true,
  "matchIsEnd": true,
  "matchInBreak": false
}
```

<br>
<hr>

## Errors
<br>

- If there is an error fetching or parsing the data, the promise will be rejected with an error message.

<br>
<hr>

## Changelog

- <b>[2024.06.05]</b> - <font color="aqua">Initial release</font> - `v1.0.0`

<br>
<hr>

## License

[MIT](https://choosealicense.com/licenses/mit/)


<hr>
