import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// images

import { getProductDetail } from '../../../services/Api'

// style sheet

import '../../../style/ProductDetail.css'

const ProductDetail = () => {


    const param = useParams()

    const [ProdtuctDetail , setProdtuctDetail] = useState({})

    useEffect(() => {
        let getProductData = async () => {
            let detailData = await getProductDetail(param.id)
            setProdtuctDetail(detailData)
        }
        getProductData()
    } , [])

  return (
    <div className='container-lg'>
        <div className='row pt-5'>
            <div className='col-sm-12 col-md-12 col-lg-5'>
                <div className='detail-main-image'>
                    <img src={ProdtuctDetail && ProdtuctDetail.ProductImage} alt='Product Detail' className='img-fluid border rounded'/>
                </div>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-6 pri-peo'>
                <h3 className='m-0'>{ProdtuctDetail.productName}</h3>
                <p className='fw-bold text-secondary price'><span className='text-danger'>Price</span> Rs {ProdtuctDetail.price} </p>
                <h4>{ProdtuctDetail.productdescripition}</h4>
                <div className='btns mt-5 mb-5'>
                    <button className='p-2 ps-4 pe-4 fw-bold rounded-pill '>Add to cart</button>
                    <Link to={`/deli-detail/${param.id}`}>
                        <button className='ms-2 p-2 ps-4 pe-4 fw-bold rounded-pill'>Buy now</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail