import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cntctus from "../components/Services Accquisition Protocol/ContactUs/Contactus.js";
import Abtus from "../components/Services Accquisition Protocol/AboutUs/Aboutus.js";
import ConfirmationCode from "../components/Core/Account/ForgetPassword/ConfirmationCode/ConfirmationCode";
import ForgetPassword from "../components/Core/Account/ForgetPassword/ForgetPassword.js";
import ConfirmNPass from "../components/Core/Account/ForgetPassword/CreateNewPassword/CreateNewPassword";
import managesales from "../components/Services Accquisition Protocol/Manage/ManageSales/ManageSales";
import manageinvent from "../components/Services Accquisition Protocol/Manage/ManageInventory/ManageInventory";
import FeaturedProducts from "../components/Services Accquisition Protocol/Market/FeaturedProducts";
import increased_sales from "../components/Services Accquisition Protocol/Market/IncreasedSales";
import Home from "../components/Services Accquisition Protocol/Home/Home.js";
class routes extends React.Component {
  render() {
    return (
      <div className="App">
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <Switch>
            <Route
              exact
              path="/featured_product"
              component={FeaturedProducts}
            />
            <Route exact path="/Increased_sale" component={increased_sales} />
            <Route exact path="/" component={Home} />
            <Route exact path="/ForgetPassword" component={ForgetPassword} />
            <Route exact path="/managesales" component={managesales} />
            <Route exact path="/manageInventory" component={manageinvent} />
            <Route
              exact
              path="/ForgetPassword/ConfirmFromEmail"
              component={ConfirmationCode}
            />
            <Route
              exact
              path="/ForgetPassword/ConfirmFromEmail/CreateNewPassword"
              component={ConfirmNPass}
            />
            <Route exact path="/Contactus" component={Cntctus} />

            <Route exact path="/Aboutus" component={Abtus} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default routes;
