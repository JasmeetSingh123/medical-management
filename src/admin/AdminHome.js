import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react'


import { auth, fs } from '../FirebaseConfig';
import AdminHeader from './components/AdminHeader';
import AdminProduct from './components/AdminProduct';

export const AdminHome=(props)=> {

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
  
  function GetUser(){
    const [user,setUser]= useState(null);

    useEffect(()=>{
      auth.onAuthStateChanged(user=>{
        if(user){
           setUser(auth.currentUser.email)
        }

        else{
          setUser(null);
        }
      
      })
    },[])


    return user;
  }

 const user1=GetUser();
 console.log(user1)
 //console.log(auth.currentUser.email)

 const [products,setProducts] = useState([]);

 const getProducts=async ()=>{
   const products=await fs.collection('products').get();
   const productsArray=[];

   for(var snap of products.docs){
     var data= snap.data();
      data.ID=snap.id;
      productsArray.push({
        ...data
      })

      if(productsArray.length===products.docs.length){
        setProducts(productsArray);
      }
   }
 }

 useEffect(()=>{
   getProducts();

  
 },[])

 let Products;

  const addToCart = (product)=>{

    if (uid!==null) {
      Products=product;
      Products['qty']=1;
      Products['TotalProductPrice']=Products.qty*Products.price;
      fs.collection('Admin' + uid).doc(product.ID).set(Products).then(()=>{
        console.log('successfully added to cart');
      })
    }
    else{
      props.history.push('/login');
    }
  }


  return (
    <>
    <AdminHeader user={user1} />

   
      

    {products.length >0 &&(
      <div className="container-fluid pt-5" style={{'backgroundColor': '#C2EED6'}}>
      <div className="container-fluid">
        <h1 className="text-center">Products</h1>
        <div className="products-box row">
          <AdminProduct products={products} addToCart={addToCart}/>
        </div>
      </div>
      </div>
    )}

    {products.length<1 &&(
      <div className="container-fluid">
        please wait...
      </div>

    )}
    </>
  
  )
}

