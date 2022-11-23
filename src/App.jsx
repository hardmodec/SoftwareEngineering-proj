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
import CustomerList from './Staff/CustomerList';
import EntireOrder from './Staff/EntireOrder'
import Inventory from './Staff/Inventory'
import VipList from './Staff/VipList'
import NowOrder from './Staff/NowOrder'
import StaffHeader from './Component/StaffHeader';

function App() {
  const userStatus = "Admin"

  const header = (userStatus === "Admin") ? <Header></Header> : <StaffHeader></StaffHeader>;

  return (
    <Container>
      <Router>
        <Header></Header>       
        <Routes>
            <Route path="" element={<Navigate replace to="home" />} />
          
            {/* home */}
            <Route path="home" element={<Homepage />} />
            {/* customer */}
            <Route path="information" element={<Informationpage />} />
            <Route path="account" element={<Accountpage />} />
            <Route path="login">
              <Route path="" element={<Loginpage />} />
              <Route path="signup" element={<Signuppage />} />
            </Route>
            <Route path="menu" element={<Menupage />} />
            <Route path="shoppingbag" element={<ShoppingBagPage />} />
            {/* staff */}
            <Route path="staff/customerlist" element={<CustomerList />} />
            <Route path="entireorder" element={<EntireOrder />} />
            <Route path="inventory" element={<Inventory />}/>
            <Route path="noworder" element={<NowOrder />} />
            <Route path="viplist" element={<VipList />} />
            
        </Routes>
      </Router>
    </Container>
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





