import React, { useState } from 'react'

// images

import testImage from '../../images/productlistImages/laptop.jpg'

// style sheet
import '../../style/DeliveryInformation.css'

const DeliveryInformation = () => {

  const inputsValues = {
    userName : '',
    userEmail : '',
    userAddress : '',
    brachOption : '',
    postalCode : ''
  }

  const [InputData , setInputData] = useState(inputsValues);

  const inputValues = (e) => {
    setInputData({...InputData , [e.target.name]:e.target.value})
  }

  const getUserValues = () => {
    console.log(InputData)
  }

  return (
    <div className='container-lg border mt-5'>
      <div className='row justify-content-center'>
        <div className='col-12 col-sm-12 col-md-12 col-lg-8 text-center p-2'>
          <div className='delivery-product-image'>
            <img src={testImage} alt='deliveryProductimage' className='img-fluid w-50'/>
          </div>
        </div>
      </div>
      <div className='row justify-content-center pt-4 pb-4'>
        <div className='col-lg-6 shadow-lg p-4 input-container'>
          <input type='text' onChange={inputValues} className='form-control mt-3 border border-danger' name='userName' placeholder='Full Name'/>
          <input type='email' onChange={inputValues} className='form-control mt-3 border-danger' name='userEmail' placeholder='Email'/>
          <input type='text' onChange={inputValues} className='form-control mt-3 border-danger' name='userAddress' placeholder='Address'/>
          
          <div class="input-group col-4 mt-3">
            <select class="form-select border border-danger" onChange={inputValues} name='brachOption' id="inputGroupSelect04">
              <option selected>Choose...</option>
              <option value="1">Janghani branch 1 majeed abad</option>
              <option value="2">Janghani branch 2 qalat naseer</option>
              <option value="3">Janghani branch 3 akbar abad</option>
            </select>
          </div>
          <div className='col-8 col-md-4 col-lg-4'>
            <input type='text' onChange={inputValues} name='postalCode' className='form-control mt-3 border-danger' placeholder='Postal code'/>
          </div>
          <div className='text-center mt-4'>
            <button onClick={getUserValues} className='ps-5 pe-5 p-2 rounded-pill bg-danger text-white fw-bold border border-danger delivery-btn'>Submit</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default DeliveryInformation