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
import CartContext from '../../Context/CartContext'
import {CartProvider, CartConsumer} from '../../Context/CartContext'
import Detailmenu from '../../Component/Detailbutton'
import "./menu.css"


export function CustomizedButtons() {
  
  // const [ordercart, setOrdercart] = useState([])
  // setOrdercart([...ordercart, menucart])
  return (
    <ColorButton variant="contained" onClick={{}}>장바구니에 추가</ColorButton>
  );
}

function Menupage() {
  const [ordercart, setOrdercart] = useState()
  return (
    <Container>
    <Container Fixed>
    <Box sx={{ flexGrow: 1, margin: 10}} >
      <Grid container rowSpacing={8} columnSpacing={9}>
        <Grid item xs={6}>
          <Item elevation={8}>
          <div className="menu1">
            <h3>발렌타인 디너(Valentine dinner)</h3>
            <ul>
              <li>와인 1잔 <Detailmenu menuid={2}/> </li>
              <li>스테이크 <Detailmenu menuid={1}/> </li>
            </ul>
            

            <ControlledOpenSelect></ControlledOpenSelect>

            <h3>기본가격: ₩ {dinner[0].price} / ₩ {dinner[0].price+2000} / ₩ {dinner[0].price+5000}</h3>
            
              <CustomizedButtons >
              </CustomizedButtons>  
            </div>
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item elevation={8}>
          <div className="menu1">

            <h3>프렌치 디너(French dinner)</h3>
              <ul>
                <li>커피 1잔 <Detailmenu menuid={3}/> </li>
                <li>와인 1잔 <Detailmenu menuid={2}/> </li>
                <li>샐러드   <Detailmenu menuid={5}/> </li>
                <li>스테이크 <Detailmenu menuid={1}/> </li>
              </ul>
              <ControlledOpenSelect></ControlledOpenSelect>

            <h3>기본가격: ₩ {dinner[1].price} / ₩ {dinner[1].price+2000} / ₩ {dinner[1].price+5000}</h3>
          <CustomizedButtons>
          </CustomizedButtons> 
          </div>

          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item elevation={8}>
          <div className="menu1">

            <h3>잉글리시 디너(English dinner)</h3>
                <ul>
                  <li>에그 스크램블 <Detailmenu menuid={6}/> </li>
                  <li>베이컨       <Detailmenu menuid={7}/> </li>
                  <li>빵           <Detailmenu menuid={8}/> </li>
                  <li>스테이크     <Detailmenu menuid={1}/> </li>
                </ul>
                <ControlledOpenSelect></ControlledOpenSelect>

            <h3>기본가격: ₩ {dinner[2].price} / ₩ {dinner[2].price+2000} / ₩ {dinner[2].price+5000}</h3>
            <CustomizedButtons>
            </CustomizedButtons> 
            </div>

          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item elevation={8}>
          <div className="menu1">

            <h3>샴페인 축제 디너(Champagne Feast dinner)</h3>
                <ul>
                  <li>샴페인 1병      <Detailmenu menuid={4}/> </li>
                  <li>바게트빵 4조각  <Detailmenu menuid={9}/></li>
                  <li>커피 1포트     <Detailmenu menuid={3}/> </li>
                  <li>와인 1잔       <Detailmenu menuid={2}/> </li>
                  <li>스테이크       <Detailmenu menuid={1}/> </li>
                </ul>
                <ControlledOpenSelect></ControlledOpenSelect>
            <h3>₩ {dinner[3].price} / ₩ {dinner[3].price+2000} / ₩ {dinner[3].price+5000}</h3>
            <h3>* 2인 식사 기준 *</h3>
            
            <CustomizedButtons>
            </CustomizedButtons> 
            </div>

          </Item>
        </Grid>
      </Grid>
    </Box>
    {/* <Grid item xs={12} >
          <Item>xs=8</Item>
      </Grid> */}
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

export default Menupage;


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: '#7e57c2',
  '&:hover': {
    backgroundColor: purple[700],
  bottom: 0
  },
}));





// const DUMMY_ITEM_LIST = [
//   {
//     id: 1,
//     name: '영귤섬 아이스티',
//     packingState: '포장불가',
//     price: 13000,
//     amount: 1,
//     isChecked: true,
//   },
//   {
//     id: 2,
//     name: '러블리 티 박스',
//     packingState: '포장가능',
//     price: 20000,
//     amount: 1,
//     isChecked: true,
//   },
//   {
//     id: 3,
//     name: '그린티 랑드샤 세트',
//     packingState: '포장불가',
//     price: 36000,
//     amount: 1,
//     isChecked: true,
//   },
// ];

// <ul>
// {itemList.map(item => {
//   return (
//     <CartItem key={item.id} item={item} onChangeProps={onChangeProps} />
//   );
// })}
// </ul>

// const amountInputHandler = event => {
//   onChangeProps(item.id, 'amount', +event.target.value);
// };

// const amountIncreaseHandler = event => {
//   event.preventDefault();
//   onChangeProps(item.id, 'amount', item.amount + 1);
// };

// const amountDecreaseHandler = event => {
//   event.preventDefault();
//   onChangeProps(item.id, 'amount', item.amount - 1);
// };

// useEffect(() => {
//   setIsBtnValid(item.amount > 1);
// }, [item.amount]);

// const onChangeProps = (id, key, value) => {
//   setItemList(prevState => {
//     return prevState.map(obj => {
//       if (obj.id === id) {
//         return { ...obj, [key]: value };
//       } else {
//         return { ...obj };
//       }
//     });
//   });
// };

// const totalCheckboxHandler = value => {
//   setItemList(prevState => {
//     return prevState.map(obj => {
//       return { ...obj, isChecked: value };
//     });
//   });
//   setTotalCheckboxisChecked(value);
// };



// import ItemPrice from './ItemPrice';
// import './SideBar.scss';

// const SideBar = props => {
//   const { totalPrice } = props;

//   const [deliveryCost, setDeliveryCost] = useState(0);

//   useEffect(() => {
//     setDeliveryCost(totalPrice < 30000 ? (totalPrice ? 3000 : 0) : 0);
//   }, [totalPrice]);

//   const PRICE_CATEGORY_LIST = [
//     {
//       id: 1,
//       title: '상품 금액',
//       price: `+${totalPrice.toLocaleString('en')}`,
//     },
//     {
//       id: 2,
//       title: '상품 할인',
//       price: '-0',
//     },
//     {
//       id: 3,
//       title: '포장비',
//       price: '+0',
//     },
//     {
//       id: 4,
//       title: '부가 쇼핑백',
//       price: '+0',
//     },
//     {
//       id: 5,
//       title: '배송비',
//       price: `+${deliveryCost.toLocaleString('en')}`,
//     },
//   ];

//   return (
//     <section className="sidebar">
//       <div className="totalAmountOfPrice">
//         <ul>
//           {PRICE_CATEGORY_LIST.map(ele => (
//             <ItemPrice key={ele.id} title={ele.title} price={ele.price} />
//           ))}
//         </ul>
//         <div className="expectedPrice">
//           <p>결제 예상 금액</p>
//           <p>
//             <span>{(totalPrice + deliveryCost).toLocaleString('en')}</span>
//             <span>원</span>
//           </p>
//         </div>
//         <button>{`${(totalPrice + deliveryCost).toLocaleString(
//           'en'
//         )}원 주문하기`}</button>
//       </div>
//     </section>
//   );
// };

// export SideBar;

// export default BasicGrid


// export newcart