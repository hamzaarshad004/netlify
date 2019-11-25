import React, { useState } from "react";
import AdminSideBarView from "./AdminSideBar.view";
import Redirect from "react-router-dom/Redirect";

class ResponsiveDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.setNav = this.setNav.bind(this);
    this.handleItemSelect = this.handleItemSelect.bind(this);
  }

  state = { mobileOpen: false, selectItem: "" };

  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.mobileOpen });
  }

  handleItemSelect(text) {
    this.setState({ selectItem: text });
  }

  setNav() {
    if (this.state.selectItem === "Add Roles") {
      return <Redirect to="/CreateRoles" />;
    } else if (this.state.selectItem === "Roles") {
      return <Redirect to="/Roles" />;
    } else if (this.state.selectItem === "Manage") {
      return <Redirect to="/Manage" />;
    } else if (this.state.selectItem === "Add Users") {
      return <Redirect to="/AddUsers" />;
    } else if (this.state.selectItem === "Users") {
      return <Redirect to="/EditUsers" />;
    }
  }

  render() {
    return (
      <AdminSideBarView
        setNav={this.setNav}
        handleDrawerToggle={this.handleDrawerToggle}
        mobileOpen={this.state.mobileOpen}
        handleItemSelect={this.handleItemSelect}
      />
    );
  }
}

export default ResponsiveDrawer;
