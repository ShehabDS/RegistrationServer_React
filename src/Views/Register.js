import React from "react"
import AdminHeader from "./Partials/AdminHeader"

class Register extends React.Component{

    
  
  /* 
  
            
                  let CountryID = document.getElementById("Country")
                  let CountryXhr = new XMLHttpRequest()
  
                  CountryXhr.open("GET","https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-abbreviation.json",true)
                  CountryXhr.onreadystatechange = function()
                  {
                    if(this.readyState == 4 && this.status == 200)
                    {
                      let CountryResponse = JSON.parse(this.responseText)
                      for(let j = 0; j < CountryResponse.length;j++)
                      {
                          let CountryOption = document.createElement("option")
                          CountryOption.innerHTML = CountryResponse[j].country
                          CountryID.appendChild(CountryOption)
                      }
                    }
                  }
                  
                  CountryXhr.send()
  
  
  
  
  
  //initializing variables to get all the form inputs
      let firstname = document.getElementById("First name")
      let lastname = document.getElementById("Last name")
      let username = document.getElementById("Username")
      let password = document.getElementById("Password")
      let passwordConfirm = document.getElementById("Password Confirm")
      let email = document.getElementById("E-mail")
      let phoneNumber = document.getElementById("Phone number")
      let address = document.getElementById("Address")
      let address2 = document.getElementById("Address2")
      let country = document.getElementById("Country")
      let city = document.getElementById("City")
      let zipCode = document.getElementById("Zipcode")
      let registerButton = document.getElementById("SubButton")
      let LoadingBarSpan = document.getElementById("Loading-Bar")
      const red = "#E50000"
      const blue = "#007bff"
      
  
   
  
  //Validation Main function which will attach to the form itself
  function ValidateForm()
  {
    let y =  ValidateFirstName() 
        y += ValidateLastName() 
        y += ValidateUserName() 
        y += ValidatePassword()
        y += ValidatePasswordConfirm()
        y += ValidateEmail()  
        y += ValidatePhoneNumber() 
        y += ValidateAddress()
        y += ValidateAddress2()  
        y += ValidateCountry() 
        y += ValidateCity()  
        y += ValidateZipcode()
    
  
    if(y == 12)
    {
      let LoadingArea = document.createElement("span")
        LoadingArea.className = "spinner-border spinner-border-sm"
        registerButton.appendChild(LoadingArea)
        return true
    }
  
    else
    {   
      let LoadingArea = document.createElement("span")
        LoadingArea.className = "spinner-border spinner-border-sm"
        registerButton.appendChild(LoadingArea)
  
        setTimeout(function(){
          registerButton.removeChild(LoadingArea)
        }, 200);
        return false
    }
  
  }
  
  
  //Validators
   function ValidateFirstName()
   {
      if(CheckEmpty(firstname)) return false 
      if(CheckOnlyLetters(firstname)) return false
      return true
   }
  
   function ValidateLastName()
   {
      if(CheckEmpty(lastname)) return false
      if(CheckOnlyLetters(lastname)) return false
      return true
   }
  
  
   function ValidateUserName()
   {
      if(CheckEmpty(username)) return false
      if(CheckOnlyLettersAndNumbers(username)) return false
      return true
   }
  
  
   function ValidatePassword()
   {
      if(CheckEmpty(password)) return false
      if(MeetLength(password,4,100)) return false
      return true
   }
  
   function ValidatePasswordConfirm()
   {
      if(CheckEmpty(passwordConfirm)) return false
      if(MeetLength(passwordConfirm,4,100)) return false
      if(CheckMatching(password,passwordConfirm))return false
      return true
   }
  
  function ValidateEmail()
  {
    if(CheckEmpty(email))return false
    if(CheckMailValidation(email))return false
    return true
  }
  
  function ValidatePhoneNumber()
  {
    if(CheckEmpty(phoneNumber))return false
    if(IsPhoneValid(phoneNumber))return false
    return true 
  }
  
  function ValidateAddress()
  {
    if(CheckEmpty(address))return false
    return true
  }
  
  function ValidateAddress2()
  {
    if(CheckEmpty(address2))return false
    return true
  }
  
  function ValidateZipcode()
  {
    if(CheckEmpty(zipCode))return false
    if(ZipcodeLength(zipCode , 12)) return false
    if(CheckOnlyLettersAndNumbers(zipCode)) return false
    return true
  }
  
  function ValidateCountry()
  {
    if(Isdefault(country)) return false
    return true
  }
  
  function ValidateCity()
  {
    if(CheckEmpty(city)) return false
    return true
  }
  
  //Valid or Not Cases
  function SetInvalid(field,message)
  {
      field.nextElementSibling.textContent = message
      field.nextElementSibling.style.color = red
      field.style.borderColor = red    
  }
  
  function SetValid(field)
  {
      field.nextElementSibling.textContent = ""
      field.style.borderColor = blue 
  }
  
  
  //Validators Utilities
  function CheckEmpty(field)
  {
    if(field.value.trim() === "")
    {
      SetInvalid(field,`${field.id} musn't be empty!`)
      return true
    }
    else
    {
      SetValid(field)
      return false
    } 
  }
  
  function IsPhoneValid(field)
  {
      if(/^[\+]?[(]?[0-9]{1}[)]?[-\s\.]?[0-9]{1}[-\s\.]?[0-9]{2,20}$/.test(field.value))
      {
          SetValid(field)
          return false
      }
      else 
      {
        SetInvalid(field,`Invalid ${field.id} `)
        return true
      }
  }
  
  function CheckOnlyLetters(field)
  {
    if(/^[a-zA-Z ]+$/.test(field.value))
    {
      SetValid(field)
      return false
    }
    else
    {
      SetInvalid(field,`${field.id} must contain only letters`)
      return true
    }
  }
  
  function CheckOnlyLettersAndNumbers(field)
  {
    if(/^[a-zA-Z0-9]*$/.test(field.value))
    {
      SetValid(field)
      return false
    }
    else
    {
      SetInvalid(field,`${field.id} must contain only letters and numbers`)
      return true
    }
  }
  
  function MeetLength(field , minlength , maxlength)
  {
      if(field.value.length >= minlength && field.value.length < maxlength)
      {
          SetValid(field)
          return false
      }
      else if(field.value.length < minlength)
      { 
        SetInvalid(field,`${field.id} must be ${minlength} or more letters`)
        return true
      }
      
  
      else if(field.value.length >= maxlength)
      { 
        SetInvalid(field,`${field.id} must be less than ${maxlength} letters`)
        return true
      }
  }
  
  function CheckMatching(field1,field2)
  {
    if(field1.value === field2.value)
    {
      SetValid(field2)
      return false
    }
    else
    {
      SetInvalid(field2 , `${field2.id} doesn't match ${field1.id}`)
      return true
    }
  }
  
  function CheckMailValidation(field)
  {
    if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(field.value))
    { 
      SetValid(field)
      return false
    }
  
    else
    {
      SetInvalid(field,`Invalid ${field.id} entered!`)
      return true
    }
  }
   
  function ZipcodeLength(field , length)
  {
      if(field.value.length > length)
      {
        SetInvalid(field, `${field.id} must be ${length} letters or less`)
        return true
      }
  
      else 
      {
        SetValid(field) 
        return false
      }
  }
  
  function Isdefault(field)
  { 
    
      if(field.value == "default")
      {
        SetInvalid(field,`${field.id} must be selected`) 
        return true
      }
      else
      {
        SetValid(field)
        return false
      }
  }
   */
    
    render(){
        return(
            <div>
            <AdminHeader />
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