import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom'



const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
     
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    
    },
  },
  
  
  
  link: {
    margin: theme.spacing(1, 1.5),
    color:"#FFFFFF",
    marginLeft:'auto',

  },
  
  
  
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    position:'absolute',
    
    marginTop: theme.spacing(8),
    
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    color:"#FFFFFF",
    flexDirection: 'column',
    background:'#224e6a',
    display: 'flex',
    marginBottom: theme.spacing(0),




    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      // backgroundColor:"#224e6a",
      //  color:"#FFFFFF",
      //  primary:
      //  "#FFFFFF",
    
    },
    
  },
}));


const footers = [
  // {
  //   title: 'Company',
  //    description: [ 'About us', 'Contact us'],
     
  // },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];
const footers1 = [
  {
    title: 'Company',
     description: [ 'About us'],
     description2:[ 'Contact us'],
  },
  
];


const FooterView = props=> {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
     
      {/* Hero unit */}
      
      {/* End hero unit */}
      
      {/* Footer */}
      <Container maxWidth="false" component="footer" className={classes.footer} style={{marginBottom:0 }}>
        <Grid container spacing={4} justify="space-evenly">


        {footers1.map(footer => (
            <Grid item xs={6} sm={3} >
              <Typography variant="h6" color="#FFFFFF" href="#" gutterBottom>
                {footer.title}
              </Typography>
              <ul >
                {footer.description.map(item => (
                  <li key={item} >
                    <NavLink to="/Aboutus"  style={{color:"black",textDecoration: 'none'}} >
                    <Link variant="subtitle1"  color="#FFFFFF" href="#" className={classes.link}>
                    {item}
            </Link>
            </NavLink>
            
                  </li>
                ))}
                {footer.description2.map(item => (
                  <li key={item} >
                  <NavLink to="/Contactus"  style={{color:"black",textDecoration: 'none'}} >
                    <Link variant="subtitle1"  color="#FFFFFF"  className={classes.link}>
                    {item}
            </Link>
            </NavLink>
            
                  </li>
                ))}
              </ul>
            </Grid>
          ))}






          {footers.map(footer => (
            <Grid item xs={6} sm={3} >
              <Typography variant="h6" color="#FFFFFF" href="#" gutterBottom>
                {footer.title}
              </Typography>
              <ul >

              

                

                {footer.description.map(item => (
                  <li key={item} >
                    

                    <Link variant="subtitle1"  color="#FFFFFF" href="#" className={classes.link}>
                    {item}
            </Link>
            
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
       
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
};

export default FooterView;