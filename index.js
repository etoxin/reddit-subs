'use strict';

var request = require('request');

/**
 * @type {string} Reddit api
 */
var api = 'https://www.reddit.com/r/';

/**
 * @param subReddit {String} name of the subreddit
 * @returns {Promise}
 */
var redditSubs = function redditSubs(subReddit) {
    return new Promise(function (resolve, reject) {
        var url = api + subReddit + '.json';
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(body);
            } else {
                reject(error);
            }
        });
    });
};

module.exports = redditSubs;
