import React, { useState,useEffect } from 'react';
import { fs,auth } from '../FirebaseConfig';

function AddProducts() {

    const [medTitle,setMedTitle]= useState('');
    const [description,setDescription]= useState('');
    const [price,setPrice]= useState('');
    const [location,setLocation]=useState('');
    const [successMsg,setSuccessMsg]= useState('');
    const [errorMsg,setErrorMsg]= useState('');


    
    function GetUserUid() {
      const [uid,setUid]=useState(null);
      useEffect(()=>{
        auth.onAuthStateChanged(user=>{
          if(user){
            setUid(user.uid);
          }
        })
      },[])
  
      return uid;
    }
  
    const uid= GetUserUid();

    const handleAddMedicine=(e)=>{
        e.preventDefault();
        console.log(medTitle,description,price);
        

        fs.collection('products').add({
          medTitle,
          description,
          location,
          price:Number(price)
        }).then(()=>{
          setMedTitle('');
          setDescription('');
          setPrice('');
          setLocation('');
          setSuccessMsg('Medicine added successfully');
          setErrorMsg('');
          setTimeout(() => {
            setSuccessMsg('')
          }, 3000);
        }).catch((e)=>setErrorMsg(e.message))

        //

        fs.collection('Admin'+uid).add({
          medTitle,
          description,
          location,
          price:Number(price)
        }).then(()=>{
          setMedTitle('');
          setDescription('');
          setPrice('');
          setLocation('');
          setSuccessMsg('Medicine added successfully');
          setErrorMsg('');
          setTimeout(() => {
            setSuccessMsg('')
          }, 3000);
        }).catch((e)=>setErrorMsg(e.message))

        
      }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

  return (
      <div className="container">                                                                                                                                                                                                        
    <div className='container'>
      <h2>Add Medicine</h2>
      {successMsg&& <>
        <div class="alert alert-success" role="alert">
		    {successMsg}
		    </div>
          </>}
      <form>
  <div className="mb-3">
      <label htmlFor="medicineTitle" className="form-label">Medicine Title</label>
    <input type="text" className="form-control" id="medicineTitle"
    onChange={(e)=>setMedTitle(e.target.value)} value={medTitle} />

    
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">description</label>
    <input type="text" className="form-control" id="description"
    onChange={(e)=>setDescription(e.target.value)} value={description}/>
  </div>

  <div className="mb-3">
    <label htmlFor="location" className="form-label">location</label>
    <input type="text" className="form-control" id="description"
    onChange={(e)=>setLocation(e.target.value)} value={location}/>
  </div>

  <div className="mb-3">
    <label htmlFor="price" className="form-label">Price</label>
    <input type="text" className="form-control" id="price"
    onChange={(e)=> setPrice(e.target.value)} value={price} />
  </div>

  <button type="submit" className="btn btn-primary" onClick={handleAddMedicine}>Submit</button>
</form>
{errorMsg&& <>
  <div class="alert alert-danger" role="alert">
		{errorMsg}
		</div>
      
          </>}
    </div>
      </div>
  )
}

export default AddProducts
