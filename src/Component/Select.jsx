import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import  Box  from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Colortheme1 from '../Component/Colortheme1'


export default function ControlledOpenSelect({dinnerid}) {
  const [price, setPrice] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setPrice(event.target.value);
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
        <InputLabel id="demo-controlled-open-select-label" color="info">STYLE</InputLabel>
        <Select
          dinnermenu= {dinnerid}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={price}
          label="style"
          onChange={handleChange}
          color="info"
        >
          <MenuItem value={0}>simple / +₩ 0.0</MenuItem>
          <MenuItem value={2000}>grand / +₩ 2.0</MenuItem>
          <MenuItem value={5000}>delux / +₩ 5.0</MenuItem>
        </Select>
      </FormControl>
      </ThemeProvider>
    </div>
  );
}