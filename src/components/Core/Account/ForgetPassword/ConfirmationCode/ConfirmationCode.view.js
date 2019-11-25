import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import { NavLink } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from "../../../Layout/Footer/Footer";
import Bar from "../../../Layout/Navbar/NavBar";

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8.9),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(5.3),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#0781bd',
    color: '#ffffff',
  },
}));



const ConfirmationCodeView = props => {
  const classes = useStyles();

  return (
    <div>
      <Bar/>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Confirmation
          <br/>
          
        </Typography> 
        
        <p >Code has sent to your Primary Email. Write it in the box...</p>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="confirmation code"
            label="Confirmation Code"
            name="code"
            autoFocus
          />
          
          
          <NavLink to="/ForgetPassword/ConfirmFromEmail/CreateNewPassword"  style={{color:"White",textDecoration: 'none'}} >
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            style = {{background: "#0781bd"}}
          >
            Submit
          </Button>
          </NavLink>
          
          <br/>
          
        </form>
      </div>
      
    </Container>
    <Footer/>
    </div>
  );
};

export default ConfirmationCodeView;