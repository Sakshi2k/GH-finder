'use strict';

const fs = require('fs');
const axios = require('axios');
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'getTotalGoals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING team
 *  2. INTEGER year
 */

async function get1(url) {
    axios.get(url)
        .then((response) => {
            return parseInt(response.data.team1goals);
        })
        .catch((error) => {
            console.log("ERROR OCCURED  --in url1--   ::: " + error);
        });
}

async function get2(url) {
    axios.get(url)
        .then(() => {
            axios.get(url2)
                .then(function (response) {
                    return parseInt(response.data.team2goals);
                })
                .catch(function (error) {
                    console.log("ERROR OCCURED  --in url2--   ::: " + error);
                });
        })
}

async function getTotalGoals(team, year) {
    const url1 = "https://jsonmock.hackerrank.com/api/football_matches?year=" + year + "&team1=" + team + "&page=1";
    const url2 = "https://jsonmock.hackerrank.com/api/football_matches?year=" + year + "&team2=" + team + "&page=1";
    var goals = 0;

    goals += get1(url1);
    goals += get2(url2);

    return goals;
}

async function main() {