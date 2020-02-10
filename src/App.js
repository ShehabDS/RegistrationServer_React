import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewPlugin from './NewPlugin.js';
import ClientHeader from './ClientHeader.js';
import RegisterHeader from './RegisterHeader';
import Admin from './Admin';
import ClientDashboard from './ClientDashboard';
import NewOrder from './NewOrder';
import NewProduct from './NewProduct'
import '../node_modules/font-awesome/css/font-awesome.min.css'




class App extends React.Component {
  render(){
    return (
      <div>
      {/* <NewPlugin />,
      <ClientHeader />,
      <RegisterHeader />, 
      <Admin />
      <ClientDashboard />
      
        <NewProduct />
      */}
      <NewOrder />
      
      </div>
      
    );
  }
}

export default App;
