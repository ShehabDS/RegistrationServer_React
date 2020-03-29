import React from "react"
import {Link} from "react-router-dom";

class Login extends React.Component{
    render(){
        return(
            <div>
            <title>AvidBeam Client Registration and Product Order</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/home/avidbeam/webdevbootcamp/ProductRegisteration/fontawesome-free-5.10.2-web/css/all.css" />
            <link rel="stylesheet" href="/stylesheets/landing.css" />
            <p> </p><h1> </h1><p />
           
            <div id="landing-header">
              <div className="container">    
                <form action="/login" method="POST">
                  <div className="form-group row">
                    <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                    <div className="col-sm-3">
                      <input type="text" className="form-control" id="login" name="username" placeholder="login username" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-3">
                      <input type="password" className="form-control" id="password" name="password" placeholder="password" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="select" className="col-sm-1 col-form-label" />
                    <div className="col-sm-4">
                     <Link to="/Admin"> <button type="submit" style={{margin:"5px"}} className="btn btn-primary ">Log in</button></Link>
                     <Link to="/Register"><a className="btn btn-primary" href="/register" role="button">Register</a></Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
           
          </div>
        )
    }
}


export default Login