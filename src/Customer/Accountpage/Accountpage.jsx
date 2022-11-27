//마이페이지
import  Box  from '@mui/material/Box';
import {useState} from "react"
import * as React from 'react';
import "./Accountpage.css";
import axios from 'axios'
import {useEffect} from 'react' 


function Accountpage(){
    const [text, setText] = useState({});
    const accesstoken = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = `Bearer ${accesstoken}`;
            axios.get('http://35.216.103.95:3000/MrDae/customerinfos/  ')
                .then(res => {
                    console.log(res.data.order);

                    setText({...res.data});
                
                })
                .catch(function (error) {
                    alert('error');
                });
    // const orderlist = text.order.map
    const rendering = () => {
        const result = [];
        for (let i = 0; i < text.length; i++) {
          result.push(
          <div className='email' key={i}>  누적 주문 횟수: {text.order[i].customer_orderid}<br/>
                                    날짜 및 시간정보: {text.order[i].date}
                                    지불 금액: {text.order[i].price}
                                    할인 정보: {text.order[i].discount}</div>
                            
          );console.log('11111111')
        }
        return result;
    };
    
    return(
        <>
        <section>
            <div className='email'> 이름: {text.name} </div>
            <div className='email'> 주소: {text.address}</div>
            <div className='email'> 전화번호: {text.phone_number}</div>
            <div className='email'> 이메일: {text.email}</div>
            {/* <>
            {
                for(let i = 1 ; i < text.order.length; i++){

                }
            }
            </> */}
            <div> {rendering()}</div>

        </section>
        </>
    );
}

export default Accountpage

