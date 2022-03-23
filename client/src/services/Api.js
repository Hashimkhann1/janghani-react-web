import axios from 'axios'

const url = 'http://localhost:3001'

export const productMainList = async () => {
    try {
        const responce = await axios.get(`${url}/product/main/list`)
        
        return responce.data 
    } catch (error) {
        console.log('error while calling ProductMainList from services : ' , error)
    }
}