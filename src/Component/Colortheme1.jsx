import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const Colortheme1 = createTheme({
    palette: {
      primary: {
        main: '#90CAF9',
      },
      secondary: {
        main: '#9778ce',
      },
      error:{
        main: '#DCE775'
      },
      warning:{
        main: '#FFF176'
      },
      info:{
        main: '#b39ddb'
      },
      success:{
        main: '#2962FF'
      },
      text:{
        main: '#424242'
      },
      // background: {
      //   default: '#2C2C35'
      // },
      // mode: 'light',
      // bgcolor: '#90CAF9'
      
    },
  })

export default Colortheme1