import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import CartContext, {CartProvider, CartConsumer} from '../Context/CartContext'

export default function Detailmenu({dinnerid, menuid}) {
    const Cart = React.useContext(CartContext)
    const {menu1Cart1, menu2Cart1, menu3Cart1, menu4Cart1, dinnerCart,
        AddMenu1, AddMenu2, AddMenu3, AddMenu4, AddDinner,} = Cart
    
    if (dinnerid === 1){
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
                >
                  <option onClick={() => AddMenu1(menuid, 0)} id={menuid} value={0}>0</option>
                  <option onClick={() => AddMenu1(menuid, 1)} id={menuid} value={1}>1</option>
                  <option onClick={() => AddMenu1(menuid, 2)} id={menuid} value={2}>2</option>
                  <option onClick={() => AddMenu1(menuid, 3)} id={menuid} value={3}>3</option>
                  <option onClick={() => AddMenu1(menuid, 4)} id={menuid} value={4}>4</option>
                  <option onClick={() => AddMenu1(menuid, 5)} id={menuid} value={5}>5</option>
        
                </NativeSelect>
              </FormControl>
            </Box>
          );
    }
    else if(dinnerid === 2){
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
                >
                  <option onClick={() => AddMenu2(menuid, 0)} id={menuid} value={0}>0</option>
                  <option onClick={() => AddMenu2(menuid, 1)} id={menuid} value={1}>1</option>
                  <option onClick={() => AddMenu2(menuid, 2)} id={menuid} value={2}>2</option>
                  <option onClick={() => AddMenu2(menuid, 3)} id={menuid} value={3}>3</option>
                  <option onClick={() => AddMenu2(menuid, 4)} id={menuid} value={4}>4</option>
                  <option onClick={() => AddMenu2(menuid, 5)} id={menuid} value={5}>5</option>
        
                </NativeSelect>
              </FormControl>
            </Box>
          );
    }
    else if(dinnerid === 3){
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
                >
                  <option onClick={() => AddMenu3(menuid, 0)} id={menuid} value={0}>0</option>
                  <option onClick={() => AddMenu3(menuid, 1)} id={menuid} value={1}>1</option>
                  <option onClick={() => AddMenu3(menuid, 2)} id={menuid} value={2}>2</option>
                  <option onClick={() => AddMenu3(menuid, 3)} id={menuid} value={3}>3</option>
                  <option onClick={() => AddMenu3(menuid, 4)} id={menuid} value={4}>4</option>
                  <option onClick={() => AddMenu3(menuid, 5)} id={menuid} value={5}>5</option>
        
                </NativeSelect>
              </FormControl>
            </Box>
          );
    }
    else{
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
                >
                  <option onClick={() => AddMenu4(menuid, 0)} id={menuid} value={0}>0</option>
                  <option onClick={() => AddMenu4(menuid, 1)} id={menuid} value={1}>1</option>
                  <option onClick={() => AddMenu4(menuid, 2)} id={menuid} value={2}>2</option>
                  <option onClick={() => AddMenu4(menuid, 3)} id={menuid} value={3}>3</option>
                  <option onClick={() => AddMenu4(menuid, 4)} id={menuid} value={4}>4</option>
                  <option onClick={() => AddMenu4(menuid, 5)} id={menuid} value={5}>5</option>
        
                </NativeSelect>
              </FormControl>
            </Box>
          );
    }
  
}