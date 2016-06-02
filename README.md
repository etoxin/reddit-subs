
Simple module that retrieves a sub reddits JSON feed. Module returns a Promise.


## Installation

    $ npm install reddit-subs

## Usage

    var redditSubs = require('reddit-subs');

## Example

    var redditSubs = require('reddit-subs');

    redditSubs('pics').then(function(res){
        console.log(res);
    }).catch(function(res){
        console.log('error');
    });