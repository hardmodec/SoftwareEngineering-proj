import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import LoginRoundedIcon from '@mui/icons-material/Login';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Colortheme1 from '../Component/Colortheme1'
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import "./CenteredTabs.css"
import {useState} from 'react'
import CartContext from "../Context/CartContext"

function CenteredTabs() {
    const Cart = React.useContext(CartContext)
    const {AddMenu} = Cart
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const [login, setLogin] = useState(true);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handleLoginicon = () => {
      setLogin(!login);
    };
    
    // const [{ cart, user }, dispatch] = useStateValue();
    return (
      
      <Box sx={{ width: '100%'}}>
        <ThemeProvider theme={Colortheme1}>
        <Tabs value={value} onChange={handleChange} centered indicatorColor="secondary" textColor="secondary" aria-label="tabheader" >
          <Tab
            icon={<HomeIcon />} onClick={() => navigate("/home")}
            label="HOME"
            sx={{ mt: 5, mr: 3, ml: 5 }}
          />  
          <Tab onClick={() => navigate("/information")} icon={<ImportContactsRoundedIcon />} label="소개" sx={{ mt: 5, mr: 3, ml: 5 }} />
          <Tab onClick={() => navigate("/menupage")} icon={<RestaurantMenuIcon  />} label="메뉴 및 주문" sx={{ mt: 5, mr: 3, ml: 5 }}/>
          <div className="bookmarkIcon" onClick={handleLoginicon}>
          {/* {login ? (
             <Tab onClick={() => navigate("/login")} icon={<LoginRoundedIcon  />} label="로그인" sx={{ mt: 5, mr: 3, ml: 5 }}/>
          ):( */}
            <Tab onClick={logout} icon={<LoginRoundedIcon  />} label="로그아웃" sx={{ mt: 5, mr: 3, ml: 5 }}/>
        
          </div>
          {/* <Tab onClick={() => navigate("/login")} icon={<LoginRoundedIcon />}     font-family="naver1" label="로그인" sx={{ mt: 5, mr: 3, ml: 5 }}/> */}
          <Tab
            icon={<SettingsAccessibilityIcon />} onClick={() => navigate("/account")}
            label="마이페이지"
            sx={{ mt: 5, mr: 3, ml: 5 }}
          />
          <Tab 
            icon={<ShoppingCartIcon />}
            onClick={() => navigate("/shoppingbag")}
            label="장바구니"
            sx={{ mt: 5, mr: 3, ml: 5 }}
          />
        </Tabs>
        </ThemeProvider>
      </Box>
    );
}

const logout = () => {
  let token = localStorage.getItem('token')
  localStorage.clear()
  window.location.replace('http://localhost:3000/')
};


export {logout}
export default CenteredTabs