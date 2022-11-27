import { useNavigate } from 'react-router-dom';
import React, { Component } from 'react'
import CenteredTabs from '../Component/CenteredTabs'
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Colortheme1 from '../Component/Colortheme1'
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import { Container } from '@mui/system';
import "./CenteredTabs.css"
import {logout} from './CenteredTabs'


function LoginHeader() {
    const navigate = useNavigate();

    return (
      
        <Container>
        <Box align="center" sx={{ p: 3, border: 'hidden' }} ><button className="headerbtn" onClick={logout}><h1 className="customerheader">Mr. Fortune</h1></button> <h3 className="customerheader">CUSTOMER</h3></Box>
        <Box >
        </Box>
        </Container>
      
    );
}

export default LoginHeader



