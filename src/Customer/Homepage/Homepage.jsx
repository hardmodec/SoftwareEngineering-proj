import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Header from './../../Component/Header';
import  Box  from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Colortheme1 from '../../Component/Colortheme1';
import { purple } from '@mui/material/colors';
import ControlledOpenSelect from '../../Component/Select';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import "../Accountpage/Accountpage.css"
import { borders } from '@mui/system';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: '#7e57c2',
  '&:hover': {
    backgroundColor: purple[700],
  bottom: 0
  },
}));



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e8eaf6',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 440,
  width: 460,
  
  
}));

function Homepage() {
  const navigate = useNavigate();
  return (
    <Container>
    <Container Fixed>
    <div className="homepage">
    <Box sx={{ flexGrow: 1, margin: 5}} >
      
        <Grid container rowSpacing={8} columnSpacing={9}>
          <Grid item xs={6}>
            <div className="homepage4">
            <ButtonBase sx={{ width: 300 }} onClick={() => navigate("/login")}>
            <Item elevation={8} sx={{borderRadius:'25px'}}>
              
              <div className="homepage2">
              <h3>Customer</h3>
              <h4>고객이신가요?</h4>
              </div>  
            </Item>
            </ButtonBase>
            </div>
          </Grid>

          <Grid item xs={6}>
          <ButtonBase  sx={{ width: 300 }} onClick={() => navigate("/stafflogin")}>
            <Item elevation={8} sx={{borderRadius:'25px'}}>
            <div className="homepage2" >

              <h3>Staff/Admin</h3>
              <h4>직원이신가요?</h4>
            </div>
            
            </Item>
            </ButtonBase>
          </Grid>
          
        </Grid>
        
    </Box>
    </div>
    </Container>
    </Container>
  );
}

export default Homepage