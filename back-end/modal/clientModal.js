const mongoose=require('mongoose');
const schema=mongoose.Schema;

const clientSchema = new schema (
  {
    name:{
      type: String
    },
    email:{
      type:String
    }, 
    message:{
      type:String
    },
    phone:{
      type:Number
    },
    country:{
      type:String
    }
  }
, { collection: 'clientDetail'} )

module.exports=Email= mongoose.model('clientSchema',clientSchema)