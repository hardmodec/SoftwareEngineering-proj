import React, { Component } from 'react'
import "./staff.css"


export default function NowOrder() {

  
    // const [text, setText] = useState({});
    // const [info, setInfo] = useState([]);

    // // const accesstoken = localStorage.getItem('token')
    // //         axios.defaults.headers.common['Authorization'] = `Bearer ${accesstoken}`;
    //         axios.get('http://35.216.103.95:3000/MrDae/orders/   ')
    //             .then(res => {
    //                 console.log(res.data.order);

    //                 setText({...res.data});
                    

    //             })
    //             .catch(function (error) {
    //                 alert('error');
    //             });
            // axios.get('http://35.216.103.95:3000/MrDae/orders/  ')
            //     .then(res => {
            //         console.log(res.data);

                    
            //         setInfo({...res.data});

            //     })
            //     .catch(function (error) {
            //         alert('error');
            //     });
    return (
      <ul className='name3'>
      <div >customerid: 1</div>
      <div >address: '휘경동' </div>
      <div>price: 45000</div>
      <div>이름: 원웅</div>
      <div >phone_number: 010-2988-9678</div>
        <li>
          <div>order_id: 2</div>
          <div>dinner: '발렌타인 디너'</div>
          <div>style: '심플 스타일'</div>
          <div>menu: '와인'</div>
          <div>count: 1</div>
        </li>
        <li>
          <div>order_id: 2</div>
          <div>dinner: '발렌타인 디너'</div>
          <div>style: '심플 스타일'</div>
          <div>menu: '스테이크'</div>
          <div>count: 1</div>
        </li>
      
    </ul>
    )  
}