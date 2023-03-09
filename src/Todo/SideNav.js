import React from 'react'
import styles from "./Sidenav.module.css"
export default function SideNav(props) {
  return (
    <div className={styles.sidenav}>
      <button onClick={()=>{props.change('INBOX')}} className={styles.inbox}>Inbox</button><br></br>
      <button onClick={()=>{props.change('TODAY')}} className={styles.today}>Today</button><br></br>
      <button onClick={()=>{props.change('NEXT')}} className={styles.next}>Next</button>
        
   </div>
  )
}
