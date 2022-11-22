import React, { Component } from 'react'
import CenteredTabs from '../Component/CenteredTabs'
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Colortheme1 from '../Component/Colortheme1'
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import { Container } from '@mui/system';

function Header() {
    return (
      <header>
        <Container Fluid>
        <Box align="center" sx={{ p: 3, border: '2px dashed grey' }} ><h1>Mr. Fortune</h1> <h3>CUSTOMER</h3></Box>
        <Box >
        <CenteredTabs></CenteredTabs>
        </Box>
        </Container>
      </header>
    );
}

export default Header
