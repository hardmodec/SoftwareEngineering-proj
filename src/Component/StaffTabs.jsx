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




function CenteredTabs() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      <Box sx={{ width: '100%', bgcolor:"primary"}}>
        <ThemeProvider theme={Colortheme1}>
        {/* <Box sx={{ bgcolor: 'error' }}> */}

        <Tabs value={value} onChange={handleChange} centered indicatorColor="secondary" textColor="secondary" aria-label="secondary tabs example" bgColor="primary">
       
          <Tab
            icon={<HomeIcon />} onClick={() => navigate("/noworder")}
            label="현재 주문 목록"
            sx={{ mt: 5, mr: 3, ml: 5 }}
          />
          <Tab onClick={() => navigate("/entireorder")} icon={<ImportContactsRoundedIcon />} label="전체 주문 목록" sx={{ mt: 5, mr: 3, ml: 5 }} />
          <Tab onClick={() => navigate("/customerlist")} icon={<RestaurantMenuIcon  />} label="전체 고객 목록" sx={{ mt: 5, mr: 3, ml: 5 }}/>
          <Tab onClick={() => navigate("/viplist")} icon={<LoginRoundedIcon />} label="단골 고객 목록" sx={{ mt: 5, mr: 3, ml: 5 }}/>
          <Tab
            icon={<SettingsAccessibilityIcon />} onClick={() => navigate("/inventory")}
            label="재고 현황"
            sx={{ mt: 5, mr: 3, ml: 5 }}
          />
        </Tabs>
        {/* </Box> */}
        </ThemeProvider>
      </Box>
    );
}



export default CenteredTabs