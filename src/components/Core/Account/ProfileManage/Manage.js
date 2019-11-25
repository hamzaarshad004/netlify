import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import { NavLink } from "react-router-dom";
import EditIcon from "@material-ui/icons/EditOutlined";
import ManageView from "./Manage.view";
import { connect } from "react-redux";
import { fetchPosts } from "../../../../Server/ManageProfileActions";
import Proptypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Drawer from "../../Layout/AdminSideBar/AdminSideBar";

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  root: {
    display: "flex"
  },
  heroContent: {
    marginTop: theme.spacing(12),
    paddingRight: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      marginRight: theme.spacing(5)
    }
  },
  paper: {
    marginTop: theme.spacing(6)
  },
  tableRow: {
    "&:hover": {
      backgroundColor: "#F3F3F3"
    }
  },
  tableCell: {
    fontWeight: "bold"
  },
  typo: {
    paddingTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  }
});

class Manage extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: this.props.posts };
    this.createData = this.createData.bind(this);
  }
  componentWillReceiveProps(postProps) {
    this.setState({ posts: postProps.posts });
  }
  componentDidMount() {
    this.props.fetchPosts();
  }
  componentWillMount() {}

  createData(name, data, icon) {
    return { name, data, icon };
  }

  render() {
    this.rows = [
      this.createData(
        "Name",
        this.state.posts.firstName,
        <IconButton>
          <EditIcon />
        </IconButton>
      ),
      this.createData(
        "Store Name",
        this.state.posts.storeName,
        <IconButton>
          <EditIcon />
        </IconButton>
      ),
      this.createData(
        "Password",
        this.state.posts.confirmPassword,
        <NavLink
          to="/ForgetPassword/ConfirmFromEmail/CreateNewPassword"
          style={{ color: "black", textDecoration: "none" }}
        >
          <IconButton>
            <EditIcon />
          </IconButton>
        </NavLink>
      ),
      this.createData(
        "Email Address",
        this.state.posts.email,
        <TextField
          id="standard-bare"
          //className={classes.textField}
          defaultValue="Bare"
          margin="normal"
          inputProps={{ "aria-label": "bare" }}
        />
      )
    ];

    const { classes } = this.props;
    return (
      <div>
        <div className={classes.root}>
          <Drawer />
          <Container
            maxWidth="md"
            component="main"
            className={classes.heroContent}
          >
            <CssBaseline />
            <div className={classes.topHeading}>
              <Typography
                component="h1"
                variant="h4"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Profile Info
              </Typography>

              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                component="p"
              >
                Basic information about you.
              </Typography>
            </div>
            <Paper className={classes.paper}>
              <Typography
                variant="h5"
                align="left"
                color="textPrimary"
                component="p"
                className={classes.typo}
                fontWeight="fontweightregular"
              >
                Profile
              </Typography>
              <Table>
                <TableBody>
                  {this.rows.map(row => (
                    <TableRow key={row.name} className={classes.tableRow}>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.tableCell}
                        style={{ height: 70 }}
                        style={{ width: 300 }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        style={{ width: 500 }}
                      >
                        {row.data}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.icon}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Container>
        </div>
      </div>
    );
  }
}

Manage.propTypes = {
  fetchPosts: Proptypes.func.isRequired,
  posts: Proptypes.object
};

const mapSTateToProps = state => ({
  posts: state.posts.item
});

export default withStyles(styles)(
  connect(
    mapSTateToProps,
    { fetchPosts }
  )(Manage)
);
