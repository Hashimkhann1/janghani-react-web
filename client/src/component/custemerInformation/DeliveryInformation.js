import React, { useEffect, useState , useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import emailjs from '@emailjs/browser';

// images

// import testImage from '../../images/productlistImages/laptop.jpg'
import { getProductImage } from '../../services/Api'

// style sheet
import '../../style/DeliveryInformation.css'

const DeliveryInformation = () => {

  

  const inputsValues = {
    userName : '',
    userEmail : '',
    userAddress : '',
    brachOption : '',
    postalCode : '',
    ProductId : ''
  }

  const [InputData , setInputData] = useState(inputsValues);
  const [productData , setproductData] = useState({})

  useEffect(() => {
    const getProductdata = async () => {
      let productdata = await getProductImage(param.id)
      setproductData(productdata)
    }
    getProductdata()
  } , [])

  const inputValues = (e) => {
    setInputData({...InputData , [e.target.name]:e.target.value})
  }

  let param = useParams()
  const form = useRef();
  const navigation = useNavigate()



  const testing = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_s9qkkyj', 'template_wnpj4if', e.target, 'nFTbC7p-CpM7H1uNO')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    navigation('/')
    
  }


  return (
    <div className='container-lg border mt-5'>
      <div className='row justify-content-center'>
        <div className='col-12 col-sm-12 col-md-12 col-lg-6 text-center p-2'>
          <div className='delivery-product-image'>
            <img src={productData && productData.ProductImage} alt='deliveryProductimage' className='img-fluid border text-center'/>
          </div>
        </div>
      </div>
      <div className='row justify-content-center pt-4 pb-4'>
        <div className='col-lg-6 shadow-lg p-4 input-container'>
        <form ref={form} onSubmit={testing}>
          <input type='text' onChange={inputValues} className='form-control mt-3 border border-danger' name='userName' placeholder='Full Name'/>
          <input type='email' onChange={inputValues} className='form-control mt-3 border-danger' name='userEmail' placeholder='Email'/>
          <input type='text' onChange={inputValues} className='form-control mt-3 border-danger' name='userAddress' placeholder='Address'/>
          
          <div class="input-group col-4 mt-3">
            <select class="form-select border border-danger" onChange={inputValues} name='branchOption' id="inputGroupSelect04">
              <option selected>Choose...</option>
              <option value="1">Janghani branch 1 majeed abad</option>
              <option value="2">Janghani branch 2 qalat naseer</option>
              <option value="3">Janghani branch 3 akbar abad</option>
            </select>
          </div>
          <div className='col-8 col-md-4 col-lg-4'>
          <input type='text' onChange={inputValues} name='postalCode' className='form-control mt-3 border-danger' placeholder='Postal code'/>
          <input type='text' onChange={inputValues} name='productId' value={productData._id} className='d-none form-control mt-3 border-danger' placeholder='Postal code'/>
          </div>
          <div className='text-center mt-4'>
            <button type='submit'  className='p-2 text-center rounded-pill bg-danger text-white fw-bold border border-danger delivery-btn'>testing</button>
            {/* <button onClick={getUserValues} className='p-2 text-center rounded-pill bg-danger text-white fw-bold border border-danger delivery-btn'>submiit</button> */}
          </div>
          </form>
        </div>
        
      </div>
    </div>

  )
}

export default DeliveryInformation