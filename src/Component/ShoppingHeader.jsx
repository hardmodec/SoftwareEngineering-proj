import React, { Component } from 'react'
import ShoppingheaderTabs from '../Component/ShoppingHeadertabs'
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Colortheme1 from '../Component/Colortheme1'
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import { Container } from '@mui/system';
import "./CenteredTabs.css"
function ShoppingHeader() {
    return (
      <header>
        <Container>
        <Box align="center" sx={{ p: 3, border: 'hidden' }} ><h1 className="customerheader">Mr. Fortune</h1> <h3 className="tabheader">CUSTOMER - {localStorage.getItem("userid")}님 환영합니다.</h3></Box>
        <Box >
        <ShoppingheaderTabs/>
        </Box>
        </Container>
      </header>
    );
}

export default ShoppingHeader