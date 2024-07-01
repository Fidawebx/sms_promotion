var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
const accountSid = 'ACa977929e96cf75d1509f604afedfa2b1';
const authToken = '638cee8ae381080fb7a62b8fc6c5ca10';


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://smspromotion-cf965.firebaseio.com"
});
const db = admin.firestore();

module.exports.sendmessage = async function (req,res) {
    const client = require('twilio')(accountSid, authToken);
    console.log("Its sending sms")
//     let usr=[]
//     const users = await db.collection('contacts').where('region','==',req.body.region).get()
//    if (users.docs.length > 0) {
//      for (const user of users.docs) {
//       usr.push(user.data().contact) // its only storing contact number in arry usr.
//    }}
//    // sending message here
//    res.json(usr);
//    console.log("its response = "+usr[0]);
//    console.log("Region = "+req.body.region+"Message = "+req.body.message);

// Sending SMS 
client.messages
  .create({
     body: ''+req.body.message,
     from: '+17866928990',
     to: '+923086199922'
   })
  .then(message => console.log(message.sid));
}
module.exports.addRecord = async function(req,res){
    let docRef=db.collection('contacts')
    await docRef.add({
      region: req.body.region,
      contact: req.body.pnumber
    });
   res.json({message:'done'});
}