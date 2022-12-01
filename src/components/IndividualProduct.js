import React from 'react'
import { Link } from 'react-router-dom';

export const IndividualProduct = ({individualProduct,addToCart}) => {
   

    const handleAddToCart= ()=>{
      addToCart(individualProduct);
    }
  
  return (
    <>



      <div className="card text-white bg-dark mb-3" >
 
  <div className="card-body">
    <h4 className="card-title">Medicine : {individualProduct.medTitle}</h4>
    <p className="card-text text-white">Description : {individualProduct.description}</p>
    <p className="card-text text-white">Location : {individualProduct.location}</p>
    <h5 className="card-title text-white">Rs.{individualProduct.price}</h5>
    <div className="btn btn-primary" onClick={handleAddToCart} >bookmark</div>
  </div>
</div>
    </>
  )
}


