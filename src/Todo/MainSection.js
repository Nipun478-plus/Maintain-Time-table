import React, { useState } from 'react'
import Ibox from './Ibox'
import NEXT7Days from './NEXT7Days'
import Today from './Today'
const list  = [
 {number:1,title:"lets be positive",date:new Date('11/25/2002')},
 {number:2,title:"I should sleep at night",date:new Date('02/02/2023')},
 {number:3,title:"nipun is good boy",date:new Date('09/01/2023')}
]

export default function MainSection(props) {
  const[filterdata,setFilterdata] = useState(list)
  const addTolist = (obj)=>{
    const newList=  [...filterdata,obj]
  
    setFilterdata(newList);
  }
    
  const deleteHandle = (index) => {

    const updatedlist= filterdata.filter((item) => {
     return item.number !== index
             
     })
     
 setFilterdata(updatedlist);
 
   };
    
  return (
    <div>
{props.active==="INBOX" && (
  <Ibox list={filterdata} append = {addTolist}  deleteHandle={deleteHandle}/>
)}
{props.active==="TODAY" && (
  <Today list={filterdata}/>
)}
{props.active==="NEXT" && (
  <NEXT7Days list={filterdata}/>
)}
    </div>
  )
}
