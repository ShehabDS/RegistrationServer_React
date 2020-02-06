import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewPlugin from './NewPlugin.js';
import ClientHeader from './ClientHeader.js';
import RegisterHeader from './RegisterHeader';
import Admin from './Admin';
import ClientDashboard from './ClientDashboard'



class App extends React.Component {
  render(){
    return (
      <div>
      {/* <NewPlugin />,
      <ClientHeader />,
      <RegisterHeader />, 
      <Admin />
      */}
      <ClientDashboard />
      </div>
      
    );
  }
}

export default App;
