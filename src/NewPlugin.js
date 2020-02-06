import React from "react";
import ReactDOM from "react-dom";
import AdminHeader from "./AdminHeader.js"



class NewPlugin extends React.Component{


// 	constructor(){
// 		super()
// 		this.state = {
// 			PluginName: document.getElementById("plugin name"),
// 			Description: document.getElementById("description"),
// 			Version: document.getElementById("version"),
// 			Owner: document.getElementById("plugin owner"),
// 			OwnerMail: document.getElementById("owner e-mail"),
// 			red: "#E50000",
// 			blue: "#007bff",
// 			i: 0
// 		}

		
// 	}
	
// 	componentDidMount(){
// 			this.setState(
// 				{
// 					PluginName: document.getElementById("plugin name"),
// 					Description: document.getElementById("description"),
// 					Version: document.getElementById("version"),
// 					Owner: document.getElementById("plugin owner"),
// 					OwnerMail: document.getElementById("owner e-mail"),
// 					red: "#E50000",
// 					blue: "#007bff",
// 					i: 0
// 				}
// 			)
// 			console.log(this.state.PluginName)
			
// }

//  ValidateForm()
// {
// 	let y  = this.ValidatePluginName()
// 		y += this.ValidateDescription()
// 		y += this.ValidateVersion()
// 		y += this.ValidateOwner()
// 		y += this.ValidateOwnerEmail()
// 		if(y == 5 && this.i == 0)
// 		{			
// 			return true		
// 		}
// 	else return false
// }

//  ValidatePluginName()
// {
// 	console.log(this.state.PluginName)
// 	if(this.CheckEmpty(this.state.PluginName))return false
// 	else if(this.CheckValidity(this.state.PluginName))return false
// 	else return true	
// }

//  ValidateDescription()
// {
// 	if(this.CheckEmpty(this.Description))return false
// 	else return true	
// }

//  ValidateVersion()
// {
// 	if (this.CheckEmpty(this.Version))return false
// 	else if(this.CheckVersion(this.Version))return false
// 	else return true	
// }

//  ValidateOwner()
// {
// 	if(this.CheckEmpty(this.Owner))return false
// 	else if(this.CheckOnlyLetters(this.Owner))return false
// 	else return true	
// }

//  ValidateOwnerEmail()
// {
// 	if(this.CheckEmpty(this.OwnerMail))return false
// 	else if(this.CheckMailValidation(this.OwnerMail))return false
// 	else return true	
// }
// //Validation Utilities
//  CheckEmpty(field)
//   {
// 	if(field.value.trim() == "")
// 	{
// 		this.SetInvalid(field,`${field.id} must not be empty`)
// 		return true
// 	}

// 	else
// 	{
// 		this.SetValid(field)
// 		return false
// 	}
//   }

//    CheckValidity(field)
//   {
//     if(/^[a-zA-Z-. ]+$/.test(field.value))
//     {
//       this.SetValid(field)
//       return false
//     }
//     else
//     {
//       this.SetInvalid(field,`${field.id} must contain only letters, dots and dashes`)
//       return true
//     }
//   }

//    CheckOnlyLetters(field)
//   {
//     if(/^[a-zA-Z ]+$/.test(field.value))
//     {
//       this.SetValid(field)
//       return false
//     }
//     else
//     {
//       this.SetInvalid(field,`${field.id} must contain only letters`)
//       return true
//     }
//   }

//    CheckVersion(field)
//   {
//     if(/^(\d+\.)?(\d+\.)?(\*|\d+)$/.test(field.value))
//     {
//       this.SetValid(field)
//       return false
//     }
//     else
//     {
//       this.SetInvalid(field,`${field.id} must contain only Numbers,dots and dashes`)
//       return true
//     }
//   }

//    CheckMailValidation(field)
//   {
//     if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(field.value))
//     { 
//       this.SetValid(field)
//       return false
//     }
  
//     else
//     {
//       this.SetInvalid(field,`Invalid ${field.id} entered!`)
//       return true
//     }
//   }

// //Valid or Not Cases
//  SetInvalid(field,message)
//   {
//       field.nextElementSibling.textContent = message
//       field.nextElementSibling.style.color = this.red
//       field.style.borderColor = this.red    
//   }
  
//    SetValid(field)
//   {
//       field.nextElementSibling.textContent = ""
//       field.style.borderColor = this.blue 
//   }

  
		
		


render(){

        return(
            <div>
				<AdminHeader />
                <script src="/scripts/utility.js"></script>
<div class="container">
		<h1><strong><p style={{paddingTop: "20px" , color: "black"}}>Create new ATUN plugin</p></strong></h1>
    	<form action="/newPlugin" method="POST" novalidate>
        	<div className="form-group">
          		<label for="exampleFormControlInput1" style={{color: "black"}}><b>Plugin Name: </b></label>
				  <input type="text" className="form-control" id="plugin name" name="plugin[pluginName]" placeholder="Enter The Plugin Name"  maxlength="20" />
				  <span></span>
          	</div>

          	<div className="form-group">
          		<label for="exampleFormControlInput2" style={{color: "black"}}><b>Brief Description: </b></label>
				  <textarea rows="5" maxlength="100" className="form-control" id="description" name="plugin[pluginDescription]"></textarea>
				  <span></span>
          	</div>

          	<div className="form-group">
          		<label for="exampleFormControlInput3" style={{color: "black"}}><b>Version: </b></label>
				  <input type="text" className="form-control" id="version" name="plugin[pluginVersion]" />
				  <span></span>
			  </div>
			  
			<div className="form-group">
				<label for="exampleFormControlInput3" style={{color: "black"}}><b>Plugin Owner: </b></label>
				<input type="text" className="form-control" id="plugin owner" name="plugin[pluginOwner]" />
				<span></span><br /><br />
				<label for="exampleFormControlInput3" style={{color: "black"}}><b>Plugin Owner Email: </b></label>
				<input type="text" className="form-control" id="owner e-mail" name="plugin[pluginOwnerEmail]" required="" />
				<span></span><br />
			</div>  

          	<div className="form-group" style={{marginLeft: "0px"}}>

			<h2 style={{color: "black"}}><b>Plugin performance numbers</b></h2>
			  

 <p >
	<input type="button" id="tableAdd" className="btn btn-primary mb-2" style={{margin: "3px"}} value="Add entry"  />
	<input type="button" className="btn btn-primary mb-2" style={{margin: "3px"}} value="Delete selected" />	
</p>



	<table className="table table-borderless" id="pluginTable">

	<thead id="Header">
		  <tr>
				<th scope="col"><input type="checkbox" data-toggle="tooltip" data-placement="top" title="SelectAll"  id="SelectAllCheck" /></th>
				<th scope="col" style={{color: "black"}}>Resolution</th>
				<th scope="col" style={{color: "black"}}>Frame PerSec</th>
				<th scope="col" style={{color: "black"}}>CPU Virtual Cores</th>
				<th scope="col" style={{color: "black"}}>Plugin Memory(GB)</th>
				<th scope="col" style={{color: "black"}}>GPU Model</th>
				<th scope="col" style={{color: "black"}}>GPU Utilization</th>
		  </tr>
	</thead>

	
	<tbody id="Table-Body">
		<tr>
				<th><input type="checkbox" name="chk" style={{marginTop:"13px"}}/></th>

				<td>
				<select id="ResolutionSelect" className="form-control" name="plugin[pluginPerformance][0][resolution]">
						<option value="720p">720p</option>
						<option value="1080p">1080p</option>
					</select>
					
				</td>
				
	
				<td>
				<select id="FPSSelect" className="form-control" name="plugin[pluginPerformance][0][framePerSec]">
						<option value="10">10</option>
						<option value="15">15</option>
						<option value="20">20</option>
						<option value="25">25</option>
						<option value="30">30</option>
					</select>
				</td>
				
				
				<td>
				<input type="text" id="CPU virtual cores" name="plugin[pluginPerformance][0][cpuVirtualCores]"  className="form-control" />
				<span></span>
				</td>


				<td>
				<input type="text" id="Plugin memory" name="plugin[pluginPerformance][0][pluginMemory]" className="form-control" />
				<span></span>
				</td>

				
				<td>
				  	<select id="GPU model" className="form-control" name="plugin[pluginPerformance][0][gpuModel]">
						<option value="1050TI">1050TI</option>
						<option value="1080TI">1080TI</option>
					</select>				
			    </td>
				<td>
				<input type="text" id="GPU utilization" name="plugin[pluginPerformance][0][gpuUtilization]" className="form-control" />
				<span></span>
				</td>
		</tr>
	</tbody>
	</table>
	<div className="form-group" style={{display: "inline"}}>
		<input type="submit" id="SubButton" className="btn btn-primary mb-2" value="Submit" style={{marginTop: "20px"}} />
		<input className="btn btn-primary mb-2" type="reset"  value="Clear" style={{float: "right" , marginTop: "20px"}} />
	</div>
	
	
 </div>	
    


</form>
</div>

              </div>
              
        )
    }
}

export default NewPlugin

