import React from 'react'


export const IndiAdminProduct = ({individualProduct,addToCart}) => {
    console.log(individualProduct);

    const handleAddToCart= ()=>{
      addToCart(individualProduct);
    }
  
  return (
    <div>
      <div className="card text-white bg-dark mb-3" >
 
  <div className="card-body">
    <h4 className="card-title text-white">{individualProduct.medTitle}</h4>
    <p className="card-text text-white">{individualProduct.description}</p>
    <h5 className="card-text text-white">Rs.{individualProduct.price}</h5>
    <div className="btn btn-primary" onClick={handleAddToCart} >bookmark</div> 
  </div>
</div>
    </div>
  )
}


