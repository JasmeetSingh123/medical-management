import React,{useState,useEffect} from 'react'
import { auth,fs } from '../../FirebaseConfig';
import AdminCartProducts from '../components/AdminCartProducts';
import AdminHeader from '../components/AdminHeader';

function AdminCart() {

  const [cartProducts,setCartProducts]=useState([]);

  function GetUser(){
    const [user,setUser]= useState(null);

    useEffect(()=>{
      auth.onAuthStateChanged(users=>{
        if(users){
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

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        fs.collection('Admin' + user.uid).onSnapshot(snapshot=>{
          const newCartProduct=snapshot.docs.map(doc=>({
            ID:doc.id,
            ...doc.data(),
          }));
          setCartProducts(newCartProduct);
        
        })
      }
      else{
        console.log('please sign in to see  cart')
      }
    })
  },[])

  console.log(cartProducts);
  

  return (
    <div style={{'backgroundColor': '#C2EED6'}}>
      <AdminHeader user={user1}/>
      <div className="container-fluid pt-5 h-100" >
      {cartProducts.length>0 && (
        <div className=' container-fluid'>
          <h1 className="center-text">MedList</h1>
          <div className="products-box row">
            <AdminCartProducts cartProducts={cartProducts}/>
          </div>
        </div>
      )}

      {cartProducts.length<1 && (
        <div className=' container-fluid'>Please add medicine</div>
      )}
      </div>
    </div>
  )
}

export default AdminCart;
