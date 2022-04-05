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
                <div className='product-list-container align-items-center mt-4 mb-3'> 
                    <div className='col-sm-12 col-md-12 col-lg-4 productImage'>
                         <Link to={`/product-detail/${data._id}`}>
                            <img src={data.ProductImage} alt='mainlistkeybord' className='img-fluid w-100 rounded border' />
                        </Link>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-8 ps-3'>
                   <Link to={`/product-detail/${data._id}`} className='text-decoration-none text-dark'>
                   <h2 className='m-0'>{data.productName}</h2>
                    <p className='fw-bold'><span className='text-warning fs-5'>Rs</span> {data.price}</p>
                    <h4>{addDots(data.productdescripition , 110)}</h4>
                    </Link>
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductMainList