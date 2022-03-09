import React from 'react'
// style sheet
import '../../../style/productList.css'
// images
import gameingacc from '../../../images/productlistImages/gameingacc.png'
import screen from '../../../images/productlistImages/screen.png'
import { Link } from 'react-router-dom'


const ProductList = () => {
  return (
    <div className='container-xl'>
        <div className='row mt-3'>
        <div className='col-sm-12 col-md-4 col-lg-3 mt-3'>
                <Link to={'/main-list'} className='text-dark text-decoration-none'>
                <div className='P-list-main p-1'>
                    <h3 className='p-2'>Gaming acceries</h3>
                    <div className='product-list-image'>
                            <img src={gameingacc} alt='ProductListImage' className='img-fluid w-100'/>
                    </div>
                </div>
                </Link>
            </div>

            <div className='col-sm-12 col-md-4 col-lg-3 mt-3'>
                <Link to={'/main-list'} className='text-dark text-decoration-none'>
                <div className='P-list-main p-1'>
                    <h3 className='p-2'>Gaming acceries</h3>
                    <div className='product-list-image'>
                            <img src={screen} alt='ProductListImage' className='img-fluid w-100'/>
                    </div>
                </div>
                </Link>
            </div>

            <div className='col-sm-12 col-md-4 col-lg-3 mt-3'>
                <Link to={'/main-list'} className='text-dark text-decoration-none'>
                <div className='P-list-main p-1'>
                    <h3 className='p-2'>Gaming acceries</h3>
                    <div className='product-list-image'>
                            <img src={gameingacc} alt='ProductListImage' className='img-fluid w-100'/>
                    </div>
                </div>
                </Link>
            </div>

            <div className='col-sm-12 col-md-4 col-lg-3 mt-3'>
                <Link to={'/main-list'} className='text-dark text-decoration-none'>
                <div className='P-list-main p-1'>
                    <h3 className='p-2'>Gaming acceries</h3>
                    <div className='product-list-image'>
                            <img src={screen} alt='ProductListImage' className='img-fluid w-100'/>
                    </div>
                </div>
                </Link>
            </div>

            <div className='col-sm-12 col-md-4 col-lg-3 mt-3'>
                <Link to={'/main-list'} className='text-dark text-decoration-none'>
                <div className='P-list-main p-1'>
                    <h3 className='p-2'>Gaming acceries</h3>
                    <div className='product-list-image'>
                            <img src={gameingacc} alt='ProductListImage' className='img-fluid w-100'/>
                    </div>
                </div>
                </Link>
            </div>
           
        </div>
    </div>
  )
}

export default ProductList