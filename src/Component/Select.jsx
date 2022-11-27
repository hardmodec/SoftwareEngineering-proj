import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import  Box  from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Colortheme1 from '../Component/Colortheme1'
import CartContext, {CartProvider, CartConsumer} from '../Context/CartContext'


function ControlledOpenSelect1() {
  const Cart = React.useContext(CartContext)
        const {menu1Cart1, menu2Cart1, menu3Cart1, menu4Cart1, dinnerCart,
            AddMenu1, AddMenu2, AddMenu3, AddMenu4, AddMenu41, AddMenu42, AddMenu43, AddDinner, Addstyle1, Addstyle2, Addstyle3, Addstyle4} = Cart
  const [dinstyle1, setDinstyle1] = React.useState(1);
  const [open, setOpen] = React.useState(false);

    const handleChange1 = (event) => {
      setDinstyle1(event.target.value);
      console.log(111, 'dsdsdsd111')
      Addstyle1(dinstyle1)
    };
  

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
    <ThemeProvider theme={Colortheme1}>
    <Box
        m={1}
        //margin
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
    >
      <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen} color="info">
        Set the style
      </Button>
    </Box>
      <FormControl sx={{ m: 1, minWidth: 120 }}size="small">
        <InputLabel id="demo-controlled-open-select-label" color="info">simple</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          // value={price}
          label="style"
          onChange={handleChange1}
          color="info"
        >
          <MenuItem value={1}>simple / +₩ 0.0</MenuItem>
          <MenuItem value={2}>grand / +₩ 2.0</MenuItem>
          <MenuItem value={3}>delux / +₩ 5.0</MenuItem>
        </Select>
      </FormControl>
      </ThemeProvider>
    </div>
  );
}

function ControlledOpenSelect2() {
  const Cart = React.useContext(CartContext)
        const {menu1Cart1, menu2Cart1, menu3Cart1, menu4Cart1, dinnerCart,
            AddMenu1, AddMenu2, AddMenu3, AddMenu4, AddMenu41, AddMenu42, AddMenu43, Addstyle2, Addstyle3, Addstyle4, AddDinner,} = Cart
  const [dinstyle2, setdinstyle2] = React.useState(4);
  const [open, setOpen] = React.useState(false);

    const handleChange2 = (event) => {
      setdinstyle2(event.target.value);
      console.log( 222, 'ds222222')
      Addstyle2(dinstyle2)
    };
  

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
    <ThemeProvider theme={Colortheme1}>
    <Box
        m={1}
        //margin
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
    >
      <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen} color="info">
        Set the style
      </Button>
    </Box>
      <FormControl sx={{ m: 1, minWidth: 120 }}size="small">
        <InputLabel id="demo-controlled-open-select-label" color="info">simple</InputLabel>
        <Select
          
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          // value={price}
          label="style"
          onChange={handleChange2}
          color="info"
        >
          <MenuItem value={4}>simple / +₩ 0.0</MenuItem>
          <MenuItem value={5}>grand / +₩ 2.0</MenuItem>
          <MenuItem value={6}>delux / +₩ 5.0</MenuItem>
        </Select>
      </FormControl>
      </ThemeProvider>
    </div>
  );
}

function ControlledOpenSelect3() {
  const Cart = React.useContext(CartContext)
        const {menu1Cart1, menu2Cart1, menu3Cart1, menu4Cart1, dinnerCart,
            AddMenu1, AddMenu2, AddMenu3, AddMenu4, AddMenu41, AddMenu42, AddMenu43, Addstyle2, Addstyle3, Addstyle4, AddDinner,} = Cart
  const [dinstyle3, setDinstyle3] = React.useState(7);
  const [open, setOpen] = React.useState(false);

    const handleChange3 = (event) => {
      setDinstyle3(event.target.value);
      console.log( 333, 'ds333333')
      Addstyle3(dinstyle3)
    };
  

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
    <ThemeProvider theme={Colortheme1}>
    <Box
        m={1}
        //margin
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
    >
      <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen} color="info">
        Set the style
      </Button>
    </Box>
      <FormControl sx={{ m: 1, minWidth: 120 }}size="small">
        <InputLabel id="demo-controlled-open-select-label" color="info">simple</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          // value={price}
          label="style"
          onChange={handleChange3}
          color="info"
        >
          <MenuItem value={7}>simple / +₩ 0.0</MenuItem>
          <MenuItem value={8}>grand / +₩ 2.0</MenuItem>
          <MenuItem value={9}>delux / +₩ 5.0</MenuItem>
        </Select>
      </FormControl>
      </ThemeProvider>
    </div>
  );
}


function ControlledOpenSelect4(){
  const Cart = React.useContext(CartContext)
        const {menu1Cart1, menu2Cart1, menu3Cart1, menu4Cart1, dinnerCart,
            AddMenu1, AddMenu2, AddMenu3, AddMenu4, AddMenu41, AddMenu42, AddMenu43, Addstyle2, Addstyle3, Addstyle4, AddDinner,} = Cart
  const [dinstyle4, setDinstyle4] = React.useState(10);
  const [open, setOpen] = React.useState(false);

  const handleChange4 = (event) => {
    setDinstyle4(event.target.value);
    console.log( 4444, 'dsds44444444')
    Addstyle4(dinstyle4)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
    <ThemeProvider theme={Colortheme1}>
    <Box
        m={1}
        //margin
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
    >
      <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen} color="info">
        Set the style
      </Button>
    </Box>
      <FormControl sx={{ m: 1, minWidth: 120 }}size="small">
        <InputLabel id="demo-controlled-open-select-label" color="info">grand</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          // value={price}
          label="style"
          onChange={handleChange4}
          color="info"
        >
          {/* <MenuItem value={0}>simple / +₩ 0.0</MenuItem> */}
          <MenuItem value={10}>grand / +₩ 2.0</MenuItem>
          <MenuItem value={11}>delux / +₩ 5.0</MenuItem>
        </Select>
      </FormControl>
      </ThemeProvider>
    </div>
  );
}


export {ControlledOpenSelect1, ControlledOpenSelect2, ControlledOpenSelect3, ControlledOpenSelect4}