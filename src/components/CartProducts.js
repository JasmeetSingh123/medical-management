import React from 'react'
import IndividualCartProduct from './IndividualCartProduct'

function CartProducts({cartProducts}) {
  return cartProducts.map((cartProduct)=>(
    <div className='col-lg-4 col-md-6 col-12 my-3'>
      <IndividualCartProduct key={cartProduct.ID} cartProduct={cartProduct} />
      </div>
  ))
}

export default CartProducts
