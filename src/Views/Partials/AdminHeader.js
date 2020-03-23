import React from "react";
import 'antd/dist/antd.css';


class AdminHeader extends React.Component{

    
       getDate() {
        var today = new Date();
        document.getElementById("date").innerHTML = today.toGMTString();
      }

      
    
      
      
    render()
    {
        return(
            <div>


  <head>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
      integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
      crossorigin="anonymous" />
      <script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="/home/avidbeam/webdevbootcamp/ProductRegisteration/fontawesome-free-5.10.2-web/css/all.css"
      rel="stylesheet"
    />
    <script
      src="https://code.jquery.com/jquery-3.4.1.js"
      integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>
   
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta charset="utf-8" />
    
    

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>AvidBeam Technologies</title>
  </head>
  <body>
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container-fluid" style={{width: "100%"}}>
        <div className="navbar-header" style={{width: "65%"}}>
          <img
            src="/icons/AvidBeam-logo-white.png"
            style={{width: "130px" , margin:"10px" , paddingBottom:"10px"}}
            alt="AvidBeam"
          />
          
          <b><a className="navbar-brand" href="/admin">Dashboard</a></b>
          <b><a className="navbar-brand" href="/products">Products</a></b>
          <b><a className="navbar-brand" href="/plugins">Plugins</a></b>
          <b><a className="navbar-brand" href="/users">Users</a></b>
          <b><a className="navbar-brand" href="/orders">Orders</a></b>
          <b><a className="navbar-brand" href="/hardwareCalculator">Hardware</a></b>
          
          {/* <b><a className="navbar-brand" href="/clientDASHboard">Dashboard</a></b>
          <b><a className="navbar-brand" href="/products">Products</a></b>
          
          <b><a className="navbar-brand" href="/staffDASHboard">Dashboard</a></b>
          <b><a className="navbar-brand" href="/products">Products</a></b>
          <b><a className="navbar-brand" href="/plugins">Plugins</a></b> */}
          
        </div>

        <div className="navbar-collapse collapse">
          <ul className="navbar-nav ml-auto">
            
            <li><a className="nav-link" href="/login">Login</a></li>
            <li><a className="nav-link" href="/register">Register</a></li>
            
            <li>
              <a
                style={{color: "aliceblue"}}
                className="nav-link"
                href="#"
                id="date"
              ></a>
            </li>
            <li>
              <a style={{color: "aliceblue"}} className="nav-link" href="#"
                >
              </a>
            </li>
            <li>
              <a style={{color: "aliceblue"}} className="nav-link" href="/logout"
                >LogOut</a
              >
            </li>
            
          </ul>
        </div>
      </div>
    </nav>

    <div className="container">
     
      {/* <div className="alert alert-danger" role="alert">
        
      </div>
      
      <div className="alert alert-success" role="alert">
        
      </div> */}
   
    </div>

    
  </body>


            </div>
            
        )
    }
}


export default AdminHeader