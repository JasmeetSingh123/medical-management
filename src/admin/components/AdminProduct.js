import React from 'react'
import { IndiAdminProduct } from './IndiAdminProduct';


function AdminProduct({products,addToCart}) {

    console.log(products);
  return  products.map((individualProduct)=>(
    <div className='col-lg-4 col-md-6 col-12 my-3'>
        <IndiAdminProduct key={individualProduct.ID} individualProduct={individualProduct}
        addToCart={addToCart} />
        </div>
        
    ))
}

export default AdminProduct;
