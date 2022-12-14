import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Header from '../../Component/Header';
import Colortheme1 from '../../Component/Colortheme1'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import {Alerts1, Alerts2, Alerts3} from '../../Component/Alert'



function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="/home">
        Mr. Fortune
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

function Loginpage() {

  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "",password : ""  }); // const [values, setValues] = useState({ email: "", password1 : "", password2: "" });  

  const handleChange = (event) => {
    event.preventDefault(); 
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });  
  };
  const handleClick = async (e) => {
    e.preventDefault(); 
    await axios.post('http://35.216.103.95:3000/auth/login/', values)   //   await axios.post('http://35.216.103.95:3000/auth/registration/', values) 
    .then((res)=>{
      alert("로그인 성공!")
      console.log(res.data)
      localStorage.clear()
      localStorage.setItem('userid', res.data.user.email)
      localStorage.setItem('token', res.data.access_token)
      navigate('/menupage')
    })
    .catch((Error)=>{
      alert("이메일 혹은 비밀번호를 다시 확인해주세요.")
      console.log("로그인 실패 + \n" + Error)
    })
  };


  return (
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 7,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ThemeProvider theme={Colortheme1}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          </ThemeProvider>

          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <ThemeProvider theme={Colortheme1}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClick}
            >
              Sign In
            </Button>
            </ThemeProvider>
            <Grid container>
              <Grid item xs>
                
              </Grid>

              <ThemeProvider theme={Colortheme1}>
              <Grid item color="error">
                <Link  onClick={() => navigate("/login/signup")} variant="primary">
                  {'계정이 없으신가요? 회원가입'}
                </Link>
              </Grid>
              </ThemeProvider>

            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    
  );
}

export default Loginpage;