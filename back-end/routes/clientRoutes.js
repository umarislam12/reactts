const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
// Express route
const router = express.Router();
// User schema
let CLIENTSCHEMA = require('../modal/clientModal.js');
let CLIENTCOMMENTSECTION =require('../modal/clientComment.js')

router.route("/email-to-backEnd").post(function (req, res) {
  
 
 var customer = new CLIENTSCHEMA(req.body)
  customer.save()
      .then(reslve => { res.status(200).json({ success: true }) })
      .catch(err => { console.log(err); res.status(400).send(err) })
      console.log(req.body);
        const output=`<p>you have a new contact request</p>
        <h1>Cotact details</h1>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li>mesge: ${req.body.message}</li>
        <li>ctry: ${req.body.country}</li>
        <li>Number: ${req.body.phone}</li>
        <li>email: ${req.body.email}</li>
        </ul>
        `;
debugger
       // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: '', // generated ethereal user
      pass: '', // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // send mail with defined transport object
  let mailOption={
    from: '"nodemailer contact" <obnoxiousbloke11@hotmail.com>', // sender address
    to: "obnoxiousbloke11@hotmail.com", // list of receivers
    subject: "node contact request", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  }
  transporter.sendMail(mailOption,(err,info)=>{
if(err){
  return console.log(err);
}
console.log("Message sent: %s", info.messageId);
  });
  
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//}

//main().catch(console.error);
      //-------------------- email---------------
     
     
    //  let transport=nodemailer.createTransport({

    //   service:'gmail',
    //   auth:{
    //     user:'sanwalamjad2013@gmail.com',
    //     pass: 'punjabians'
    //   }

    //  });
    //   let mailOPtion={
    //     from:'sanwalamjad2013@gmail.com',
    //     to:'sanwalamjad2013@gmail.com',
    //     subject:'message from  '+ req.body.name,
    //     text: ',  email of client is :'+ req.body.email + 
    //           ',  requirements: '+req.body.message +
    //           ',  contact no :'+ req.body.phone +
    //           ',  country is: '+ req.body.country
    //   }
    //   transport.sendMail(mailOPtion, function(err, data){

    //     if(err)
    //     {
    //       console.log("err")
    //     }
    //     else{
    //       console.log("sent mail")
          
    //     }
    //   })
     
      

  })

    router.route("/comment-to-backEnd").post(function(req, res){
    var customer =new CLIENTCOMMENTSECTION(req.body)
  
     console.log(customer)
    customer.save()
    .then(reslve => { res.status(200).json({ success: true }) })
      .catch(err => { console.log(err); res.status(400).send(err) })

   })


   router.route("/get-comments").get(function (req, res){
    // var urlQuery = url.parse(req.url, true).query;
    // // console.log("hello = ",urlQuery.type, req.params.companyName);
    // console.log(urlQuery)
    // companyName: req.params.companyName,
      // type: urlQuery.type

      CLIENTCOMMENTSECTION.find({
    }, function(err,cb){  
      if(err) 
      {
        res.status(400).send(err)
      }
      else
      {   
        res.status(200).json(cb)
      }
    })
  })
  


  module.exports = router;
