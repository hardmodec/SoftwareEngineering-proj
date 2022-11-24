//마이페이지
import  Box  from '@mui/material/Box';

import * as React from 'react';
import "./Accountpage.css";

function Accountpage(){
    return(
        <>
    <div className="name">name:</div>
    <div className="email">email:</div>
    <div className="password">password:</div>
    <div className="address">address:</div>
    <div className="phone_number">phone_number:</div>
    <aside className="cartinfo">CART:</aside>

        </>
    );
}

export default Accountpage

// --openssl-legacy-provider start