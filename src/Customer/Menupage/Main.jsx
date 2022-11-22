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
import { useStateValue } from "../../StateProvider";


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: '#7e57c2',
  '&:hover': {
    backgroundColor: purple[700],
  bottom: 0
  },
}));

export function CustomizedButtons() {
  const [{ cart }, dispatch] = useStateValue();
  const addToCart = () => {
    // dispatch the item into the data layer
    // dispatch({
    //   type: "ADD_TO_CART",
    //   item: {
    //     id: id,
    //     title: title,
    //     image: image,
    //     price: price,
    //     rating: rating,
    //   },
    // });
  };
  return (
    <ColorButton variant="contained">장바구니에 추가</ColorButton>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e8eaf6',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 440,
  width: 460,
  
  
}));

function BasicGrid() {
  return (
    <Container>
    <Container Fixed>
    <Box sx={{ flexGrow: 1, margin: 5}} >
      <Grid container rowSpacing={8} columnSpacing={9}>
        <Grid item xs={6}>
          <Item>
            <h3>발렌타인 디너(Valentine dinner)</h3>
            <ul>
              <li>와인 1잔</li>
              <li>스테이크</li>
            </ul>
            <ControlledOpenSelect></ControlledOpenSelect>

            <h3>₩ 5.0 / ₩ 6.0 / ₩ 7.0</h3>
            <Box
              m={1}
              display="flex"
              justifyContent="center"
              alignItems="justify-end"
            >

              <CustomizedButtons >
              </CustomizedButtons>  
            </Box>
          </Item>
          
        </Grid>

        <Grid item xs={6}>
          <Item>
            <h3>프렌치 디너(French dinner)</h3>
              <ul>
                <li>커피 1잔</li>
                <li>와인 1잔</li>
                <li>샐러드</li>
                <li>스테이크</li>
              </ul>
              <ControlledOpenSelect></ControlledOpenSelect>

            <h3>₩ 6000</h3>
          <CustomizedButtons>
          </CustomizedButtons> 
          </Item>
        </Grid>

        <Grid item xs={6}>
        
          <Item>
            <h3>잉글리시 디너(English dinner)</h3>
                <ul>
                  <li>에그 스크램블</li>
                  <li>베이컨</li>
                  <li>빵</li>
                  <li>스테이크</li>
                </ul>
                <ControlledOpenSelect></ControlledOpenSelect>

            <h3>₩ 7000</h3>
            <CustomizedButtons>
            </CustomizedButtons> 
          </Item>
          
        
        </Grid>

        <Grid item xs={6}>
        <ButtonBase > 
          <Item>
            <h3>샴페인 축제 디너(French dinner)</h3>
                <ul>
                  <li>샴페인 1병</li>
                  <li>바게트빵 4조각</li>
                  <li>커피 1포트</li>
                  <li>와인 2잔</li>
                  <li>스테이크</li>
                </ul>
                <ControlledOpenSelect></ControlledOpenSelect>
            <h3>₩ 8000</h3>
            <h3>* 2인 이상 주문부터 가능 *</h3>
            
            <CustomizedButtons>
            </CustomizedButtons> 
          </Item>
          </ButtonBase>
        </Grid>

        
        
      </Grid>
      
    </Box>
    <Grid item xs={12} >
          <Item>xs=8</Item>
        </Grid>
    </Container>
    </Container>
  );
}
function StandardImageList() {
  return (
    <ImageList sx={{ width: 1, height: 600 }} cols={1} rowHeight={4}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  //   title: 'Burger',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
  //   title: 'Camera',
  // }
];

function BoxComponent() {
  return (
    <Box component="span" sx={{ p: 1, border: '1px dashed grey' }}>
      <Button>Save</Button>
    </Box>
  );
}



function Nav() {
  return (
    <nav style={{ border: '3px solid brown' }}>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  );
}

function Food() {
  return (
    <article style={{ border: '3px solid brown'}}>
      <h2>welcome1</h2>
      hello web
    </article>
  );
}

function Menupage() {
  return (
    <Container>
      {/* <Header></Header> */}
      <Container Fixed>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing="70">
            <Grid item xs="12">
              <Nav></Nav>
              <StandardImageList></StandardImageList>
            </Grid>

            <Grid item xs="12">
              <Food>fsfsf</Food>
            </Grid>
            <Grid item xs="12">
              <Food></Food>
            </Grid>
            <Grid item xs="12">
              <Food></Food>
            </Grid>
            <Grid item xs="12">
              <Food></Food>
            </Grid>
            <Grid item xs="12">
              <Food></Food>
            </Grid>
            <Grid item xs="12">
              <Food></Food>
            </Grid>
            <Grid item xs="12">
              <Food></Food>
            </Grid>
          </Grid>

          {/* <BoxComponent></BoxComponent> */}
        </Box>
      </Container>
    </Container>
  );
}

export default BasicGrid