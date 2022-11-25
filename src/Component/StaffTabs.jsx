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
import {useState} from 'react'
// import { useCookies } from 'react-cookie'; // 리액트 쿠키 임포트 해주자


// const [bookmark, setBookmark] = useState(false);

//       const handleBookmark = () => {
//         setBookmark(!bookmark);
//       };
//       <div className="bookmarkIcon" onClick={handleBookmark}>
//             {bookmark ? (
//               <BsBookmarkFill className="bookmarkFillIcon" />
//             ) : (
//               <BsBookmark className="bookmarkIcon" />
//             )}
//     </div>
function CenteredTabs() {
    const [value, setValue] = React.useState(0);
    const [login, setLogin] = useState(true);
    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handleLoginicon = () => {
      setLogin(!login);
    };
    return (
      
      <Box sx={{ width: '100%', bgcolor:"primary"}}>
        <ThemeProvider theme={Colortheme1}>

        <Tabs value={value} onChange={handleChange} centered indicatorColor="secondary" textColor="secondary" aria-label="secondary tabs example" bgColor="primary">
          
         <Tab
            icon={<HomeIcon />} onClick={() => navigate("/home")}
            label="HOME"
            sx={{ mt: 5, mr: 3, ml: 5 }}
          />
          <div className="bookmarkIcon" onClick={handleLoginicon}>
          {login ? (
             <Tab onClick={() => navigate("/stafflogin")} icon={<LoginRoundedIcon  />} label="로그인" sx={{ mt: 5, mr: 3, ml: 5 }}/>
          ):(
            <Tab onClick={() => navigate("/home")} icon={<LoginRoundedIcon  />} label="로그아웃" sx={{ mt: 5, mr: 3, ml: 5 }}/>
          )}
          </div>
          {/* <Tab onClick={() => navigate("/stafflogin")} icon={<LoginRoundedIcon  />} label="로그인" sx={{ mt: 5, mr: 3, ml: 5 }}/> */}
          <Tab
            icon={<HomeIcon />} onClick={() => navigate("/noworder")}
            label="현재 주문 목록"
            sx={{ mt: 5, mr: 3, ml: 5 }}
          />
          {/* <Tab onClick={() => navigate("/entireorder")} icon={<ImportContactsRoundedIcon />} label="전체 주문 목록" sx={{ mt: 5, mr: 3, ml: 5 }} /> */}
          
          <Tab onClick={() => navigate("/viplist")} icon={<ImportContactsRoundedIcon />} label="고객 정보" sx={{ mt: 5, mr: 3, ml: 5 }}/>
          <Tab
            icon={<SettingsAccessibilityIcon />} onClick={() => navigate("/inventory")}
            label="재고 현황"
            sx={{ mt: 5, mr: 3, ml: 5 }}
          />
        </Tabs>
        </ThemeProvider>
      </Box>
    );
}



export default CenteredTabs