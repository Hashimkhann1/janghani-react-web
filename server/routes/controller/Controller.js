import mongoos from 'mongoose'

const conn = mongoos.connection;
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

export const getDbProductData = async (req , res) => {
    try {
        let productData;
        await conn.once('connected' , async () => {
            productData = await conn.db.collection('product1testings').find({})
        })
        res.status(200).json(productData)
            console.log(req.body)
        
    } catch (error) {
        res.status(500).json('eorro while calling getDbProductData from controller' , error)
    }
}