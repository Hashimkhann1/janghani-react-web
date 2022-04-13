import ListModel from "../../Schema/ListSchema.js"
import proModel from "../../Schema/schema.js"

export const getDbProductData = async (req , res) => {
    let productcategory  = req.query.productcategory;
    console.log(req.query)
    try {
        console.log(productcategory)
        const data = await proModel.find({productcategory : productcategory})
        res.status(200).json(data)
    } catch (error) {
       res.status(500).json('error while getting data from controller' , error) 
    }
}

export const getDbProductDetail = async (req , res) => {
    try {
        let detailData = await proModel.findById(req.params.id)
        res.status(200).json(detailData)
    } catch (error) {
        res.status(500).json('error while getting ProductDetail from controller' , error)
    }
}


export const grtProductImage = async (req , res) => {
    try {
        let data = await proModel.findById(req.params.id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json('error while calling grtProductImage from controller' , error)
    }
}


export const getListData = async (req , res) => {
    try {
        const data = await ListModel.find({})
        res.status(200).json(data)
    } catch (error) {
       res.status(500).json('error while getting data from controller' , error) 
    }
}





// import mongoos from 'mongoose'

// const conn = mongoos.connection;

//     export const getDbProductData = async (req , res) => {
//         try{
//             let data;
//             conn.once('open' , () => {data = conn.db.collection('product1testing').find()
            
        
//         })
//         res.status(200).json(data)
        
        
//     } catch (error) {
//         res.status(500).json('eorro while calling getDbProductData from controller' , error)
//     }

// }


// ////



// let productData;
// conn.once('open' , () => {
//     productData = conn.db
//     conn.collection('product1testings')
// })

// export const getProductMainList = async (req , res) => {
//     try {
//         const ProductList = await 
//         res.status(200).json(ProductList)
//     } catch (error) {
//         res.status(500).json('error while calling getProductMainList in Controller : ' , error)
//     }
// }