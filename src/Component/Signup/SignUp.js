import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../Firebas'
import InputForm from '../InputForm/InputForm'
import styles from "./SIgn.module.css"
import login from '../../Image/login.svg'
export default function SignUp() {
    const [errorMsg,setErrorMsg] = useState("")
    const[values,setValues] = useState({
        name:"",
        email:"",
        pass:""
    })
    const [submitdisable,setSubmit] = useState(false)
    const navigate = useNavigate()
    const handlesubmission=()=>{
        if(!values.name || !values.email || !values.pass){
            setErrorMsg("Fill All fields")
            return;
        }
        setErrorMsg("")
        setSubmit(true)
        createUserWithEmailAndPassword(auth,values.email,values.pass)
        .then((res)=>{
            const user = res.user
            updateProfile(user,{
                displayName:values.name,
            })
            navigate('/')
        }).catch((err)=>{
            setSubmit(false)
            setErrorMsg(err.message)
        })
    }
       return (
    <div className={styles.container}>
         <img src={login} className = {styles.logimg}/>
        <div className={styles.innerbox}>
            <h1 className={styles.loghead}>SignUp</h1>
            <InputForm type="text" label="Name" placeholder="enter your name" onChange={(e)=>setValues((prev)=>({...prev,name:e.target.value}))}/>
            <InputForm type="email" label="Email" placeholder="Enter your Email" onChange={(e)=>setValues((prev)=>({...prev,email:e.target.value}))}/>
            <InputForm type="password" label ="Passwrod" placeholder="Passwrod" onChange={(e)=>setValues((prev)=>({...prev,pass:e.target.value}))}/>
            <div className={styles.footer}>
                <b className={styles.error}>{errorMsg}</b>
                <button onClick={handlesubmission} disabled={submitdisable} className={styles.lbtn}>SignUp</button>
                <span className={styles.ss}>
               Already have an account? 
                   <Link to='/login' className={styles.sss}> Login</Link>
               </span>    
            </div>
        </div>

    </div>
  )
}
