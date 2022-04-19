const express=require("express")
const {categorieslist} = require("../controller/category")
const {clientsDetails}=require("../controller/clients")
const {All, storeProductBYID} = require("../controller/Product")
const router=express.Router()


router.get("/store/getHome",clientsDetails)

router.get("/store/categories",categorieslist)

// router.get("/store/category/products",All_Product)
router.get("/store/product/details",storeProductBYID)
module.exports=router