//마이페이지
import  Box  from '@mui/material/Box';
import {useState} from "react"
import * as React from 'react';
import "./Accountpage.css";
import axios from 'axios'
import {useEffect} from 'react' 


function Accountpage(){
    const [text, setText] = useState({});
    const [info, setInfo] = useState({});

    const accesstoken = localStorage.getItem('token')
            axios.defaults.headers.common['Authorization'] = `Bearer ${accesstoken}`;
            axios.get('http://35.216.103.95:3000/MrDae/customerinfos/  ')
                .then(res => {
                    // console.log(res.data.order[0]);
                    // console.log(res.data.order[1]);

                    console.log(res.data.order);  
                    setText({...res.data});
                    setInfo({...res.data.order});

                })
                .catch(function (error) {
                    alert('error');
                });
            // axios.get('http://35.216.103.95:3000/MrDae/orders/  ')
            //     .then(res => {
            //         console.log(res.data);

                    
            //         setInfo({...res.data});

            //     })
            //     .catch(function (error) {
            //         alert('error');
            //     });
    // const rendering = () => {
    //     const result = [];
    //     for (let i = 0; i < Object.keys(text.order).length; i++) {
    //       result.push(
    //       <div className='email' key={i}>  누적 주문 횟수: {text.order[i].customer_orderid}<br/>
    //                                 날짜 및 시간정보: {text.order[i].date}<br/>
    //                                 지불 금액: {text.order[i].price}<br/>
    //                                 할인 정보: {text.order[i].discount}</div>
                            
    //       );console.log(result, "!!!!1")
    //     }console.log(result, "!!!!1")
    //     return result;
    // };
    
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
            <div className='email'> 누적 주문 횟수: {text.order[0].state}</div>
            {/* <div className='email'>날짜 및 시간정보: {text.name}</div>
            <div className='email'>지불 금액: {text.id}</div>
            <div className='email'>할인 정보: {text.discount}</div> */}
            {/* {info.map(e => <h3 >{e.customer_orderid}</h3>)} */}
            

        </section>
        </>
    );
}

export default Accountpage

