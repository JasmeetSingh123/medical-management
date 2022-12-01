import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { auth, fs } from '../FirebaseConfig';
import backgroundImage from '../assets/images/bg-01.jpg';
import loginCSS from '../assets/css/main.css';

function RegisterPage() {

  const [fullName,setFullName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [errorMsg,setErrorMsg]=useState('');
  const [successMsg,setSuccessMsg]=useState('');

  const navigate = useNavigate();



  const handler=(e)=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then((credentials)=>{
      console.log(credentials);
      fs.collection('users').doc(credentials.user.uid).set({
        FullName:fullName,
        Email:email,
        Password:password
      }).then(()=>{
        setSuccessMsg('registration successfull');
        setFullName('');
        setEmail('');
        setPassword('');
        setErrorMsg('');
        setTimeout(()=>{
          setSuccessMsg('');
          navigate('/login');
        },3000)
      }).catch(error=>setErrorMsg(error.message))
    }).catch((error)=>{
      setErrorMsg(error.message)
    })
  }

  return (
    <>
    <div className='' style={{backgroundImage: `url(${backgroundImage})`}}>
    

    {successMsg&&<>
      <div class="alert alert-success" role="alert">
		{successMsg}
		</div>
      <br/>
    </>}


    <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form className="login100-form validate-form" onSubmit={handler}>
					<span className="login100-form-title p-b-49">
						Register
					</span>

          <div className="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<span className="label-input100">Full Name</span>
						<input className="input100" type="text" id="fullName" name="text" placeholder="Type your email"
					    onChange={(e)=>{setFullName(e.target.value)}} value={fullName}  />
						
					</div>

					<div className="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<span className="label-input100">Email</span>
						<input className="input100" type="email" id="exampleInputEmail1" name="email" placeholder="Type your email"
						onChange={(e)=>{setEmail(e.target.value)}} value={email} />
						
					</div>

					<div className="wrap-input100 validate-input" data-validate="Password is required">
						<span className="label-input100">Password</span>
						<input className="input100" type="password" name="password" placeholder="Type your password"
						  id="exampleInputPassword1" onChange={(e)=>{setPassword(e.target.value)}} value={password} />
						
					</div>
					
					
					
					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn">
								Register
							</button>
						</div>
					</div>

					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<Link to="/login" className="login100-form-btn" >
								Login
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>


    {errorMsg&&<>
      <div class="alert alert-danger" role="alert">
		{errorMsg}
		</div>
      <br/>
    </>}
    </div>
      
    </>
  )
}

export default RegisterPage
