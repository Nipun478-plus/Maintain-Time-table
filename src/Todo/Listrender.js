import React from 'react'
import styles from  './Inbox.module.css'
export default function Listrender(props) {
  return (
    <>
    {props.list.map((list)=>{
        return (
            <div>
                <div className={styles.text}>
                    {list.title} ({list.date.toLocaleString()})
                </div>
            </div>
        )
    })}
    </>
  )
}