var moment = require('moment');
var now = moment();

// console.log(now.format('MMM Do YYYY, LT'));
// console.log(now.format('LT'));
// console.log(now.format('X'));
// console.log(now.format('x'));

// console.log(now.valueOf());

var timestamp = 1468265249000;

var momentTimestamp = moment.utc(timestamp);



console.log(momentTimestamp.local().format('LT'));