import React from "react"
import AdminHeader from "./Partials/AdminHeader"

class OrderReview extends React.Component{



// function ShowHideDiv() {
//     var ATUNYes = document.getElementById("ATUNYes");
//     var onLinelicenseform = document.getElementById("onLine");
//     var remoteMachine = document.getElementById("remoteMachine");
//     var ipMasterATUN = document.getElementById("ipMasterATUN");
//     var Local = document.getElementById("Local");
//     var offlinelicenseform = document.getElementById("offlineForm");
   

//     if(ATUNYes.checked)
//     {
// //            onLinelicenseform.style.display = "block";
//         remoteMachine.style.display = "none";
//         ipMasterATUN.style.display = "none";
//         offlinelicenseform.style.display  = "none";        
//     }
//     else
//     {
// //            onLinelicenseform.style.display = "none";
//         remoteMachine.style.display = "block";
//         ipMasterATUN.style.display = "block";
//         Local.checked = true;
//     }
// }

// function ShowHideIP() {
//     var ATUNYes = document.getElementById("Local");
//     var onLinelicense = document.getElementById("ipMasterATUN");
//     var onLinelicenseform = document.getElementById("onLine");
//     var offlinelicenseform = document.getElementById("offlineForm");
//     var masterMachineType = document.getElementById("masterMachineType");
    
    
//     if(ATUNYes.checked)
//     {
//         onLinelicense.style.display = "block";
//         offlinelicenseform.style.display = "none";
//         onLinelicenseform.style.display = "block"; 
//         masterMachineType.value = "local";            
//     }
//     else
//     {
//         onLinelicense.style.display = "none";
//         offlinelicenseform.style.display = "block";
//         onLinelicenseform.style.display = "none";
//         masterMachineType.value = "remote";
//     }
// }

// ShowHideDiv();
// ShowHideIP();


    render(){
        return(
            <div>
                <AdminHeader />
        <div>
          <p> </p><h1> Orders view</h1><p />
          <p> Your order has been successfully submitted. Your product Key is <br />
          </p><h3></h3>
          <br /> 
          <h3></h3> 
          <h3> Product Key:</h3>
          <br /> The following steps are needed to complete your installation <p />
          <ol>
            <li>Download ATUN installer and launch it on your traget deployment machine
              <a href="/downloadATUN"> from here </a>
            </li>
            <li>Please select one of the following:</li>
          </ol>
          <div className="container">
            <input type="radio" id="ATUNYes" name="ATUN" defaultValue="ATUN" onclick="ShowHideDiv()" defaultChecked /> This machine is the target ATUN master machine<br />
            <input type="radio" id="ATUNNo" name="ATUN" defaultValue="notATUN" onclick="ShowHideDiv()" /> This machine is not the target ATUN master machine<br />
            <div className="container" id="remoteMachine" style={{display: 'block'}}>
              <input type="radio" id="Local" name="remoteMachine" defaultValue="local" onclick="ShowHideIP()" /> Local machine<br />
              <input type="radio" id="offline" name="remoteMachine" defaultValue="offline" onclick="ShowHideIP()" /> offline machine<br />
            </div>
          </div>        
          <div className="container" id="onLine" style={{display: 'block'}}>
            <form method="post" action="/getLicense">
              <div className="form-group col-md-6" style={{display: 'none'}} id="ipMasterATUN">
                <label>remote machine IP</label>
                <input type="text" name="ipMasterATUN" placeholder="127.0.0.1" />
                <input type="hidden" name="masterMachineType" defaultValue="local" />
                <input type="hidden" name="productKey" defaultValue="<%=orderPorductKey%>" />
              </div>            
              <div className="form-group col-md-6">
                <button type="submit" className="btn btn-primary">Download License file</button>
              </div>        
            </form>                     
          </div>
          <div className="container" id="offlineForm" style={{display: 'block'}}>
            <form action="/activationKey" encType="multipart/form-data" method="POST"> 
              <input type="file" id="activationKeyFileID" style={{display: 'none'}} name="activationKeyFile" />
              <input type="hidden" name="productKey" defaultValue="<%=orderPorductKey%>" />
              <div className="form-group col-md-6">
                <input type="button" className="btn btn-primary" id="uploadActivationKeybutton" defaultValue="upload activation key" onclick="document.getElementById('activationKeyFileID').click();" />
                <input type="submit" className="btn btn-primary" defaultValue="Download license file" />
              </div>
            </form>
          </div>
          <form id="license" method="post" action="/activationKey" encType="multipart/form-data">
            <p>Use ATUN installer to generate and pload your activation key file then download your license file and supply it back to ATUN installer</p>
            <input id="activationKeyFileUploader" type="file" accept="*.ar" name="activationKeyFile" style={{display: 'none'}} />
          </form>
        </div> 
        <a href="/products"> Back to product page </a>
      </div>
        )
    }
}


export default OrderReview