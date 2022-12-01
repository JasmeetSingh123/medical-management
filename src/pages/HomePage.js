import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import { auth, fs } from "../FirebaseConfig";

export const HomePage = (props) => {
  const [search, setSearch] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);

  const HandleSearch = (e) => {
    e.preventDefault();

    
    let keyword = search.split(" ");

    let productsList = [];
    fs.collection("products")
      .where("medTitle", "==", keyword)
      .get()
      .then((snap) => {
        if (!snap.empty) {
          snap.forEach((doc) => {
            let data = {
              id: doc.id,
              title: doc.data().medTitle,
              desc: doc.data().description,
              price: doc.data().price,
            };

            productsList.push(data);
          });
        }

       
      });
    setSearchProducts(productsList);

  
  };

  function GetUserUid() {
    const [uid, setUid] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUid(user.uid);
        }
      });
    }, []);

    return uid;
  }

  const uid = GetUserUid();

  function GetUser() {
    const [user, setUser] = useState(null);

    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(auth.currentUser.email);
        } else {
          setUser(null);
        }
      });
    }, []);

    return user;
  }

  const user1 = GetUser();
  
 

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const products = await fs.collection("products").get();
    const productsArray = [];

    for (var snap of products.docs) {
      var data = snap.data();
      data.ID = snap.id;
      productsArray.push({
        ...data,
      });

      if (productsArray.length === products.docs.length) {
        setProducts(productsArray);
      }
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  let Products;

  const addToCart = (product) => {
    if (uid !== null) {
      Products = product;
      Products["qty"] = 1;
      Products["TotalProductPrice"] = Products.qty * Products.price;
      fs.collection("cart" + uid)
        .doc(product.ID)
        .set(Products)
        .then(() => {
        
        });
    } else {
      props.history.push("/login");
    }
  };

 

  return (
    <>
      <Header user={user1} />

      

      <div className="container-fluid pt-5" style={{'backgroundColor':'#C2EED6'}}>
      <div className="container" >
        
        {products.length > 0 && (
          <div >
            <h1 className="text-center">Products</h1>
            <div className="products-box row">
              <Product products={products} addToCart={addToCart} />
            </div>
          </div>
        )}

        {products.length < 1 && (
          <div className="alert alert-primary" role="alert">
          Please Wait!
        </div>
        )}
      
    </div>
      </div>
    </>
  );
};
