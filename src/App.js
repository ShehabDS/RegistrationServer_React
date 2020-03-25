import React from 'react';
import {BrowserRouter as Router , Route , Link,Switch} from "react-router-dom"
import './App.css';
import NewPlugin from './Views/NewPlugin.js';
import NewOrder from './Views/NewOrder';
import NewProduct from './Views/NewProduct';
import NewAvidHawkOrder from './Views/NewAvidHawkOrder';
import Register from "./Views/Register";
import Admin from './Views/Admin';
import ClientDashboard from './Views/ClientDashboard';
import RegisterHeader from './Views/Partials/RegisterHeader';
import ClientHeader from './Views/Partials/ClientHeader.js';
import Plugins from "./Views/Plugins";
import Orders from "./Views/Orders";
import Products from "./Views/Products";
import Users from "./Views/Users";
import ShowOrder from "./Views/ShowOrder";
import ShowPlugin from "./Views/ShowPlugin";
import ShowProduct from "./Views/ShowProduct";
import ShowUser from "./Views/ShowUser";
import OrderReview from "./Views/OrderReview";
import Login from "./Views/Login";
import EditPlugin from "./Views/EditPlugin";
import EditProduct from "./Views/EditProduct";
import EditUser from './Views/EditUser';
import '../node_modules/font-awesome/css/font-awesome.min.css';





class App extends React.Component {
  render(){
    return (
      <div>
        <Router>
      {/*
          
          <ClientHeader />
          <RegisterHeader /> 
          <Admin />
          <ClientDashboard />
          <NewOrder />
          <NewPlugin />
          <NewAvidHawkOrder />
          <NewProduct />
          <Plugins />
          <Orders />
          <Products />
          <Users />
          <Register />
          <ShowOrder />
          <ShowPlugin />
          <ShowProduct />
          <ShowUser />
          <OrderReview />
          <Login />
          <EditPlugin />
          <EditProduct />
          <EditUser />
      */}
      
  
<Switch>

<Route path="/" exact component={Login} />
<Route path="/NewPlugin" component={NewPlugin} />
<Route path="/Admin" component={Admin} />
<Route path="/Products" component={Products} />
<Route path="/Plugins" component={Plugins} />
<Route path="/Orders" component={Orders} />
<Route path="/Users" component={Users} />




   

  </Switch>    

      </Router>
      </div>
      
    );
  }
}

export default App;
