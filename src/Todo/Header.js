import React from 'react'
import styles from './Header.module.css'
import icon from '../Image/icon.png'
export default function Header(props) {
  return (<>


    <div className={styles.logo}>
        <img src={icon} />
        <span>Maintain TimeTable</span>
      </div>
    <div className={styles.main}>
      
      <h2>{props.name ? `welcome ${props.name}`:"login please"}</h2>
    </div>
    </>
  )
}