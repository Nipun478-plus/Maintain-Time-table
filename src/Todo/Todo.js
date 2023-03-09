import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebas';
import Header from './Header';
import MainSection from './MainSection';
import Sidenav from './SideNav';
import styles from './Todo.module.css'


function App(props) {
  const navigate = useNavigate()
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log(error)
    });
  }
  const [active,setActive] = useState("INBOX")
  return (
    <div className={styles.container}>
      
      {props.name ? (<div className={styles.header}>
        <Header name={props.name} />
      <div >
        <div>
          <Sidenav change={setActive} />
        </div>
        <div >
          <MainSection active={active}/>
        </div>
        <button onClick={handleSignOut} className={styles.sign_out}>SignOut</button>
      </div>
      </div>):"Login Please"}

     
    </div>
  );
}

export default App;