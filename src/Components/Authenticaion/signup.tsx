// @ts-nocheck
import React from "react";
import {    Avatar, Typography, Grid, TextField, FormControlLabel, Checkbox, Box, Button} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
// import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useSignupForm from "./customHooks";
import validate from "./validateInfo";
import "./Form.css"
import GoogleLoginComponent from "./googleLogin";
export interface SignupProps {
    
}
function Copyright() {
  
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" to="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  
  
  
  
  //const useStyles = makeStyles((theme) => ({
  //   paper: {
  //     marginTop: theme.spacing(8),
  //     display: 'flex',
  //     flexDirection: 'column',
  //     alignItems: 'center',
  //   },
  //   avatar: {
  //     margin: theme.spacing(1),
  //     backgroundColor: theme.palette.secondary.main,
  //   },
  //   form: {
  //     width: '100%', // Fix IE 11 issue.
  //     marginTop: theme.spacing(3),
  //   },
  //   submit: {
  //     margin: theme.spacing(3, 0, 2),
  //   },
  // }));
  
  
  
const Signup = ({submitForm}) => {
   // const classes = useStyles();
    console.log(submitForm);
    const signup = () => {
      alert(`User Created!
             Name: ${inputs.firstName} ${inputs.lastName}
             Email: ${inputs.email}
             Password:${inputs.password}
             Checkbox: ${inputs.chec}
             `);
    }

    const {inputs, handleInputChange, handleSubmit,error} = useSignupForm(validate,signup,submitForm);
    // console.log(useSignupForm(validate,signup,submitForm))
    return ( <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div >
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>


      <form  onSubmit={handleSubmit}  noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField onChange={handleInputChange} value={inputs.firstName } 
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus className="form-inputs"
            />
            {error.firstName && <p>{error.firstName}</p>}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
            onChange={handleInputChange} value={inputs.lastName}
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
              
            />
            {error.lastName && <p>{error.lastName}</p>}
          </Grid>
          <Grid item xs={12}>
            <TextField
            onChange={handleInputChange} value={inputs.email}
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              
            />
              {error.email && <p>{error.email}</p>}
          </Grid>
          <Grid item xs={12}>
            <TextField
            onChange={handleInputChange} value={inputs.password}
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
             
            />
              {error.password && <p>{error.password}</p>}
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox onChange={handleInputChange} name="chec" value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="#">
              Already have an account? Sign in
            </Link>
          </Grid>
         
          
        </Grid>
        
      </form>
      <br/>
      {/* <Grid container justifyContent="flex-end">
         <Grid item>
          <GoogleLoginComponent/>
          </Grid>
        </Grid> */}
    </div>
    <Box mt={5}>
      <Copyright />
    </Box>
  </Container>);
}
 
export default Signup;