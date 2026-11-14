import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const AddCart = () => {
  let [cart,setCart]=useState([])
    let products=async()=>{
      let resp= await axios.get(`https://my-json-server-xn9g.onrender.com/cart`)
      setCart(resp.data)
    }
    useEffect(()=>{
      products()
    },[])

    let {id, image, old_price,new_price, description, ml}=cart
  return (
    <>
        <div className="addcart">
        <div className="container">
            {cart.map((elem)=>{
              let {id, image, old_price,new_price, description, ml}=elem
            return(
              <>
                <div className="cards">
                  <img src={image} alt="" />
                 <div className="price">
                   <div className="oldprice">{old_price}</div>
                  <div className="newprice">{new_price}</div>
                 </div>
                  <div className="desc">{description}</div>
                  <div className="ml">{ml}</div>
                </div>
              </>
            )
          })}
        </div>
        </div>
    </>
  )
}

export default AddCart
