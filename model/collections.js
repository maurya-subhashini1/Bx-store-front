const mongoose=require('mongoose');
const validator=require('validator')
const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://bizlexjoe:bizJopAnPoi991@bizlexis-aritt.mongodb.net/bxstorev1?retryWrites=true'
mongoose.connect(MONGO_URL)
.then(()=>{
    console.log('Connection Succesfully..');
}).catch((err)=>{
    console.log(err);
})

var products = mongoose.Schema({
    org_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"organization",
        required:true
    },
    version:{
        type:String,
        required:true
    },
    uid:{
        type:Number,
        required:true
    },
    data:{
        type:Object,
        required:true
    },
    notes:{
        type:Object,
        required:true
    },
    metadaata:{
        type:Object,
        required:true
    },
    order:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    
    created_at:{
        type:Date,
        required:true
    },
    created_data:{
        type:Object,
        required:true
    }
})
const Products=mongoose.model("product",products)
module.exports=Products
