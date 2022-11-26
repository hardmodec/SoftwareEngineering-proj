//마이페이지
import  Box  from '@mui/material/Box';
import {useState} from "react"
import * as React from 'react';
import "./Accountpage.css";
import axios from 'axios'
import {useEffect} from 'react' 


function Accountpage(){
    const [text, setText] = useState({});
    // const [user, setUser] = useState([])
    const accesstoken = localStorage.getItem('token')
    // let [isAuthenticated, setisAuthenticated] = useState(true)
            // let info = []
            axios.defaults.headers.common['Authorization'] = `Bearer ${accesstoken}`;
            axios.get('http://35.216.103.95:3000/MrDae/customerinfos/  ')
                // .then(res => res.json())
                .then(res => {
                    // console.log(res.data.order);

                    setText({...res.data});
                    
                    // info[0] = res.data.name;
                    // info[1] = res.data.address;
                    // info[2] = res.data.phone_number;
                    // info[3] = res.data.email;
                    // info['name'] = res.data.name;
                    // info['address'] = res.data.address;
                    // info['phone_number'] = res.data.phone_number;
                    // info['email'] = res.data.email;
                    // console.log(text);  
                })
                .catch(function (error) {
                    alert('error');
                });
            // };
        
        // const invenlist = text.map((e) => (
        //     <div className="email">이름: {e.name}, 주소: {e.address}, 전화번호:{e.phine_number}</div>
        //   ))
        
            // <>
            // <div className='email'> 이름: {info.name}</div>
            // <div className='email'> 주소: {info.address}</div>
            // <div className='email'> 전화번호: {info.phone_number}</div>
            // <div className='email'> 이메일: {info.email}</div>
            /* <div className='email'> grade: {e.rank}</div> */
            // </>
        
    // },[isAuthenticated])
    // const invenlist = text.map((e) => (
    //     <div className="email">menuid: {e.id}, menuname: {e.name}, amount:{e.count}</div>
    //   ))
    
    return(
        <>
        <section>
            <div className='email'> 이름: {text.name} </div>
            <div className='email'> 주소: {text.address}</div>
            <div className='email'> 전화번호: {text.phone_number}</div>
            <div className='email'> 이메일: {text.email}</div>
        </section>
        </>
    );
}

export default Accountpage


// export default function Inventory() {
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
//         ))
//         // const menuList = dinnerCart.map((menu, index) => (<div className="shoppinglist" key={index}>{menu.dinnerid}, {menu.menulist[0].menuid}<button className="btn1"></button></div>));
//       return(
//         <section>
//             {invenlist}
//         </section>
//       )
// function App() {
//     const [user, setUser] = useState([])
  
//     let [isAuthenticated, setisAuthenticated] = useState(localStorage.getItem('token') ? true : false)
    
    // const userHasAuthenticated = (authenticated, username, token) => { 
    //   setisAuthenticated(authenticated)
    //   setUser(username)
    //   localStorage.setItem('token', token);
    // }//회원가입이나 로그인이 성공했을 때 토큰을 저장
  
    // const handleLogout = () => {
    //     setisAuthenticated(false)
    //     setUser("")
    //     localStorage.removeItem('token');
    //     setModal(false)
    // }//로그아웃
  
    //회원가입이나 로그인이 성공했을 때 modal을 변경해 로그인 버튼을 없애고 글쓰기 버튼과 정보버튼을 나오게하는 setModal
    //useEffect의 두번째 인자는 모든 렌더링 후 두번째 인자가 변경될때에만 실행되라는 내용 
    
    
    
    // useEffect( async() => {
    //   // 토큰(access token)이 이미 존재하는 상황이라면 서버에 GET /validate 요청하여 해당 access token이 유효한지 확인
    //   if (isAuthenticated) {
    //     // 현재 JWT 토큰 값이 타당한지 GET /validate 요청을 통해 확인하고
    //     // 상태 코드가 200이라면 현재 GET /user/current 요청을 통해 user정보를 받아옴
    //     await axios.get('http://localhost:8000/validate/', {
    //       headers: {
    //         Authorization: `JWT ${localStorage.getItem('token')}`
    //       }
    //     })
    //     .then(res => {
    //       fetch('http://localhost:8000/user/current/', {
    //         headers: {
    //           Authorization: `JWT ${localStorage.getItem('token')}`
    //         }
    //       })
    //       .then(res => res.json())
        //   .then(json => {
        //     // 현재 유저 정보 받아왔다면, 로그인 상태로 state 업데이트 하고
        //     if (json.username) {
        //       setUser(json.username);
        //     }else{
        //       //유저가 undefined라면 로그인버튼이 나오도록 modal을 false로 항상 맞춰줌
        //       setModal(false)
        //       setisAuthenticated(false)
        //     }
        //     // Refresh Token 발급 받아 token의 만료 시간 연장
        //     fetch('http://localhost:8000/refresh/', {
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json'
        //       },
        //       body: JSON.stringify({
        //         token: localStorage.getItem('token')
        //       })
        //     })
        //     .then(res => res.json())
        //     .then((json)=>{
        //       userHasAuthenticated(true, json.user.username, json.token);
        //     })
        //     .catch(error => {
        //       console.log(error);
        //     });;
        //   })
//           .catch(error => {
//             alert("호출 에러");
//             console.log(error)
//           });
//         })
//         .catch(error => {
//           alert("호출 에러");
//           console.log(error)
//         });
//       }
//     },[isAuthenticated])
   
//   }
  










// --openssl-legacy-provider start