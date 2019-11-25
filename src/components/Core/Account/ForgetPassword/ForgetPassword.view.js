import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { NavLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from "../../Layout/Footer/Footer";
import Bar from "../../Layout/Navbar/NavBar";



const useStyles = makeStyles(theme => ({
  '@global': {
    body: {

      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(5),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ForgetPasswordView = props=> {
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
          Forget Password
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          
          <NavLink to="/ForgetPassword/ConfirmFromEmail"  style={{color:"White",textDecoration: 'none'}} >
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style = {{background: "#0781bd"}}
            // onClick={()=>this.props.history.push('/manageInventory')}
          >
            Submit
          </Button>
          </NavLink>

          
          <Grid container>
            <Grid item xs>
            <NavLink to="/SignIn"  style={{color:"White",textDecoration: 'none'}} >
            <Link href="#" variant="body2">
                Another Account?
                </Link>
              </NavLink>
            </Grid>
            <Grid item>
            <NavLink to="/Register"  style={{color:"White",textDecoration: 'none'}} >
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
              </NavLink>
            </Grid>
          </Grid>
          <br/>
          <br/>
        </form>
      </div>
      
    </Container>
    <Footer/>
    </div>
  );
};

export default ForgetPasswordView;