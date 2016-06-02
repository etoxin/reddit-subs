# Reddit Subs

Simple connector that retrieves a sub reddits feed.
 
var redditSubs = require( './index' );


### Ussage

    redditSubs('npm').then(function(response){
        console.log(response);
    }).catch(function(response){
        console.log('error', response);
    });