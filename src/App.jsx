import React from 'react';
import Loginpage from './Customer/Loginpage/Main';
import Signuppage from './Customer/Loginpage/Signup'
import Menupage from './Customer/Menupage/Main'
import Homepage from './Customer/Homepage/Homepage'
import Accountpage from './Customer/Accountpage/Accountpage'
import Header from './Component/Header'
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import Informationpage from './Customer/Informationpage/Informationpage';
import ShoppingBagPage from './Customer/ShoppingBagpage/ShoppingBagpage';
import {Container} from '@mui/material'
import Stafflogin from './Staff/Stafflogin';
import NowOrder from './Staff/OrderList';
import Inventory from './Staff/Inventory';
import StaffHeader from './Component/StaffHeader';
import { CartProvider } from './Context/CartContext';
import "./Component/CenteredTabs.css"
import Signuppage2 from './Customer/Loginpage/Signup2';
import Box from '@mui/material/Box';
import VipList from './Staff/VipList';
import LoginHeader from './Component/Loginheader'
import ShoppingHeader from './Component/ShoppingHeader'
// import MyOrderList from './Customer/MyOrderList'

function App() {
  // const userStatus = "Admin"
  // const header = (userStatus === "Admin") ? <Header></Header> : <StaffHeader></StaffHeader>;

  return (
    <CartProvider>
      <Router>

        <Routes>
            <Route path="" element={<Navigate replace to="home" />} />
          
            {/* home */}
            <Route path="home" element={<>
              <Container >
              <Box align="center" sx={{ p: 3, border: 'hidden' }} ><h1 className="customerheader">Mr. Fortune</h1> <h3 className="customerheader">WELCOME</h3></Box>
              <Box > </Box>
              </Container>
              <Homepage/> </>} />
            {/* customer */}
            <Route path="information" element={<> <Header/><Informationpage/> </>} />
            <Route path="account" element={<><Header/><Accountpage/> </>} />
            <Route path="login">
              <Route path="" element={<><LoginHeader/><Loginpage /></>} />
              <Route path="signup" element={<><LoginHeader/><Signuppage /> </>} />
              <Route path="signup2" element={<><LoginHeader/><Signuppage2 /> </>} />
            </Route>
            <Route path="menupage" element={<><Header/><Menupage/> </>} />
            <Route path="shoppingbag" element={<><ShoppingHeader/><ShoppingBagPage /> </>} />
            {/* <Route path="myorderlist" element={<><Header/><MyOrderList/> </>} /> */}

            {/* staff */}
            <Route path="stafflogin" element={<><LoginHeader/><Stafflogin /> </>} />
            <Route path="noworder" element={<><StaffHeader/><NowOrder /> </>} />
            <Route path="inventory" element={<><StaffHeader/><Inventory /> </>}/>
                    {/* <Route path="noworder" element={<NowOrder />} /> */}
            <Route path="viplist" element={<><StaffHeader/> <VipList/></>} />
            
        </Routes>
      </Router>
  </CartProvider>
      
      
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





