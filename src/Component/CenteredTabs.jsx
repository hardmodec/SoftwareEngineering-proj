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


function CenteredTabs() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    // const [{ cart, user }, dispatch] = useStateValue();
    return (
      
      <Box sx={{ width: '100%'}}>
        <ThemeProvider theme={Colortheme1}>
        {/* <Box sx={{ bgcolor: 'error' }}> */}
        <Tabs value={value} onChange={handleChange} centered indicatorColor="secondary" textColor="secondary" aria-label="secondary tabs example" >
       
          <Tab
            icon={<HomeIcon />} onClick={() => navigate("home")}
            label="HOME"
            sx={{ mt: 5, mr: 3, ml: 5 }}
          />
        
          <Tab onClick={() => navigate("/information")} icon={<ImportContactsRoundedIcon />} label="소개" sx={{ mt: 5, mr: 3, ml: 5 }} />
          <Tab onClick={() => navigate("/menu")} icon={<RestaurantMenuIcon  />} label="메뉴 및 주문" sx={{ mt: 5, mr: 3, ml: 5 }}/>
          <Tab onClick={() => navigate("/login")} icon={<LoginRoundedIcon />} label="로그인" sx={{ mt: 5, mr: 3, ml: 5 }}/>
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
        

        {/* </Box> */}
        </ThemeProvider>
      </Box>
    );
}



export default CenteredTabs