import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AddBandwidth from "../../Super Admin Panel/Bandwidth/AddBandwith/AddBandwidth";
import Storage from "../../Super Admin Panel/Storage/AddStorage/AddStorage";
import UserRolesDropDown from "../../Super Admin Panel/Generate Plans/GeneratePlan";
import ListSubheader from "@material-ui/core/ListSubheader";
import Collapse from "@material-ui/core/Collapse";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { Link } from "react-router-dom";
import Duration from "../../Super Admin Panel/Duration/AddDuration/AddDuration";
import StaffAccounts from "../../Super Admin Panel/Staff Accounts/AddStaffAccounts/AddStaffAcounts";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      backgroundColor: "#224e6a"
    },
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#224e6a"
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
const newStyles = {
  marginLeft: "auto"
};

export default function ResponsiveDrawer(props) {
  const { container, getscreen } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  function handleClick1() {
    setOpen1(!open1);
  }
  function handleClick2() {
    setOpen2(!open2);
  }
  function handleClick3() {
    setOpen3(!open3);
  }
  function handleClick4() {
    setOpen4(!open4);
  }
  function handleClick() {
    setOpen(!open);
  }
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectItem, setItem] = useState("");

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const showMe = text => {
    if (selectItem === "Bandwidth") {
      return (
        <div>
          <AddBandwidth />
        </div>
      );
    } else if (selectItem === "Storage") {
      return (
        <div>
          <Storage />
        </div>
      );
    } else if (selectItem === "Staff Accounts") {
      return (
        <div>
          <StaffAccounts />
        </div>
      );
    } else if (selectItem === "Duration") {
      return (
        <div>
          <Duration />
        </div>
      );
    } else if (selectItem === "Generate Plan") {
      return (
        <div>
          <UserRolesDropDown />
        </div>
      );
    }
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button onClick={handleClick1}>
          <ListItemText primary="Bandwidth" />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to="/edit_bandwidth"
            >
              <ListItemIcon />
              <ListItemText primary="Edit" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to="/Bandwidth"
            >
              <ListItemIcon />
              <ListItemText primary="Add" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Storage" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to="/edit_storage"
            >
              <ListItemIcon />
              <ListItemText primary="Edit" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              component={Link}
              to="/Storage"
            >
              <ListItemIcon />
              <ListItemText primary="Add" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleClick2}>
          <ListItemText primary="Duration" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open2} timeout="auto" unmountOnExit>
          <ListItem
            button
            className={classes.nested}
            component={Link}
            to="/edit_duration"
          >
            <ListItemIcon />
            <ListItemText primary="Edit" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            component={Link}
            to="/ADD_duration"
          >
            <ListItemIcon />
            <ListItemText primary="Add" />
          </ListItem>
        </Collapse>
        <ListItem button onClick={handleClick3}>
          <ListItemText primary="Staff Acounts" />
          {open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open3} timeout="auto" unmountOnExit>
          <ListItem
            button
            className={classes.nested}
            component={Link}
            to="/edit_staffAccounts"
          >
            <ListItemIcon />
            <ListItemText primary="Edit" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            component={Link}
            to="/StaffAccounts"
          >
            <ListItemIcon />
            <ListItemText primary="Add" />
          </ListItem>
        </Collapse>
        <ListItem button onClick={handleClick4}>
          <ListItemText primary="Generate Plan" />
          {open4 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open4} timeout="auto" unmountOnExit>
          <ListItem
            button
            className={classes.nested}
            component={Link}
            to="/edit_plan"
          >
            <ListItemIcon />
            <ListItemText primary="Edit" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            component={Link}
            to="/plan"
          >
            <ListItemIcon />
            <ListItemText primary="Create" />
          </ListItem>
        </Collapse>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={newStyles}>
            SuperAdminPanel
          </Typography>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="Mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {showMe()}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object
};
