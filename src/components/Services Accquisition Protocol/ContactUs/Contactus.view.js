import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {withRouter} from 'react-router-dom';
import NavBar from '../../Core/Layout/Navbar/NavBar';
import Footer from '../../Core/Layout/Footer/Footer';


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const newstyle ={
background:'#0781bd'
};
const  
  form= {
    width: '100%',
    
  };
  const  
paper= {

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  };
  const ContactusView = props =>{
    const classes = useStyles();
    return (
<React.Fragment>
      <NavBar/>
       <br></br>
       <br></br>
       <br></br>


    <Container component="main" maxWidth="xs">
    <br/>
    <br/>
      <CssBaseline />
      <div style={paper}>
      <br/>
        <Typography component="h1" variant="h5">
       Contact Us
        </Typography>
        <br/>
        <br/>
        <form style={form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="Name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Email"
                label="Email"
                name="Email"
              
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
             
               multiline={true}
               rows={2}
               rowsMax={4}
                variant="outlined"
                required
                fullWidth
                id="Message"
                label="Message"
                name="Message"
               
              />
            </Grid>
           
            <Grid item xs={12}>
              
            </Grid>
          </Grid>
          <br/>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={newstyle}
          >
            Send
          </Button>
          <br/>
          <br/>
          <Grid container justify="flex-end" >
            
          </Grid>
        </form>
        <br/>
        
      </div>
      
     
    </Container>
    <Footer/>
    </React.Fragment>
  
  );
};
export default  withRouter(ContactusView);