const path = require('path');
const request = require('request');
const fs = require('fs');

var auth = 'Basic ' + new Buffer('shubh@tcs.com' + ':' + 'Nov@2018').toString('base64');
console.log(auth);

request({
    url: 'https://login.salesforce.com/',
    headers: { 'Authorization': auth}
}, (error, response, body) => {
    console.log(`Body is : ${body}`);
})

request('https://c.ap4.content.force.com/sfc/servlet.shepherd/version/download/0686F000007qegV?asPdf=false&operationContext=CHATTER').pipe(fs.createWriteStream(path.join(__dirname + '/downloads/name.txt')));
