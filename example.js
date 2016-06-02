
'use strict';

var redditSubs = require( './index' );

redditSubs('sydney').then(function(response){
    console.log(response);
}).catch(function(response){
    console.log('error', response);
});