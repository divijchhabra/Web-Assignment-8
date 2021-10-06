const accountSid=process.env.SID;
const authToken=process.env.TOKEN;
const client = require('twilio')(accountSid, authToken);
function sendTextMessage(body,to){
    client.messages.create({
        body,
        to,
        from: '+14133596992'
     }).then(message => console.log(message))
       .catch(error => console.log(error))
}
module.exports={sendTextMessage};