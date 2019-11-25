import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import banner from "../../Images/banner3.png";
import abc from "../../Images/abc.jpg";
import Image from "material-ui-image";
import NavBar from "../../Core/Layout/Navbar/NavBar";
import Footer from "../../Core/Layout/Footer/Footer";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));
const newStyles = {
  height: 280,
  padding: "0 30px"
};

const social = ["GitHub", "Twitter", "Facebook"];

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavBar />
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Grid item xs={12} md={7}>
              <Typography variant="h6" gutterBottom align={"left"}>
                <h1>Market your business</h1>
                <h2>Advertise your product</h2>
                <p>
                  Develop a concrete definition of a lead and make sure all
                  employees understand it Distribute your leads quickly. ..
                  Install an effective customer relationship management (CRM)
                  tool. ...Track the source Nurture your leads Excite your sales
                  staff about each prospect
                </p>
              </Typography>
              <br />
              <br />
              <Divider />
            </Grid>
            {/* End main content */}
            {/* Sidebar */}

            <Grid item xs={12} md={5} align="center">
              <br />
              <br />
              <Image src={banner} style={newStyles} />

              <br />
              <br />
              <br />
              <br />
            </Grid>
            {/* End sidebar */}
          </Grid>

          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={5} align="center">
              <br />
              <br />

              <Image src={abc} style={newStyles} />

              <br />
              <br />
              <br />
              <br />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h6" gutterBottom align={"left"}>
                <h2>Product Returns</h2>
                <p>
                  Develop a concrete definition of a lead and make sure all
                  employees understand it Distribute your leads quickly. ..
                  Install an effective customer relationship management (CRM)
                  tool. ... Track the source Nurture your leads Excite your
                  sales staff about each prospect
                </p>
              </Typography>
              <br />
              <br />
              <Divider />
            </Grid>
            {/* End main content */}
            {/* Sidebar */}

            {/* End sidebar */}
          </Grid>

          <Typography variant="h6" gutterBottom align={"Center"}>
            <h1>Manage Your Business With Us</h1>
            <p>
              <NavLink
                to="/Register"
                style={{ color: "black", textDecoration: "none" }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  style={{ background: "#0781bd" }}
                >
                  Start free trial
                </Button>
              </NavLink>
            </p>
          </Typography>
        </main>
      </Container>
      {/* Footer */}

      {/* End footer */}
      <Footer />
    </React.Fragment>
  );
}
