import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import logo from "../../Images/logo.png";
import banner from "../../Images/managesales.jpg";
import Link from "@material-ui/core/Link";
import Footer from "../../Core/Layout/Footer/Footer";
import Bar from "../../Core/Layout/Navbar/NavBar";
import { NavLink } from "react-router-dom";
import Image from "material-ui-image";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  root: {
    display: "flex"
  },
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
  },
  headingSpacing: {
    marginTop: theme.spacing(-4)
  },
  paper: {
    marginTop: theme.spacing(5.5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

const newStyles = {
  height: 280,
  padding: "0 30px"
};

const HomeView = props => {
  const classes = useStyles();
  return (
    <div>
      <Bar />
      <div className={classes.root}>
        <Container maxWidth="lg">
          <CssBaseline />
          <Grid container spacing={5} className={classes.mainGrid}>
            <Grid item xs={12} md={7}>
              <Typography variant="h6" gutterBottom align={"left"}>
                <h1>Manage your inventory and Stocks.</h1>
                <h1 className={classes.headingSpacing}>One Solution.</h1>
                <p className={classes.paragraphStyle}>
                  <NavLink
                    to="/Register"
                    style={{ color: "black", textDecoration: "none" }}
                  >
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
            </Grid>

            <Grid item xs={12} md={5}>
              <img width="100%" height="auto" src={logo} />
            </Grid>
          </Grid>

          <Container maxWidth="md" className={classes.paragraphStyle}>
            <Grid container spacing={5} className={classes.imageStyle}>
              <Grid item xs={12} md={10}>
                <Image src={banner} style={newStyles} />
              </Grid>
            </Grid>
          </Container>

          <Grid container spacing={5} className={classes.mainGrid}>
            <Grid item xs={12} md={7}>
              <Typography
                variant="h6"
                gutterBottom
                align={"left"}
                className={classes.paragraphStyle}
              >
                <h1>Manage Sales</h1>
                <p>
                  Develop a concrete definition of a lead and make sure all
                  employees understand it Distribute your leads quickly. ..
                  Install an effective customer relationship management (CRM)
                  tool. ... Track the source Nurture your leads Excite your
                  sales staff about each prospect.
                </p>
                <NavLink to="/managesales" variant="body1">
                  Explore this feature.
                </Link>
              </Typography>
              <Divider />
            </Grid>

            <Grid item xs={12} md={5} className={classes.imageStyle}>
              <Paper className={classes.paperStyle}>
                <Image src={banner} style={newStyles} />
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={5} className={classes.responsiveDirection}>
            <Grid item xs={12} md={5} className={classes.imageStyle}>
              <Paper className={classes.paperStyle}>
                <Image src={banner} style={newStyles} />
              </Paper>
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography
                variant="h6"
                gutterBottom
                align={"left"}
                className={classes.paragraphStyle}
              >
                <h1>Manage inventory</h1>
                <p>
                  Develop a concrete definition of a lead and make sure all
                  employees understand it Distribute your leads quickly. ..
                  Install an effective customer relationship management (CRM)
                  tool. ... Track the source Nurture your leads Excite your
                  sales staff about each prospect
                </p>
                <NavLink to="/manageInventory" variant="body1">
                  Explore this feature.
                </Link>
              </Typography>
              <Divider />
            </Grid>
          </Grid>

          <Divider />
          <Container maxWidth="md" className={classes.paragraphStyle}>
            <Grid container spacing={5} className={classes.paper}>
              <Grid item xs={12} md={8}>
                <Typography variant="h6" gutterBottom align={"middle"}>
                  <h1>You Manage your business.</h1>
                  <h1 className={classes.headingSpacing}>
                    We Manage your Data.
                  </h1>
                  <h1 className={classes.headingSpacing}>
                    Available everywhere, on any device.
                  </h1>
                </Typography>
              </Grid>
            </Grid>
          </Container>
          <Divider />

          <Grid container spacing={5} className={classes.mainGrid}>
            <Grid item xs={12} md={7}>
              <Typography
                variant="h6"
                gutterBottom
                align={"left"}
                className={classes.paragraphStyle}
              >
                <h1>Increased Sales</h1>
                <p>
                  Develop a concrete definition of a lead and make sure all
                  employees understand it Distribute your leads quickly. ..
                  Install an effective customer relationship management (CRM)
                  tool. ... Track the source Nurture your leads Excite your
                  sales staff about each prospect
                </p>
                <NavLink to="/Increased_sale" variant="body1">
                  Explore this feature.
                </Link>
              </Typography>
              <Divider />
            </Grid>

            <Grid item xs={12} md={5} className={classes.imageStyle}>
              <Paper className={classes.paperStyle}>
                <Image src={banner} style={newStyles} />
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={5} className={classes.responsiveDirection}>
            <Grid item xs={12} md={5} className={classes.imageStyle}>
              <Paper className={classes.paperStyle}>
                <Image src={banner} style={newStyles} />
              </Paper>
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography
                variant="h6"
                gutterBottom
                align={"left"}
                className={classes.paragraphStyle}
              >
                <h1>Featured Products</h1>
                <p>
                  Develop a concrete definition of a lead and make sure all
                  employees understand it Distribute your leads quickly. ..
                  Install an effective customer relationship management (CRM)
                  tool. ... Track the source Nurture your leads Excite your
                  sales staff about each prospect
                </p>
                <NavLink to="/featured_product" variant="body1">
                  Explore this feature.
                </Link>
              </Typography>
              <Divider />
            </Grid>
          </Grid>

          <Typography variant="h6" gutterBottom align={"Center"}>
            <h1>Manage Your Business With Us</h1>
            <p className={classes.paragraphStyle}>
              <NavLink
                to="/Register"
                style={{ color: "black", textDecoration: "none" }}
              >
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
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default HomeView;
