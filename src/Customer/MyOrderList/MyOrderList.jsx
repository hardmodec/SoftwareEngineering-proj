// // [
// //     {
// //         "id": 2,
// //         "order_detail": [
// //             {
// //                 "order_id": 2,
// //                 "dinner": "발렌타인 디너",
// //                 "style": "심플 스타일",
// //                 "menu": "와인",
// //                 "count": 1
// //             },
// //             {
// //                 "order_id": 2,
// //                 "dinner": "발렌타인 디너",
// //                 "style": "심플 스타일",
// //                 "menu": "스테이크",
// //                 "count": 1
// //             }
// //         ],
// //         "state": "주문 접수",
// //         "customer_orderid": 2,
// //         "date": "2022-11-27T16:26:51.898182Z",
// //         "price": 45000,
// //         "discount": 0,
// //         "name": "원웅",
// //         "phone_number": "010-2988-9678",
// //         "address": "휘경동",
// //         "customerid": 1
// //     },
// //     {
// //         "id": 1,
// //         "order_detail": [],
// //         "state": "주문 접수",
// //         "customer_orderid": 1,
// //         "date": "2022-11-27T16:10:05.074267Z",
// //         "price": 165000,
// //         "discount": 0,
// //         "name": "원웅",
// //         "phone_number": "010-2988-9678",
// //         "address": "휘경동",
// //         "customerid": 1
// //     }
// // ]
// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import "../Accountpage/Accountpage.css"
// import CartContext, {CartProvider} from "../../Context/CartContext"
// import {logout} from '../../Component/ShoppingHeadertabs'
// import TextField from '@mui/material/TextField';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Button from '@mui/material/Button';
// import { Component } from 'react'
// import  Box  from '@mui/material/Box';
// import "./staff.css"



// export default function MyOrderList() {
//     const Cart = React.useContext(CartContext)
//     const {menu1Cart1, menu2Cart1, menu3Cart1, menu4Cart1, dinnerCart,
//         AddMenu1, AddMenu2, AddMenu3, AddMenu4, AddDinner1, AddDinner2, AddDinner3, AddDinner4, ResetCart} = Cart
//     const [text, setText] = useState([]);
//         axios.get("http://35.216.103.95:3000/MrDae/inventories/")
//           .then((response) => {
//             setText([...response.data]);
//             console.log(response.data);
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
//           // <div className="name"> - 재고 현황 - </div>
        
//           const invenlist = text.map((e) => (
//             <div className="email">menuid: {e.id}, menuname: {e.name}, amount:{e.count}</div>
//           ))
//         // const menuList = dinnerCart.map((menu, index) => (<div className="shoppinglist" key={index}>{menu.dinnerid}, {menu.menulist[0].menuid}<button className="btn1"></button></div>));
//       return(
//         <section>
//             {invenlist}
//         </section>
  
//       )
// }