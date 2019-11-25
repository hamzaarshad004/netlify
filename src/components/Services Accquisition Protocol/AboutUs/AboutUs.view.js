import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import banner from '../../Images/aboutus.png';
import NavBar from '../../Core/Layout/Navbar/NavBar';
import Footer from '../../Core/Layout/Footer/Footer';
import Image from 'material-ui-image';


const useStyles = makeStyles(theme => ({

  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
 
}));
  class aboutusview extends React.Component{
    render(){
      return ( 
    <React.Fragment>
      <NavBar/>
      <CssBaseline />
      <Container maxWidth="lg">
      <br/>
        <main>
       
          <Grid container spacing={5} >
         
            <Grid item xs={12} md={7}>
              <Typography variant="h6" gutterBottom align={"left"}>
              <h1>About Us</h1>
              <p>
              Hello and welcome to Shopiee, the place to find the best products for every taste and occasion. We thoroughly check the quality of our goods, working only with reliable suppliers so that you only receive the best quality product.

We at shopee believe in high quality and exceptional customer service. But most importantly, we believe shopping is a right, not a luxury, so we strive to deliver the best products at the most affordable prices, and ship them to you regardless of where you are located.
              </p>
              </Typography>
              <br/>
              <br/>
            </Grid>
  
            <Grid item xs={12} md={5} >
                <br/>
                <br/>   
                < Image  src ={banner} />
               
                <br/>
                <br/>
                <br/>
                <br/> 
            </Grid>
           
            </Grid>
        </main>
        
                
      </Container>
      <Footer/>
    </React.Fragment>
 )};
}
export default  withRouter( aboutusview);