import userEvent from '@testing-library/user-event';
import React from 'react'
import { auth,fs } from '../../FirebaseConfig';


const IndiAdminCartProducts = ({cartProduct}) => {

  const handleDelete= ()=>{
    auth.onAuthStateChanged(user=>{
      console.log(cartProduct.ID)
      fs.collection('products').doc(cartProduct.ID).delete().then(()=>{
        console.log('item deleted')
      })

    }
      )

      auth.onAuthStateChanged(user=>{
        fs.collection('Admin'+ user.uid).doc(cartProduct.ID).delete().then(()=>{
          console.log('item deleted')
        })
  
      }
        )
  }

  return (
    <>
     <div className="card text-white bg-dark mb-3" >
 
 <div className="card-body">
   <h4 className="card-title text-white">{cartProduct.medTitle}</h4>
   <p className="card-text text-white">{cartProduct.description}</p>
   <h5 className="card-text text-white">Rs.{cartProduct.price}</h5>
   <div className="btn btn-primary" onClick={handleDelete} >remove</div>
 </div>
</div> 
    </>
  )
}

export default  IndiAdminCartProducts;
