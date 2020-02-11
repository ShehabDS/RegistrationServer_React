import React from 'react';
import './App.css';
import NewPlugin from './NewPlugin.js';
import NewOrder from './NewOrder';
import NewProduct from './NewProduct';
import NewAvidHawkOrder from './NewAvidHawkOrder';
import Register from "./Register";
import Admin from './Admin';
import ClientDashboard from './ClientDashboard';
import RegisterHeader from './RegisterHeader';
import ClientHeader from './ClientHeader.js';
import Plugins from "./Plugins";
import Orders from "./Orders";
import Products from "./Products";
import Users from "./Users";
import ShowOrder from "./ShowOrder";
import ShowPlugin from "./ShowPlugin";
import ShowProduct from "./ShowProduct";
import ShowUser from "./ShowUser";
import OrderReview from "./OrderReview";
import Login from "./Login";
import EditPlugin from "./EditPlugin";
import EditProduct from "./EditProduct";
import EditUser from './EditUser';
import '../node_modules/font-awesome/css/font-awesome.min.css';





class App extends React.Component {
  render(){
    return (
      <div>
      {/*
          <NewPlugin />,
          <ClientHeader />,
          <RegisterHeader />, 
          <Admin />
          <ClientDashboard />
          <NewOrder />
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
      <NewAvidHawkOrder />
      </div>
      
    );
  }
}

export default App;
