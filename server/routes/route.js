import express from 'express'
import { getDbProductData , getDbProductDetail , grtProductImage , getListData } from './controller/Controller.js'

const router = express.Router()

router.get('/product/main/list' , getDbProductData)
router.get('/productDetail/:id' , getDbProductDetail)
router.get('/productDataImage/:id' , grtProductImage)
router.get('/list/Data' , getListData)


export default router