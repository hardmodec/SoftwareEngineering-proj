import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import {useState} from 'react'




export default function Detailmenu({menuid}) {
    const [menucart, setMenucart1] = useState([])


    const Addmenu = (id, amount) => {
        setMenucart1(...menucart,{menuid: id, amount: amount})
    }
    
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
          <option onClick={{Addmenu}} id={menuid} value={0}>0</option>
          <option onClick={{Addmenu}} id={menuid} value={1}>1</option>
          <option onClick={{Addmenu}} id={menuid} value={2}>2</option>
          <option onClick={{Addmenu}} id={menuid} value={3}>3</option>
          <option onClick={{Addmenu}} id={menuid} value={4}>4</option>
          <option onClick={{Addmenu}} id={menuid} value={5}>5</option>

        </NativeSelect>
      </FormControl>
    </Box>
  );
}