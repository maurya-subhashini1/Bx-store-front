const Products=require('../model/collections')

const storeProductBYID=async(req,res)=>{
 
    try{
        const id=req.query.id
        const productDetails=await Products.findById(id)

            res.json({
                status:200,
                message:"Get category List",
                productDetails:productDetails
            })
            console.log(productDetails);
        
    }catch(err){
        console.log(err);
        res.json({
            status:404,
            sueccs:false,
            message:'data Not Found!hu6r'
        })
    }
}


const All=async(req,res)=>{
    try{
        const user=await Products.find().populate("org_id").exec()
            res.send({status:200,
            success:true,
            message:"diu",
            user:user
    })
    }catch(err){
        res.send(err)
        console.log(err);
    }
}

module.exports={All,storeProductBYID}

