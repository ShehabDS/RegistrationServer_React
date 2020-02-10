import React from "react"
import AdminHeader from "./AdminHeader"
import Admin from "./Admin"

class NewProduct extends React.Component{

    

//     let SelectAllButton = document.getElementById("SelectAll")
//     SelectAllButton.addEventListener("click",Checking)


//     function Checking()
//     {
//       let Checkers = document.getElementsByTagName("input")
//       for(Input of Checkers)
//       {
//         if(Input.type == "checkbox")
//         {
//           Input.checked = SelectAllButton.checked
//         }
//       }
//     }
//    /*
//   function PluginNaming()
//   {
    
//        let PluginListBody = document.getElementById("PluginListBody")
//       let PluginHiddenContainer = document.getElementById("PluginsLink") 
//       let PluginNames = []
//       let TableBody = document.querySelectorAll("tbody tr")
//       for(let Rw = 0 ;Rw < TableBody.length ; Rw++)
//       {
//         PluginCheck = TableBody[Rw].querySelector("th")
//         if(PluginCheck.children[0].checked)
//         {
//             PluginNames.push(PluginCheck.nextElementSibling.nextElementSibling.textContent) 
//         }
//         PluginHiddenContainer.value = PluginNames
//       }
//       console.log(PluginHiddenContainer) 
//   }
// */

// let ProductName = document.getElementById("productName")
// let ProductID = document.getElementById("productID")
// let DemoVideoUpload = document.getElementById("product demo video")
// let ProductPDF = document.getElementById("product Manual PDF")
// let ProductInstallationPath = document.getElementById("product installation path")
// let red = "#E50000"
// let blue = "#007bff"




//   function ValidateForm()
// {
//   let y  = ValidateProductName()

//       if(y == 1)
//       {
//               return true
//       }
//   else return false
// }



// //Validators

// function ValidateProductName()
// {
//   if(CheckEmpty(ProductName))return false
//   else if(CheckValidity(ProductName))return false
//   else return true	
// }


// //Validation Utilities
// function CheckEmpty(field)
// {
//   if(field.value.trim() == "")
//   {
//       SetInvalid(field,`${field.id} must not be empty`)
//       return true
//   }

//   else
//   {
//       SetValid(field)
//       return false
//   }
// }

// function CheckValidity(field)
// {
//   if(/^[a-zA-Z-. ]+$/.test(field.value))
//   {
//     SetValid(field)
//     return false
//   }
//   else
//   {
//     SetInvalid(field,`${field.id} must contain only letters, dots and dashes`)
//     return true
//   }
// }

// function CheckOnlyLetters(field)
// {
//   if(/^[a-zA-Z ]+$/.test(field.value))
//   {
//     SetValid(field)
//     return false
//   }
//   else
//   {
//     SetInvalid(field,`${field.id} must contain only letters`)
//     return true
//   }
// }

// function CheckVersion(field)
// {
//   if(/^(\d+\.)?(\d+\.)?(\*|\d+)$/.test(field.value))
//   {
//     SetValid(field)
//     return false
//   }
//   else
//   {
//     SetInvalid(field,`${field.id} must contain only Numbers,dots and dashes`)
//     return true
//   }
// }

// function CheckMailValidation(field)
// {
//   if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(field.value))
//   { 
//     SetValid(field)
//     return false
//   }

//   else
//   {
//     SetInvalid(field,`Invalid ${field.id} entered!`)
//     return true
//   }
// }

// //Valid or Not Cases
// function SetInvalid(field,message)
// {
//     field.nextElementSibling.textContent = message
//     field.nextElementSibling.style.color = red
//     field.style.borderColor = red    
// }

// function SetValid(field)
// {
//     field.nextElementSibling.textContent = ""
//     field.style.borderColor = blue 
// }


  
    
    render(){
        return(
            <div>
                <AdminHeader />
                <script src="/scripts/utility.js"></script>



<div className="container">

    <p><h1><strong>New product form</strong></h1></p>

    <form method="post" action="/products" enctype="multipart/form-data" onsubmit="ValidateForm()">

      <div className="form-group">
        <label for="exampleFormControlInput1">Product Name</label>
        <input type="text" className="form-control" id="productName"  name="product[name]" placeholder="Name" />
        <span></span>
      </div>
      <div className="form-group">
          <label for="productID">Product unique ID</label>
          <input type="text" className="form-control" id="productID"  name="product[productID]" placeholder="Name" />
          <span></span>
        </div>    
        <div className="form-group">
            <label for="productDemoVideo">upload product demo video</label>
            <input type="text" className="form-control" id="product demo video"  name="product[productDemoVideo]" placeholder="Name" />
            <span></span>
        </div>        
        <div className="form-group">
            <label for="productManualPathPDF">Path to product PDF Manual</label>
            <input type="text" className="form-control" id="product Manual PDF"  name="product[productManualPathPDF]" placeholder="Name" />
            <span></span>
        </div>        
        <div className="form-group">
            <label for="productInstallationPath">path to product installation package</label>
            <input type="text" className="form-control" id="product installation path"  name="product[productInstallationPath]" placeholder="Name" />
            <span></span>
        </div>         
      <div className="form-group">
          <label for="exampleFormControlSelect1">Version</label>
          
          <select className="form-control" id="productVersion" name="product[version]">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <span></span>
        </div>

        <div className="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" name="product[description]" rows="3"></textarea>
            <span></span>
          </div>

 
        <div className="form-group">
            <h2>Features (plugins)</h2>

          <div className="container">
               <input type="button" value="Add plugin (not currently supported)" onclick="addRow('productPlugins')" />
              <input type="button" value="Delete plugin (not currently supported)" onclick="deleteRow('productPlugins')" />					                   -->
              <table className="table table-striped" id="productPlugins">
                <thead>
                    <tr>
                      <th scope="col"><input type="checkbox" id="SelectAll"/></th>
                      <th scope="col">#</th>
                      <th scope="col">Plugin name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Details</th>
                    </tr>
                 </thead>
              <tbody id="PluginListBody">   
                  <tr>
                     <th><input type="checkbox" name="pluginsList[]"/></th>
                     <td scope="row"></td>
                     <td></td>
                     <td></td>
                     <td>
                        <a href="/plugins/<%=plugin._id%>" >
                          <i className="fas fa-list-alt" data-toggle="tooltip" data-placement="top" title="Details" style={{fontSize: "1.3em" , paddingRight:"15px" , color:"#5a5a5a"}}></i>                                     
                      </a>
                    </td>
                  </tr> 

                    <input type="hidden" name="plugins" id="PluginsLink" /> 
            </tbody>
          </table>
          </div>        
        </div>



          <div className="form-group">
              <input type="button" id="loadImageFile" value="load product image" onclick="document.getElementById('fileDialog').click();" />
              <input id="fileDialog" type="file" accept="image/*" style={{display:"none;"}}  name="product[imageName]" />
              <img id="output"  src="/icons/emptyImage.png" style={{width: "120px"}} alt="input image"/>
            </div> 
            
      <button type="submit" id="ProductSubButton" name="upload">Submit</button>
    </form>


     <input type="file" className="filestyle" data-classButton="btn btn-primary" data-input="false" data-classIcon="icon-plus"  /> 

    </div>


    




            </div>
        )
    }
}

export default NewProduct