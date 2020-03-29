import React from "react";
import RegisterHeader from "./Partials/RegisterHeader";

class Register extends React.Component{

    
  
 
    
    render(){
        return(
            <div>
            <RegisterHeader />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/home/avidbeam/webdevbootcamp/ProductRegisteration/fontawesome-free-5.10.2-web/css/all.css" />
            <title>AvidBeam Technologies</title>
            <div className="container-fluid">
              <form action="/register" method="POST" style={{margin: '25px 0px 0px 0px'}} onsubmit="return ValidateForm()" noValidate>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <b><label htmlFor="firstName" style={{color: '#007bff'}}>First name:</label></b>
                    <input type="text" className="form-control" id="First name" name="firstName" placeholder="first name" onfocusout="ValidateFirstName()" />
                    <span className="helper-text" />
                  </div>
                  <div className="form-group col-md-4">
                    <b><label htmlFor="Last name" style={{color: '#007bff'}}>Last name:</label></b>
                    <input type="text" className="form-control" id="Last name" name="lastName" placeholder="last name" onfocusout="ValidateLastName()" />
                    <span className="helper-text" />
                  </div>
                  <div className="form-group col-md-4">
                    <b><label htmlFor="Username" style={{color: '#007bff'}}>Username:</label></b>
                    <input type="text" className="form-control" id="Username" name="username" placeholder="login" onfocusout="ValidateUserName()" />
                    <span className="helper-text" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <b><label htmlFor="E-mail" style={{color: '#007bff'}}>Email:</label></b>
                    <input type="email" className="form-control" id="E-mail" name="email" placeholder="Email" onfocusout="ValidateEmail()" />
                    <span className="helper-text" />
                  </div>
                  <div className="form-group col-md-4">
                    <b><label htmlFor="Password" style={{color: '#007bff'}}>Password:</label></b>
                    <input type="password" className="form-control" id="Password" name="password" placeholder="password" onfocusout="ValidatePassword()" />
                    <span className="helper-text" />
                  </div> 
                  <div className="form-group col-md-4">
                    <b><label htmlFor="Password Confirm" style={{color: '#007bff'}}>Password Confirm:</label></b>
                    <input type="password" className="form-control" id="Password Confirm" name="password2" placeholder="password" onfocusout="ValidatePasswordConfirm()" />
                    <span className="helper-text" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <b><label htmlFor="Phone number" style={{color: '#007bff'}}>Phone number:</label></b>
                    <input type="text" className="form-control" id="Phone number" name="phoneNumber" placeholder="Enter your number" maxLength={25} onfocusout="ValidatePhoneNumber()" />
                    <span className="helper-text" />
                  </div>
                  <div className="form-group col-md-4">
                    <b><label htmlFor="Zipcode" style={{color: '#007bff'}}>Zipcode:</label></b>
                    <input type="text" className="form-control" id="Zipcode" name="zipCode" placeholder="Zipcode" onfocusout="ValidateZipcode()" />
                    <span className="helper-text" />
                  </div>
                  <div className="form-group col-md-4">
                    <b><label htmlFor="City" style={{color: '#007bff'}}>City:</label></b>
                    <input type="text" className="form-control" placeholder="Select your city" id="City" maxLength={25} onfocusout="ValidateCity()" />  
                    <span className="helper-text" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <b><label htmlFor="Address" style={{color: '#007bff'}}>Address:</label></b>
                    <input type="text" className="form-control" id="Address" name="addressLine1" placeholder="1234 Main St" onfocusout="ValidateAddress()" />
                    <span className="helper-text" />
                  </div>
                  <div className="form-group col-md-6">
                    <b><label htmlFor="Address2" style={{color: '#007bff'}}>Address2:</label></b>
                    <input type="text" className="form-control" id="Address2" name="addressLine2" placeholder="Apartment, studio, or floor" onfocusout="ValidateAddress2()" />
                    <span className="helper-text" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <b><label htmlFor="Country" style={{color: '#007bff'}}>Country:</label></b>
                    <select className="form-control" id="Country" onfocusout="ValidateCountry()">
                      <option value="default" selected>Select Your Country</option>
                    </select>
                    <span className="helper-text" />
                  </div>
                  <div className="btn-group col" style={{marginTop: '10px'}}>
                    <div className="col-md-6">
                      <a className="btn btn-primary" href="/" role="button"><i className="fas fa-arrow-alt-circle-left" style={{marginRight: '5px'}} />back to Login page</a>
                    </div>
                    <div className=" col-md-6">
                      <button type="submit" style={{float: 'right'}} id="SubButton" className="btn btn-primary">Register</button>
                      <span id="Loading-Bar" style={{marginLeft: '10px', marginTop: '0px'}} />
                      <button type="reset" className="btn btn-primary">Reset</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )
    }
}


export default Register