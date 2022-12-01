
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../FirebaseConfig';


const AdminProtectRoutes = (props) => {
    
    
   
    
        const [loggedin,setloggedin]=useState(null);
        const navigate=useNavigate();
    
        auth.onAuthStateChanged((user)=>{
            if(user){
                setloggedin(true);
            }
            else{
                setloggedin(false);
            }
    
        })
    
        if(loggedin===null){
            return 'loading....'
        }
        else if(loggedin===true){
            return props.children
        }
        else if(loggedin===false){
            return navigate('/adminLogin');
        }
    
      
    
}

export default AdminProtectRoutes

