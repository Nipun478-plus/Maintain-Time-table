import React, { useState } from 'react'
import InputForm from '../InputForm/InputForm'
import { Link,  useNavigate } from 'react-router-dom'
import styles from "./Login.module.css"
import { auth } from '../../Firebas.js'
import { signInWithEmailAndPassword } from 'firebase/auth'
import login from '../../Image/login.svg'
// import envelope from '../../Image/envelope.svg'
// import styles from "../Signup/SignUp.module.css"
export default function Login() {
    const [values,setValues] = useState({
        email:"",
        pass:""
    })
    const navigate = useNavigate()
    const [errorMsg,setErrorMsg] = useState("")
    const handleSubmission=()=>{
           if(!values.email || !values.pass){
            setErrorMsg("Fill All Fields")
            return
           }
           signInWithEmailAndPassword(auth,values.email,values.pass)
           .then((res)=>{
            console.log(res)
            navigate("/todo")
           }).catch((err)=>{
            setErrorMsg(err.message)
           })

    }
  return (
    <div className={styles.container}>
      <img src={login} className = {styles.logimg}/>
        <div className={styles.innerBox}>
        <h1 className={styles.loghead}>Login</h1>  
             {/* <lable className={styles.elable}>Email</lable> */}
             <InputForm type="email"  label  = "Email" placeholder="Enter Your Email"
             onChange={(event)=>setValues((prev)=>({...prev,email:event.target.value}))} className={styles.emaill}  />
             {/* <lable className={styles.plable}>Password</lable> */}
             <InputForm type="password" label = "Password" placeholder="Enter Your Password"
             onChange={(event)=>setValues((prev)=>({...prev,pass:event.target.value}))} className={styles.passl}/>
        
               <div className={styles.footer}>
               <b className={styles.error} >{errorMsg}</b>
               <button onClick={handleSubmission} className = {styles.lbtn} >Login</button>
            
               <span className={styles.ss}>
               Don't have an account? 
                   <Link to='/signup' className={styles.sss}> Sign Up</Link>
               </span>
             </div>
             </div>
    </div>
  )
}