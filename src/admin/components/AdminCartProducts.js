import React from 'react'
import IndiAdminCartProducts from './IndiAdminCartProducts'


function AdminCartProducts({cartProducts}) {
  return cartProducts.map((cartProduct)=>(
    <div className='col-lg-4 col-md-6 col-12 my-3'>
      <IndiAdminCartProducts key={cartProduct.ID} cartProduct={cartProduct} />
      </div>
  ))
}

export default AdminCartProducts
