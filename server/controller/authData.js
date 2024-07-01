var firebase = require('firebase');
var firebaseConfig = {
    // apiKey: "AIzaSyBfof6dpiA7rTGTEvohTuvNIiIpmoDrOp4",
    // authDomain: "smspromotion-cf965.firebaseapp.com",
    // databaseURL: "https://smspromotion-cf965.firebaseio.com",
    // projectId: "smspromotion-cf965",
    // storageBucket: "smspromotion-cf965.appspot.com",
    // messagingSenderId: "594466281275",
    // appId: "1:594466281275:web:4b24c051bf9ef5f9afc91e"
  apiKey: "AIzaSyB1Y4ene6ppxzFucFbG5Rjra0WS_buwrVI",
  authDomain: "global-law-firm-ae15b.firebaseapp.com",
  projectId: "global-law-firm-ae15b",
  storageBucket: "global-law-firm-ae15b.appspot.com",
  messagingSenderId: "1008722365129",
  appId: "1:1008722365129:web:1a8a4407f5f7d42530db18"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var user = firebase.auth().currentUser;
      if(user!=null){
          var email_id =  user.email;
          console.log(user.email);
      }
      console.log("logged in ");

    } else {
      console.log("no log in ");
    }
  });

module.exports.signin = function (req,res) {
    firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password).then((value)=>{
      res.end(JSON.stringify({status: true, val: value}));
      console.log("Response is = "+this.res);
    }
    ).catch(function(error){
      res.end(JSON.stringify({status: false, err: error}));
    });

    }
    module.exports.sign_out = function (req,res) {
        console.log("Yes its loging out");
        firebase.auth().signOut().then(function() {
            console.log("log out successfully");
          }).catch(function(error) {
            console.log(error);
          });
    }
   
