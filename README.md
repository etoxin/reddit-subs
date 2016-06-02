# Reddit Subs
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

Simple connector that retrieves a sub reddits feed.


### Ussage

    var redditSubs = require('reddit-subs');

    redditSubs('npm').then(function(response){
        console.log(response);
    }).catch(function(response){
        console.log('error', response);
    });