import React, { Component } from 'react'
import "./staff.css"
import  { useState } from 'react';
import axios from 'axios';



export default function displayInventory() {
  const [text, setText] = useState([]);
      axios.get("http://35.216.103.95:3000/MrDae/inventories/")
        .then((response) => {
          setText([...response.data]);
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
        // <div className="name"> - 재고 현황 - </div>
      
        const invenlist = text.map((e) => (
          <div className="email">menuid: {e.id}, menuname: {e.name}, amount:{e.count}</div>
      ))
      // const menuList = dinnerCart.map((menu, index) => (<div className="shoppinglist" key={index}>{menu.dinnerid}, {menu.menulist[0].menuid}<button className="btn1"></button></div>));
    return(
      <section>
          {invenlist}
      </section>

    )


    //   <>
    //   <div className="email">email:</div>
    //   <div className="password">password:</div>
    //   <div className="address">address:</div>
    //   <div className="phone_number">phone_number:</div>
    // </>
}
