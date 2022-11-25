import React from 'react';
import Loginpage from './Customer/Loginpage/Main';
import Signuppage from './Customer/Loginpage/Signup'
import Menupage from './Customer/Menupage/Main'
import Homepage from './Customer/Homepage/Homepage'
import Accountpage from './Customer/Accountpage/Accountpage'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CenteredTabs from './Component/CenteredTabs'
import Header from './Component/Header'
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import Informationpage from './Customer/Informationpage/Informationpage';
import ShoppingBagPage from './Customer/ShoppingBagpage/ShoppingBagpage';
import Footer from './Component/Footer';
import {Container} from '@mui/material'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BasicButtons2 from './Component/test';
import CustomizedBadges from './Component/ShoppingCart';
import Stafflogin from './Staff/Stafflogin';
import NowOrder from './Staff/NowOrder'
import Inventory from './Staff/Inventory'
import VipList from './Staff/VipList'
import StaffHeader from './Component/StaffHeader';
import { CartProvider } from './Context/CartContext';
import "./Component/CenteredTabs.css"
import Signuppage2 from './Customer/Loginpage/Signup2'
import Box from '@mui/material/Box';



function App() {
  // const userStatus = "Admin"
  // const header = (userStatus === "Admin") ? <Header></Header> : <StaffHeader></StaffHeader>;

  return (
    // <CartProvider>
      <Router>
        <Routes>
            <Route path="" element={<Navigate replace to="home" />} />
          
            {/* home */}
            <Route path="home" element={<>
              <Container Fluid>
              <Box align="center" sx={{ p: 3, border: 'hidden' }} ><h1 className="customerheader">Mr. Fortune</h1> <h3 className="customerheader">WELCOME</h3></Box>
              <Box > </Box>
              </Container>
              <Homepage/> </>} />
            {/* customer */}
            <Route path="information" element={<> <Header/><Informationpage/> </>} />
            <Route path="account" element={<><Header/><Accountpage/> </>} />
            <Route path="login">
              <Route path="" element={<><Header/><Loginpage /></>} />
              <Route path="signup" element={<><Header/><Signuppage /> </>} />
              <Route path="signup2" element={<><Header/><Signuppage2 /> </>} />

            </Route>
            <Route path="menupage" element={<><Header/><Menupage/> </>} />
            <Route path="shoppingbag" element={<><Header/><ShoppingBagPage /> </>} />
            {/* staff */}
            <Route path="stafflogin" element={<><header>
              <Container Fluid>
              <Box align="center" sx={{ p: 3, border: 'hidden' }} ><h1 className="customerheader">Mr. Fortune</h1> <h3 className="customerheader">STAFF</h3></Box>
              <Box > </Box>
              </Container>
              </header><Stafflogin /> </>} />
            <Route path="noworder" element={<><StaffHeader/><NowOrder /> </>} />
            <Route path="inventory" element={<><StaffHeader/><Inventory /> </>}/>
                    {/* <Route path="noworder" element={<NowOrder />} /> */}
            <Route path="viplist" element={<><StaffHeader/><VipList /> </>} />
            
        </Routes>
      </Router>
      // </CartProvider>
      
      
  //   <Router>
  //     <div className="app">
  //       <Routes>
  //         <Route path="/login" element={<Loginpage />} />
  //         <Route
  //           exact
  //           path="/"
  //           element={
  //             <>
  //               <Header />
  //               <Home />
  //             </>
  //           }
  //         />
  //         <Route
  //           path="/checkout"
  //           element={
  //             <>
  //               <Header />
  //               <Checkout />
  //             </>
  //           }
  //         />
  //         {/* <Route
  //           path="/payment"
  //           element={
  //             <>
  //               <Header />
  //               <Elements stripe={promise}>
  //                 <Payment />
  //               </Elements>
  //             </>
  //           }
  //         /> */}
  //         <Route
  //           path="/orders"
  //           element={
  //             <>
  //               <Header />
  //               <Orders />
  //             </>
  //           }
  //         />
  //       </Routes>
  //     </div>
  //   </Router>
   );
};



export default App;





