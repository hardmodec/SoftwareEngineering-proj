
import * as React from 'react';
import { useState, useEffect } from 'react';
import "../Accountpage/Accountpage.css"
import CartContext, {CartProvider} from "../../Context/CartContext"
import {logout} from '../../Component/ShoppingHeadertabs'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';




function ShoppingBagPage(){
    const Cart = React.useContext(CartContext)
    const {menu1Cart1, menu2Cart1, menu3Cart1, menu4Cart1, dinnerCart,
        AddMenu1, AddMenu2, AddMenu3, AddMenu4, AddDinner1, AddDinner2, AddDinner3, AddDinner4, ResetCart} = Cart
    // console.log(dinnerCart.length)
    const dinstyle = ["발렌타인 디너 - simple", "발렌타인 디너 - grand", "발렌타인 디너 - delux", "프렌치 디너 - simple", "프렌치 디너 - grand", "프렌치 디너 - delux", 
                      "잉글리시 디너 - simple", "잉글리시 디너 - grand", "잉글리시 디너 - delux", "샴페인 축제 디너 - grand", "샴페인 축제 디너 - delux", ]
    const menult = ["스테이크", "와인", "커피", "샴페인", "샐러드", "에그 스크램블", "베이컨", "빵", "바게트빵", "치즈"]
    const menuList = dinnerCart.map((dinner, index) => (<ul className="shoppinglist" key={index}> {dinstyle[dinner.dinner-1]} / 
                                                                  {menult[dinner.menu-1]} / 수량: {dinner.count} 
                                                        </ul>));
    const menuprice = [30000, 15000, 5000, 10000, 6000, 7000, 8000, 3000, 4000, 2000]
    
      let totalprice = 0;
      for(let i = 0; i < dinnerCart.length; i++){
        totalprice += menuprice[(dinnerCart[i].menu-1)]*(dinnerCart[i].count);
      }


      ///////통신////
      const navigate = useNavigate();
      const accesstoken = localStorage.getItem('token')
      axios.defaults.headers.common['Authorization'] = `Bearer ${accesstoken}`;

      const [values, setValues] = useState({ order_info:{}, price: totalprice, order_detail: dinnerCart}); // const [values, setValues] = useState({ email: "", password1 : "", password2: "" });  
    
      const handleChange = (event) => {
        event.preventDefault(); 
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });  
      };
      const handleClick = async (e) => {
        e.preventDefault(); 
        await axios.post('http://35.216.103.95:3000/MrDae/customers/orders/ ', values)   //   await axios.post('http://35.216.103.95:3000/auth/registration/', values) 
        .then((res)=>{
          alert("감사합니다. 주문접수완료!")
          console.log(res.data)
          // localStorage.clear()
          // localStorage.setItem('userid', res.data.user.email)
          // localStorage.setItem('token', res.data.access_token)
          ResetCart()
          navigate('/menupage')
        })
        .catch((Error)=>{
          alert("감사합니다. 또 주문해주세요..")
          console.log(values)
        })
      };
    
    return(
    <section>
        <article>    
        {menuList}
        </article>
        <aside className="cartinfo">
            <ul className="cartheader">OrderInfo
                <div className="cartinfo3">Grade: Bronze</div>
                <div className="cartinfo3">discount: 0 % / -0원</div>
                <div className="cartinfo2">Total Price: {totalprice}원</div>

                <div className="cartinfo4">결제 정보</div>

                <div className="cartinfo5">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="customername"
                  label="주문자 성함"
                  name="customername"
                  autoComplete="customername"
                  autoFocus
                  // onChange={handleChange}
                />
                </div >
                <div className="cartinfo6">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="location"
                  label="배달 요청 장소"
                  name="location"
                  autoComplete="location"
                  autoFocus
                  // onChange={handleChange}
                />
                </div>
                <div className="cartinfo6">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="phone_number"
                  label="전화번호"
                  name="phone_number"
                  autoComplete="phone_number"
                  autoFocus
                  // onChange={handleChange}
                />
                </div>
                <div className="cartinfo7">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="cardnumber"
                  label="신용카드 번호"
                  name="cardnumber"
                  autoComplete="cardnumber"
                  autoFocus
                  // onChange={handleChange}
                />
                </div>
                <div className="cartinfo5">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleClick}
                >
                  최종결제하기
                </Button>
                </div>

            </ul>
        </aside>
    </section>
    );

}


export default ShoppingBagPage;





const cartdinner = ["발렌타인 디너", "프렌치 디너", "잉글리시 디너", "샴페인 축제 디너"]
const menu = [{
  menuid: 1,
  name: "스테이크",
  amount: 0,
  price: 30000,
},{
  menuid: 2,
  name: "와인",
  amount: 1,
  price: 15000,
},{
  menuid: 3,
  name: "커피",
  amount: 1,
  price: 5000
},{
  menuid: 4,
  name: "샴페인",
  amount: 1,
  price: 10000,
},{
  menuid: 5,
  name: "샐러드",
  amount: 1,
  price: 6000,
},{
  menuid: 6,
  name: "에그 스크램블",
  amount: 1,
  price: 7000,
},{
  menuid: 7,
  name: "베이컨",
  amount: 1,
  price: 8000,
},{
  menuid: 8,
  name: "빵",
  amount: 1,
  price: 3000,
},{
  menuid: 9,
  name: "바게트빵",
  amount: 1,
  price: 4000,
},{
  menuid: 10,
  name: "치즈",
  amount: 1,
  price: 2000,
}]
