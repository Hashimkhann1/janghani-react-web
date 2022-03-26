import express from 'express'
import { getDbProductData } from './controller/Controller.js'

const router = express.Router()

router.get('/product/main/list' , getDbProductData)


export default router