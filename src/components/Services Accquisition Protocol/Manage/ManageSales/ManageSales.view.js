import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import banner from "../../../Images/managesales.jpg";
import banner1 from "../../../Images/managesales1.jpg";
import Image from 'material-ui-image'
import NavBar from '../../../Core/Layout/Navbar/NavBar';
import Footer from '../../../Core/Layout/Footer/Footer';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  paragraphStyle: {
    marginBottom: theme.spacing(8)
  },
  paperStyle: {
    marginBottom: theme.spacing(16)
  },
  imageStyle: {
    marginTop: theme.spacing(5.5)
  },
  [theme.breakpoints.down("xs")]: {
    responsiveDirection: {
      marginTop: theme.spacing(3),
      flexDirection: "column-reverse"
    }
  }
  
}));

const newStyles = {
  
  height: 280,
  padding: '0 30px',
};


const ManagesalesView = props =>{
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavBar/>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Grid item xs={12} md={7}>
              <Typography variant="h6" gutterBottom align={"left"}>
                <h1>Manage Sales</h1>
                <p className={classes.paragraphStyle}>
                  Develop a concrete definition of a lead and make sure all
                  employees understand it Distribute your leads quickly. ..
                  Install an effective customer relationship management (CRM)
                  tool. ... Track the source Nurture your leads Excite your
                  sales staff about each prospect
                </p>
              </Typography>
              <Divider />
            </Grid>

            <Grid item xs={12} md={5} className={classes.imageStyle} align="center">
              
            < Image  src ={banner} style={newStyles} />
              
            </Grid>
          </Grid>

          <Grid container spacing={5} className={classes.responsiveDirection}>
            <Grid item xs={12} md={5} className={classes.imageStyle} align="center">
              
                  < Image  src ={banner1} style= {newStyles} />
                
              
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography variant="h6" gutterBottom align={"left"}>
                <h1>Product Returns</h1>
                <p className={classes.paragraphStyle}>
                  Develop a concrete definition of a lead and make sure all
                  employees understand it Distribute your leads quickly. ..
                  Install an effective customer relationship management (CRM)
                  tool. ... Track the source Nurture your leads Excite your
                  sales staff about each prospect
                </p>
              </Typography>
              <Divider />
            </Grid>
          </Grid>

          <Typography variant="h6" gutterBottom align={"Center"}>
            <h1>Manage Your Business With Us</h1>
            <p className={classes.paragraphStyle}>
            <NavLink to="/Register"  style={{color:"black",textDecoration: 'none'}} >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ background: "#0781bd" }}
              >
                Start free trial
              </Button>
              </NavLink>
            </p>
          </Typography>
        </main>
      </Container>
      <Footer/>
    </React.Fragment>
  );
};

export default ManagesalesView;
