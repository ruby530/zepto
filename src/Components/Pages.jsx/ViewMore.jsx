import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ViewMore = () => {
    let params=useParams()
    let pid=params.id
    let navigate=useNavigate()
    let [data,setData]=useState([])
    let api=async()=>{
        let response=await axios.get(`http://localhost:4000/products/${pid}`)
        setData(response.data)
    }
    useEffect(()=>{
        api()
    },[])
   
    console.log(data)
        let {id,image,old_price,new_price,description,ml,Details}=data
  return (
   <>
    <div className="viewmore">
        <div className="conatiner">
          <div className="left">
            <img src={image} alt="no image" />
          </div>
          <div className="right">
             <div className="close" onClick={()=>navigate(`/`)} title='close'>✖️</div>
            <div className="desc">{description}</div>
         
             <div className="price">
             <div className="oldprice">{old_price}</div>
            <div className="newprice">{new_price}</div>
           </div>
            <div className="ml">{ml}</div>
          </div>
        </div>
    </div>
   </>
  )
}

export default ViewMore
