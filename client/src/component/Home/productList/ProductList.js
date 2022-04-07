import React, { useEffect, useState } from 'react'
// style sheet
import '../../../style/productList.css'

import { Link } from 'react-router-dom'
import { getListData } from '../../../services/Api'


const ProductList = () => {

    const [ListData , setListData] = useState([])


    useEffect(() => {
        const getList = async () => {
            let Data = await getListData()
            setListData(Data)
        }
        getList()
    }, [])

  return (
    <div className='container-xl'>
        <div className='row mt-3'>
        {ListData && ListData.map((data) => (
            <div className='col-sm-12 col-md-4 col-lg-3 mt-3'>
            <Link to={'/main-list'} className='text-dark text-decoration-none'>
            <div className='P-list-main p-1'>
                <h3 className='p-2'>{data.ListName}</h3>
                <div className='product-list-image'>
                        <img src={data.ListImage} alt='ProductListImage' className='img-fluid w-100'/>
                </div>
            </div>
            </Link>
        </div>
        ))}

            {/* <div className='col-sm-12 col-md-4 col-lg-3 mt-3'>
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
            </div> */}

            {/* <div className='col-sm-12 col-md-4 col-lg-3 mt-3'>
                <Link to={'/main-list'} className='text-dark text-decoration-none'>
                <div className='P-list-main p-1'>
                    <h3 className='p-2'>Gaming acceries</h3>
                    <div className='product-list-image'>
                            <img src={gameingacc} alt='ProductListImage' className='img-fluid w-100'/>
                    </div>
                </div>
                </Link>
            </div> */}
           
        </div>
    </div>
  )
}

export default ProductList