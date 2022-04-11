import axios from 'axios'



const url = 'http://localhost:5000'

export const productMainList = async () => {
    try {
        const responce = await axios.get(`${url}/product/main/list`)
        return responce.data
    } catch (error) {
        console.log('error while calling ProductMainList from services : ' , error)
    }
}

export const getProductDetail = async (id) => {
    try {
        let productMainDetail = await axios.get(`${url}/productDetail/${id}`)
        return productMainDetail.data
    } catch (error) {
        console.log('error while calling ProductDetail from Api' , error)
    }
}


export const getProductImage = async (id) => {
    try {
        let data = await axios.get(`${url}/productDataImage/${id}`)
        return data.data
    } catch (error) {
       console.log('error while calling getProductImage from api' , error) 
    }
}


export const getListData = async () => {
    try {
        let data = await axios.get(`${url}/list/Data`)
        console.log(data)
        return data.data
        
    } catch (error) {
        console.log('error while geting data from ')
    }
} 