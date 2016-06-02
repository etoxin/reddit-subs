# Reddit Subs

[![npm version](https://badge.fury.io/js/reddit-subs.svg)](https://badge.fury.io/js/reddit-subs)

Simple connector that retrieves a sub reddits feed.


### Ussage

    var redditSubs = require('reddit-subs');

    redditSubs('npm').then(function(response){
        console.log(response);
    }).catch(function(response){
        console.log('error', response);
    });