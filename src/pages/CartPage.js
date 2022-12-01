import React,{useState,useEffect} from 'react'
import CartProducts from '../components/CartProducts';
import Header from '../components/Header';
import { auth, fs } from '../FirebaseConfig';

function CartPage() {

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
        fs.collection('cart' + user.uid).onSnapshot(snapshot=>{
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
    <div style={{'backgroundColor':'#C2EED6'}}>
      <Header user={user1}/>
      <div className="container-fluid pt-5 h-100" >
      {cartProducts.length>0 && (

        <div className=' container-fluid'>
          <h1 className="center-text">MedList</h1>
          <div className="products-box row">
            <CartProducts cartProducts={cartProducts}/>
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

export default CartPage
