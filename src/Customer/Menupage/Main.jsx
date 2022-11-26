import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../../Component/Header';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Colortheme1 from '../../Component/Colortheme1';
import { purple } from '@mui/material/colors';
import ControlledOpenSelect from '../../Component/Select';
import {dinner, menustyle, basicmenu} from "../../Component/item"
import {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import CartContext, {CartProvider, CartConsumer} from '../../Context/CartContext'
import Detailmenu from '../../Component/Detailbutton'
import "./menu.css"
import {useContext} from "react"

// export function CustomizedButtons() {
//   const Cart = React.useContext(CartContext)
//   const {menu1Cart1, menu2Cart1, menu3Cart1, menu4Cart1, dinnerCart,
//         AddMenu1, AddMenu2, AddMenu3, AddMenu4, AddDinner,} = Cart
  
//   return (
//     <ColorButton variant="contained" onClick={{}}>장바구니에 추가</ColorButton>
//   );
// }

function Menupage() {
  const Cart = React.useContext(CartContext)
  const {menu1Cart1, menu2Cart1, menu3Cart1, menu4Cart1, dinnerCart,
        AddMenu1, AddMenu2, AddMenu3, AddMenu4, AddDinner1, AddDinner2, AddDinner3, AddDinner4} = Cart
  return (
    <Container>
    <Container fixed>
    <Box sx={{ flexGrow: 1, margin: 10}} >
      <Grid container rowSpacing={8} columnSpacing={9}>
        <Grid item xs={6}>
          <Item elevation={8} sx={{borderRadius:'25px'}}>
          <div className="menu1">
            <h3>발렌타인 디너(Valentine dinner)</h3>
            <ul>
              <li>와인 1잔 <Detailmenu dinnerid={1} menuid={2}/> </li>
              <li>스테이크 <Detailmenu dinnerid={1} menuid={1}/> </li>
            </ul>
            

            <ControlledOpenSelect dinnerid={1}/> 

            <h3>기본가격: ₩ {dinner[0].price} / ₩ {dinner[0].price+2000} / ₩ {dinner[0].price+5000}</h3>
            
            <ColorButton variant="contained" onClick={() => AddDinner1()}>장바구니에 추가</ColorButton> 
            </div>
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item elevation={8} sx={{borderRadius:'25px'}}>
          <div className="menu1">

            <h3>프렌치 디너(French dinner)</h3>
              <ul>
                <li>커피 1잔 <Detailmenu dinnerid={2} menuid={3}/> </li>
                <li>와인 1잔 <Detailmenu dinnerid={2} menuid={2}/> </li>
                <li>샐러드   <Detailmenu dinnerid={2} menuid={5}/> </li>
                <li>스테이크 <Detailmenu dinnerid={2} menuid={1}/> </li>
              </ul>
              <ControlledOpenSelect></ControlledOpenSelect>

            <h3>기본가격: ₩ {dinner[1].price} / ₩ {dinner[1].price+2000} / ₩ {dinner[1].price+5000}</h3>
            <ColorButton variant="contained" onClick={() => AddDinner2()}>장바구니에 추가</ColorButton> 
 
          </div>

          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item elevation={8} sx={{borderRadius:'25px'}}>
          <div className="menu1">

            <h3>잉글리시 디너(English dinner)</h3>
                <ul>
                  <li>에그 스크램블 <Detailmenu dinnerid={3} menuid={6}/> </li>
                  <li>베이컨       <Detailmenu  dinnerid={3} menuid={7}/> </li>
                  <li>빵           <Detailmenu  dinnerid={3} menuid={8}/> </li>
                  <li>스테이크     <Detailmenu dinnerid={3} menuid={1}/> </li>
                </ul>
                <ControlledOpenSelect></ControlledOpenSelect>

            <h3>기본가격: ₩ {dinner[2].price} / ₩ {dinner[2].price+2000} / ₩ {dinner[2].price+5000}</h3>
            <ColorButton variant="contained" onClick={() => AddDinner3()}>장바구니에 추가</ColorButton> 
 
            </div>

          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item elevation={8} sx={{borderRadius:'25px'}}>
          <div className="menu1">

            <h3>샴페인 축제 디너(Champagne Feast dinner)</h3>
                <ul>
                  <li>샴페인 1병      <Detailmenu dinnerid={4} menuid={4}/> </li>
                  <li>바게트빵 4조각  <Detailmenu dinnerid={4} menuid={9}/></li>
                  <li>커피 1포트     <Detailmenu dinnerid={4} menuid={3}/> </li>
                  <li>와인 1잔       <Detailmenu dinnerid={4} menuid={2}/> </li>
                  <li>스테이크       <Detailmenu dinnerid={4} menuid={1}/> </li>
                </ul>
                <ControlledOpenSelect></ControlledOpenSelect>
            <h3>₩ {dinner[3].price} / ₩ {dinner[3].price+2000} / ₩ {dinner[3].price+5000}</h3>
            <h3>* 2인 식사 기준 *</h3>
            
            <ColorButton variant="contained" onClick={() => AddDinner4()}>장바구니에 추가</ColorButton> 
 
            </div>

          </Item>
        </Grid>
      </Grid>
    </Box>
    
    </Container>
    </Container>
  );
}



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e8eaf6',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 700,
  width: 460,
}));



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: '#7e57c2',
  '&:hover': {
    backgroundColor: purple[700],
  bottom: 0
  },
}));


export default Menupage;

// function Menupage(){
//   return(
//     <div>help</div>
//   )
// }



