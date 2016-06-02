Reddit Subs
===========

[ ![npm version](https://badge.fury.io/js/reddit-subs.svg)](https://badge.fury.io/js/reddit-subs)

Simple module that retrieves a sub reddits JSON feed. Module is a Promise.

### Ussage

    var redditSubs = require('reddit-subs');

    redditSubs('pics').then(function(res){
    
        console.log(res);
    
    }).catch(function(res){
    
        console.log('error');
    
    });