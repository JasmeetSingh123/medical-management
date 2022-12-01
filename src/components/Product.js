import React from 'react'
import {IndividualProduct} from './IndividualProduct';

function Product({products,addToCart}) {
  return  products.map((individualProduct)=>(
        <div className='col-lg-4 col-md-6 col-12 my-3'>
            <IndividualProduct key={individualProduct.ID} individualProduct={individualProduct}
            addToCart={addToCart} />
        </div>
        
    ))
}

export default Product
