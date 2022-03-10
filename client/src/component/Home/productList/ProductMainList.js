import React from 'react'
import '../../../style/ProductMainList.css'
import {Link} from 'react-router-dom'

// images

import keybord from '../../../images/productlistImages/keybord.jpg'
// import laptop from '../../../images/productlistImages/laptop.jpg'


const addDots = (str , limit) => {
    return str.length > limit ? str.substring(0 , limit) + '...' : str;
}

const ProductMainList = () => {
  return (
    <div className='container-lg'>
        <div className='row'>
        <div className='product-list-container align-items-center mt-4'> 
               <div className='col-sm-12 col-md-12 col-lg-4'>
                    <Link to={'/product-detail'}>
                        <img src={keybord} alt='mainlistkeybord' className='img-fluid w-100'/>
                    </Link>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-8 ps-3'>
                   <Link to={'/product-detail'} className='text-decoration-none text-dark'>
                   <h2 className='m-0'>Product name</h2>
                    <p>Rs 1000</p>
                    <h4>{addDots('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' , 110)}</h4>
                    </Link>
                </div>
            </div>

            <div className='product-list-container align-items-center mt-4'> 
               <div className='col-sm-12 col-md-12 col-lg-4'>
                    <Link to={'/product-detail'}>
                        <img src={keybord} alt='mainlistkeybord' className='img-fluid w-100'/>
                    </Link>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-8 ps-3'>
                   <Link to={'/product-detail'} className='text-decoration-none text-dark'>
                   <h2 className='m-0'>Product name</h2>
                    <p>Rs 1000</p>
                    <h4>{addDots('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' , 110)}</h4>
                    </Link>
                </div>
            </div>

            <div className='product-list-container align-items-center mt-4'> 
               <div className='col-sm-12 col-md-12 col-lg-4'>
                    <Link to={'/product-detail'}>
                        <img src={keybord} alt='mainlistkeybord' className='img-fluid w-100'/>
                    </Link>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-8 ps-3'>
                   <Link to={'/product-detail'} className='text-decoration-none text-dark'>
                   <h2 className='m-0'>Product name</h2>
                    <p>Rs 1000</p>
                    <h4>{addDots('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' , 110)}</h4>
                    </Link>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default ProductMainList