import express from 'express'
import { getDbProductData , getDbProductDetail , grtProductImage } from './controller/Controller.js'

const router = express.Router()

router.get('/product/main/list' , getDbProductData)
router.get('/productDetail/:id' , getDbProductDetail)
router.get('/productDataImage/:id' , grtProductImage)


export default router