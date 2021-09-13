const mongoose = require('mongoose');
const schema = mongoose.Schema;

let clientCommentSection = new schema(
{
    clientName:{
        type:String
    },
    clientEmail:{
        type:String
    },
    clientComment:{
        type:String
    },
    
},{collection: 'clientCommentSection'} )
    

module.exports= mongoose.model('clientCommentSection',clientCommentSection)