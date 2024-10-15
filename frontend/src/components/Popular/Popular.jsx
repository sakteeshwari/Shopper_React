import React, { useState } from 'react'
import "./Popular.css"
import data_product from "../Assets/Frontend_Assets/data.js"
import Item from '../Item/Item'
import { useEffect } from 'react'

const Popular = () => {

  // const[popularProducts,setPopularProducts]=useState([]);

  // useEffect(()=>{
    // fetch('http://localhost:4000/popularinwomen')
    // .then((response)=>response.json())
    // .then((data)=>setPopularProducts(data))
  // },[])

  return (
    <div className='popular mt-10'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className='popular-item'>
            {
                data_product.map((item,i)=>{
                    return <Item className="item" key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} ></Item>
                })
            }
        </div>
    </div>
  )
}

export default Popular
