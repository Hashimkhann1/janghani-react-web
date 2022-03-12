import React from 'react'
import { Link } from 'react-router-dom'
// images

import keybord from '../../../images/productlistImages/keybord.jpg'

// style sheet

import '../../../style/ProductDetail.css'

const ProductDetail = () => {
  return (
    <div className='container-lg'>
        <div className='row pt-5'>
            <div className='col-sm-12 col-md-12 col-lg-5'>
                <div className='detail-main-image'>
                    <img src={keybord} alt='Product Detail' className='img-fluid'/>
                </div>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-6 pri-peo'>
                <h3 className='m-0'>Product Name</h3>
                <p className='fw-bold text-secondary price'><span className='text-danger'>Price</span> Rs 1200 </p>
                <h4>What is Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore in English dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh?</h4>
                <div className='btns mt-5 mb-5'>
                    <button className='p-2 ps-4 pe-4 fw-bold rounded-pill '>Add to cart</button>
                    <Link to={'/deli-detail'}>
                        <button className='ms-2 p-2 ps-4 pe-4 fw-bold rounded-pill'>Buy now</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail