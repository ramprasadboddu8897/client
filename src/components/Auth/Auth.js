import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Icon from './icon';
import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';
import Input from './Input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [googleErrorAlert, setGoogleErrorAlert] = useState(false); // New state variable
  const dispatch = useDispatch();
  const nav = useNavigate();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      //dispatch(signup(form)); // While Directly Dispatching the Data Causing Error So Used Below Way
      handleSignUp(form);
    } else {
      //dispatch(signin(form));
      handleSignIn(form);
    }
  };
  const handleSignIn = async (formData) => {
    try {
      const data = await dispatch(signin(formData));
      // Handle successful sign-in here, e.g., set user data in state, navigate to another page
      nav('/');
    } catch (error) {
      // Handle sign-in error here, e.g., show an error message to the user
      console.log(error);
    }
  };

  const handleSignUp = async (formData) => {
    try {
      const data = await dispatch(signup(formData));
      // Handle successful sign-up here, e.g., set user data in state, navigate to another page
      nav('/');
    } catch (error) {
      // Handle sign-up error here, e.g., show an error message to the user
      console.log(error);
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: AUTH, data: { result, token } });

      nav('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => {
    setGoogleErrorAlert(true); // Set the state variable to true to trigger the alert
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          <GoogleLogin clientId="994060170320-ddkbu7gg9qk2ciome3hqrr020e2sv9ll.apps.googleusercontent.com"
        render={(renderProps) => (
          <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
            Google Sign In
          </Button>
        )}
        onSuccess={()=>googleSuccess()}
        onFailure={()=>googleError()}
        cookiePolicy="single_host_origin"/>
      {/* {googleErrorAlert && <p>Google Sign In was unsuccessful. Try again later</p>} Display the error alert conditionally */}
          <Grid container justify="center">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
