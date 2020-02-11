import React from "react"
import AdminHeader from "./AdminHeader"

class EditUser extends React.Component{

    
    
    /*
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
        //y += ValidateUserName() 
        y += ValidatePassword()
        y += ValidatePasswordConfirm()
        y += ValidateEmail()  
        y += ValidatePhoneNumber() 
        y += ValidateAddress()
        y += ValidateAddress2()  
      //  y += ValidateCountry() 
        y += ValidateCity()  
        y += ValidateZipcode()
    
  
    if(y == 10)
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
  
  /*
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
  /*
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
              <p /><h1> Edit details </h1><p />
              <form action="/clients/<%=foundUser._id %>?_method=PUT" method="POST" onsubmit="return ValidateForm()" noValidate>
                <input type="hidden" className="form-control" id="Username" name="username" defaultValue="<%=foundUser.username%>" />
                <span />
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="firstName"><b>First name:</b></label>
                    <input type="text" className="form-control" id="First name" name="firstName" defaultValue="<%=foundUser.firstName%>" />
                    <span />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="lastName"><b>Last name:</b></label>
                    <input type="text" className="form-control" id="Last name" name="lastName" defaultValue="<%=foundUser.lastName%>" />
                    <span />
                  </div>
                </div>
                <div className="form-row">
                  {/* <div class="form-group col-md-4">
            <label for="username">User name</label>
            <input type="text" class="form-control" id="login"  name="username" value="<%=foundUser.username%>">
          </div> */}
                  <div className="form-group col-md-4">
                    <label htmlFor="inputEmail"><b>Email:</b></label>
                    <input type="email" className="form-control" id="E-mail" name="email" defaultValue="<%=foundUser.email%>" />
                    <span />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputPassword1"><b>Password:</b></label>
                    <input type="password" className="form-control" id="Password" name="password" defaultValue="password" />
                    <span />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputPassword2"><b>Password Confirm:</b></label>
                    <input type="password" className="form-control" id="Password Confirm" name="password2" defaultValue="password" />
                    <span />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label htmlFor="phoneNumber"><b>Phone Number:</b></label>
                    <input type="text" className="form-control" id="Phone number" name="phoneNumber" defaultValue="<%=foundUser.phoneNumber%>" />
                    <span />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputZip"><b>Zip:</b></label>
                    <input type="text" className="form-control" id="Zipcode" name="zipCode" defaultValue="<%=foundUser.zipCode%>" />
                    <span />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="inputCity"><b>City:</b></label>
                    <input type="text" className="form-control" id="City" name="city" defaultValue="<%=foundUser.city%>" />
                    <span />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputAddress"><b>Address:</b></label>
                    <input type="text" className="form-control" id="Address" name="addressLine1" defaultValue="<%=foundUser.addressLine1%>" />
                    <span />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputAddress2"><b>Address 2:</b></label>
                    <input type="text" className="form-control" id="Address2" name="addressLine2" defaultValue="<%=foundUser.addressLine2%>" />
                    <span />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="inputState"><b>Country:</b></label>
                    <input type="text" className="form-control" id="Country" name="state" defaultValue="<%=foundUser.state%>" />
                    <span />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-8">
                      {/* <label for="internalUseLabel"><br>This section is for internal Use  only <br></label> */}
                    </div>
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="userRolesLabel"><b>User role:</b></label>
                    <select id="userRoleId" className="form-control" name="userRole" value="<%=foundUser.role%>">
                      <option value="admin">admin</option>
                      <option value="staff">staff</option>
                      <option value="client">client</option>
                    </select>
                  </div>
                  <div className="col-md-12" style={{marginTop: '20px'}}>
                    <button type="submit" id="SubButton" className="btn btn-primary">Update</button>
                  </div>
                </div></form>
            </div>
          </div>
        )
    }
}


export default EditUser