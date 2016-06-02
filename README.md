# Reddit Subs

Simple connector that retrieves a sub reddits feed.


### Ussage

    var redditSubs = require('reddit-subs');

    redditSubs('npm').then(function(response){
        console.log(response);
    }).catch(function(response){
        console.log('error', response);
    });