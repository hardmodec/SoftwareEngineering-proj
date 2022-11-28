import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import CartContext, {CartProvider, CartConsumer} from '../Context/CartContext'

function Detailmenu1({menuid}) {
    const Cart = React.useContext(CartContext)
    const {menu1Cart1, menu2Cart1, menu3Cart1, menu4Cart1, dinnerCart,
        AddMenu1, AddMenu2, AddMenu3, AddMenu4, AddDinner,} = Cart
        const [count1, setCount1] = React.useState(1);

        const handleChange1 = (event) => {
          setCount1(event.target.value);
          console.log(count1, 1, 'menu1111111')
          AddMenu1(menuid, count1)
        };
    
        return (
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Amount
                </InputLabel>
                <NativeSelect
                  defaultValue={1}
                  inputProps={{
                    name: 'amount',
                    id: menuid,
                  }}
                  onChange={handleChange1}

                >
                  <option onChange={() => AddMenu1(menuid, count1)} id={menuid} value={0}>0</option>
                  <option onChange={() => AddMenu1(menuid, count1)} id={menuid} value={1}>1</option>
                  <option onChange={() => AddMenu1(menuid, count1)} id={menuid} value={2}>2</option>
                  <option onChange={() => AddMenu1(menuid, count1)} id={menuid} value={3}>3</option>
                  <option onChange={() => AddMenu1(menuid, count1)} id={menuid} value={4}>4</option>
                  <option onChange={() => AddMenu1(menuid, count1)} id={menuid} value={5}>5</option>
                  <option onChange={() => AddMenu1(menuid, count1)} id={menuid} value={1}>선택완료</option>

                </NativeSelect>
              </FormControl>
            </Box>
          );
    }
  


function Detailmenu2({menuid}) {
  const Cart = React.useContext(CartContext)
  const {menu1Cart1, menu2Cart1, menu3Cart1, menu4Cart1, dinnerCart,
      AddMenu1, AddMenu2, AddMenu3, AddMenu4, AddDinner,} = Cart
      const [count2, setCount2] = React.useState(1);

      const handleChange2 = (event) => {
        setCount2(event.target.value);
        console.log(count2, 2, menuid, 4, 'menu222222')
        AddMenu2(menuid, count2)
      };
  
      return (
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Amount
              </InputLabel>
              <NativeSelect
                defaultValue={1}
                inputProps={{
                  name: 'amount',
                  id: menuid,
                }}
                onChange={handleChange2}

              >
                <option onClick={() => AddMenu2(menuid, 0)} id={menuid} value={0}>0</option>
                <option onClick={() => AddMenu2(menuid, 1)} id={menuid} value={1}>1</option>
                <option onClick={() => AddMenu2(menuid, 2)} id={menuid} value={2}>2</option>
                <option onClick={() => AddMenu2(menuid, 3)} id={menuid} value={3}>3</option>
                <option onClick={() => AddMenu2(menuid, 4)} id={menuid} value={4}>4</option>
                <option onClick={() => AddMenu2(menuid, 5)} id={menuid} value={5}>5</option>
                <option onChange={() => AddMenu1(menuid, 1)} id={menuid} value={1}>선택완료</option>

              </NativeSelect>
            </FormControl>
          </Box>
        );
  }
 
  


function Detailmenu3({menuid}) {
  const Cart = React.useContext(CartContext)
  const {menu1Cart1, menu2Cart1, menu3Cart1, menu4Cart1, dinnerCart,
      AddMenu1, AddMenu2, AddMenu3, AddMenu4, AddDinner,} = Cart
      const [count1, setCount1] = React.useState(1);
      const [count2, setCount2] = React.useState(1);
      const [count3, setCount3] = React.useState(1);
      const [count4, setCount4] = React.useState(1);

      const handleChange3 = (event) => {
        setCount3(event.target.value);
        console.log(count3, 3, 'menu333333')
        AddMenu3(menuid, count3)
      };

      
      return (
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Amount
              </InputLabel>
              <NativeSelect
                defaultValue={1}
                inputProps={{
                  name: 'amount',
                  id: menuid,
                }}
                onChange={handleChange3}

              >
                <option onClick={() => AddMenu3(menuid, 0)} id={menuid} value={0}>0</option>
                <option onClick={() => AddMenu3(menuid, 1)} id={menuid} value={1}>1</option>
                <option onClick={() => AddMenu3(menuid, 2)} id={menuid} value={2}>2</option>
                <option onClick={() => AddMenu3(menuid, 3)} id={menuid} value={3}>3</option>
                <option onClick={() => AddMenu3(menuid, 4)} id={menuid} value={4}>4</option>
                <option onClick={() => AddMenu3(menuid, 5)} id={menuid} value={5}>5</option>
                <option onChange={() => AddMenu1(menuid, 1)} id={menuid} value={1}>선택완료</option>

              </NativeSelect>
            </FormControl>
          </Box>
        );
  }
  


function Detailmenu4({menuid}) {
  const Cart = React.useContext(CartContext)
  const {menu1Cart1, menu2Cart1, menu3Cart1, menu4Cart1, dinnerCart,
      AddMenu1, AddMenu2, AddMenu3, AddMenu4, AddDinner,} = Cart
      const [count4, setCount4] = React.useState(1);
      const handleChange4 = (event) => {
        setCount4(event.target.value);
        console.log(count4, 4, 'menu4444444')
        AddMenu4(menuid, count4)
      };
  
      return (
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Amount
              </InputLabel>
              <NativeSelect
                defaultValue={1}
                inputProps={{
                  name: 'amount',
                  id: menuid,
                }}
                onChange={handleChange4}

              >
                <option onClick={() => AddMenu4(menuid, 0)} id={menuid} value={0}>0</option>
                <option onClick={() => AddMenu4(menuid, 1)} id={menuid} value={1}>1</option>
                <option onClick={() => AddMenu4(menuid, 2)} id={menuid} value={2}>2</option>
                <option onClick={() => AddMenu4(menuid, 3)} id={menuid} value={3}>3</option>
                <option onClick={() => AddMenu4(menuid, 4)} id={menuid} value={4}>4</option>
                <option onClick={() => AddMenu4(menuid, 5)} id={menuid} value={5}>5</option>
                <option onChange={() => AddMenu1(menuid, 1)} id={menuid} value={1}>선택완료</option>

      
              </NativeSelect>
            </FormControl>
          </Box>
        );
  }

  function Detailmenu41({menuid}) {
    const Cart = React.useContext(CartContext)
    const {menu1Cart1, menu2Cart1, menu3Cart1, menu4Cart1, dinnerCart,
        AddMenu1, AddMenu2, AddMenu3, AddMenu4, AddMenu41, AddMenu42, AddMenu43, AddDinner,} = Cart
        const [count41, setCount41] = React.useState(1);
        const handleChange41 = (event) => {
          setCount41(event.target.value);
          console.log(count41, 41, 'menu41414141414141')
          AddMenu41(menuid, count41)
        };
    
        return (
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Amount
                </InputLabel>
                <NativeSelect
                  defaultValue={1}
                  inputProps={{
                    name: 'amount',
                    id: menuid,
                  }}
                  onChange={handleChange41}
  
                >
                  <option onClick={() => AddMenu4(menuid, 0)} id={menuid} value={0}>0</option>
                  <option onClick={() => AddMenu4(menuid, 1)} id={menuid} value={1}>1</option>
                  <option onClick={() => AddMenu4(menuid, 2)} id={menuid} value={2}>2</option>
                  <option onClick={() => AddMenu4(menuid, 3)} id={menuid} value={3}>3</option>
                  <option onClick={() => AddMenu4(menuid, 4)} id={menuid} value={4}>4</option>
                  <option onClick={() => AddMenu4(menuid, 5)} id={menuid} value={5}>5</option>
                  <option onChange={() => AddMenu4(menuid, 1)} id={menuid} value={1}>선택완료</option>

                </NativeSelect>
              </FormControl>
            </Box>
          );
    }

    function Detailmenu42({menuid}) {
      const Cart = React.useContext(CartContext)
      const {menu1Cart1, menu2Cart1, menu3Cart1, menu4Cart1, dinnerCart,
          AddMenu1, AddMenu2, AddMenu3, AddMenu4, AddMenu41, AddMenu42, AddMenu43, AddDinner,} = Cart
          const [count42, setCount42] = React.useState(1);
          const handleChange42 = (event) => {
            setCount42(event.target.value);
            console.log(count42, 42, 'menu42242424242424')
            AddMenu42(menuid, count42)
          };
      
          return (
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Amount
                  </InputLabel>
                  <NativeSelect
                    defaultValue={1}
                    inputProps={{
                      name: 'amount',
                      id: menuid,
                    }}
                    onChange={handleChange42}
    
                  >


                    <option onClick={() => AddMenu4(menuid, 0)} id={menuid} value={0}>0</option>
                    <option onClick={() => AddMenu4(menuid, 1)} id={menuid} value={1}>1</option>
                    <option onClick={() => AddMenu4(menuid, 2)} id={menuid} value={2}>2</option>
                    <option onClick={() => AddMenu4(menuid, 3)} id={menuid} value={3}>3</option>
                    <option onClick={() => AddMenu4(menuid, 4)} id={menuid} value={4}>4</option>
                    <option onClick={() => AddMenu4(menuid, 5)} id={menuid} value={5}>5</option>
                    <option onChange={() => AddMenu4(menuid, 1)} id={menuid} value={1}>선택완료</option>

                  </NativeSelect>
                </FormControl>
              </Box>
            );
      }

      function Detailmenu43({menuid}) {
        const Cart = React.useContext(CartContext)
        const {menu1Cart1, menu2Cart1, menu3Cart1, menu4Cart1, dinnerCart,
            AddMenu1, AddMenu2, AddMenu3, AddMenu4, AddMenu41, AddMenu42, AddMenu43, AddDinner,} = Cart
            const [count43, setCount43] = React.useState(1);
            const handleChange43 = (event) => {
              setCount43(event.target.value);
              console.log(count43, 43, 'menu43434343434343')
              AddMenu43(menuid, count43)
            };
        
            return (
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                      Amount
                    </InputLabel>
                    <NativeSelect
                      defaultValue={1}
                      inputProps={{
                        name: 'amount',
                        id: menuid,
                      }}
                      onChange={handleChange43}
      
                    >
                      <option onClick={() => AddMenu4(menuid, 0)} id={menuid} value={0}>0</option>
                      <option onClick={() => AddMenu4(menuid, 1)} id={menuid} value={1}>1</option>
                      <option onClick={() => AddMenu4(menuid, 2)} id={menuid} value={2}>2</option>
                      <option onClick={() => AddMenu4(menuid, 3)} id={menuid} value={3}>3</option>
                      <option onClick={() => AddMenu4(menuid, 4)} id={menuid} value={4}>4</option>
                      <option onClick={() => AddMenu4(menuid, 5)} id={menuid} value={5}>5</option>
                      <option onChange={() => AddMenu4(menuid, 1)} id={menuid} value={1}>선택완료</option>

                    </NativeSelect>
                  </FormControl>
                </Box>
              );
        }

export {Detailmenu1, Detailmenu2, Detailmenu3, Detailmenu4, Detailmenu41, Detailmenu42, Detailmenu43}