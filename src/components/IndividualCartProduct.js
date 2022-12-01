import userEvent from '@testing-library/user-event';
import React from 'react'
import { auth, fs } from '../FirebaseConfig';

const IndividualCartProduct = ({cartProduct}) => {

  const handleDelete= ()=>{
    auth.onAuthStateChanged(user=>{
      fs.collection('cart' + user.uid).doc(cartProduct.ID).delete().then(()=>{
        console.log('item deleted')
      })

    }
      )
  }

  return (
    <>
     <div className="card text-white bg-dark mb-3" >
 
 <div className="card-body">
   <h4 className="card-title">Medicine : {cartProduct.medTitle}</h4>
   <p className="card-text text-white">description : {cartProduct.description}</p>
   <p className="card-text text-white">Location : {cartProduct.location}</p>
   <h5 className="card-text text-white">Rs.{cartProduct.price}</h5>
   <div className="btn btn-primary" onClick={handleDelete} >remove</div>
 </div>
</div> 
    </>
  )
}

export default IndividualCartProduct
