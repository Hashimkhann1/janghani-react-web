import React, { useState , useEffect } from 'react'
import '../../../style/ProductMainList.css'
import {Link} from 'react-router-dom'

// images

import { productMainList } from '../../../services/Api'
// import laptop from '../../../images/productlistImages/laptop.jpg'



const addDots = (str , limit) => {
    return str.length > limit ? str.substring(0 , limit) + '...' : str;
}

const ProductMainList = () => {

    const [ProductListData , setProductListData] = useState([])


    useEffect(() => {
        const getproductMainListData = async () => {
            let data = await productMainList()
            setProductListData(data)
        }
        getproductMainListData()
    } , [])

    console.log(ProductListData)


  return (
    <div className='container-lg'>
        <div className='row'>
            {ProductListData && ProductListData.map((data) => (
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                    <div className='product-list-container align-items-center mt-4 mb-3'> 
                        <Link to={`/product-detail/${data._id}`} className='text-dark text-decoration-none'>
                             <div className=' productImage'>
                                <img src={data.ProductImage} alt='mainlistkeybord' className='img-fluid w-100 rounded border' />
                            </div>
                        <h2 className='m-0 mt-2 text-center'>{data.productName}</h2>
                        <p className='fw-bold m-0 text-center'><span className='text-warning fs-5'>Rs</span> {data.price}</p>
                        {/* <h5>{addDots(data.productdescripition , 50)}</h5> */}
                {/* </div> */}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductMainList