const {collection}=require("../model/category")
const ApiFeatures = require("../search/apiffeatures")
// const categorieslist=(req,res)=>{
//     var org_id=req.params.org_id
//     collection.find({$or:[{org_id:org_id}]})
//     .then(categoryList =>{
//         if(categoryList){
//             res.json({
//                 status:200,
//                 message:"Get category List",
//                 categoryList:categoryList
//             })
//         }else{
//             res.json({
//                 status:401,
//                 message:"data not found"
//             })
//         }
//     }).catch(err =>{
//         res.send({status:400,
//             error:err
//         })
//         console.log(err);
//     })      
// }


// const categorieslist=(req,res)=>{
//     const id=req.params.org_id
//     collection.find({org_id:id})
    // .then(categoryList =>{
        // if(categoryList){
        //     res.json({
        //         status:200,
        //         message:"Get category List",
        //         categoryList:categoryList
        //     })
        // }else{
        //     res.json({
        //         status:401,
        //         message:"data not found"
        //     })
        // }
//     }).catch(err =>{
//         res.send({status:400,
//             error:err
//         })
//         console.log(err);
//     })    
// }  


// const categorieslist=async(req,res)=>{
//     try{
//         const org_id=req.params.org_id
//         const categoryList=await collection.findById(org_id)

//             res.json({
//                 status:200,
//                 message:"Get category List",
//                 categoryList:categoryList
//             })
        
//     }catch(err){
//         console.log(err);
//         res.json({
//             status:404,
//             sueccs:false,
//             message:'data Not Found!hu6r'
//         })
//     }
// }


const categorieslist= async(req,res)=>{
    try{
        const org_id=req.query.org_id
        const result=await collection.findById({org_id:org_id})
        res.json({
            status:200,
            sueccs:true,
            message:'Category Details!',
            categoryDeatils:result
        })
        
    }catch(err){
        console.log(err);
        res.json({
            status:404,
            sueccs:false,
            message:'category Not Found!'
        })
    }
}



// const categorieslist= async(req,res)=>{
//     try{
// const apifeatures=new ApiFeatures(collection.find(),req.query).search() 
// const category=await apifeatures.query   
//         res.json({
//             status:200,
//             sueccs:true,
//             message:'Category Details!',
//             categoryDeatils:category
//         })
        
//     }catch(err){
//         console.log(err);
//         res.json({
//             status:404,
//             sueccs:false,
//             message:'category Not Found!'
//         })
//     }
// }
module.exports={categorieslist}
