

export const getProductMainList = async (req , res) => {
    try {
        const ProductList = await product1testings
        res.status(200).json(ProductList)
    } catch (error) {
        res.status(500).json('error while calling getProductMainList in Controller : ' , error)
    }
}