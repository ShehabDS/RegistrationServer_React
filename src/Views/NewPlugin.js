import React from "react";
import ReactDOM from "react-dom";
import AdminHeader from "./Partials/AdminHeader.js"



const formValid = ({formerrors , ...rest}) => 
{
	let Valid = true

	Object.values(formerrors).forEach(val => {
		val.length > 0 && (Valid = false)
	})
}

class NewPlugin extends React.Component{


constructor()
{
	super()

	this.state = {
		pluginName: null,
		Description: null,
		Version: null,
		pluginOwner: null,
		ownerEmail: null,
		cpuVirtualCores:null,
		pluginMemory: null,
		gpuUtilization: null,

		formerrors:{
			pluginName: "",
			Description: "",
			Version: "",
			pluginOwner: "",
			ownerEmail: "",
			cpuVirtualCores:"",
			pluginMemory: "",
			gpuUtilization: ""
		}
	}

	
}

handleSubmit = e => {
	e.preventDefault()
	
	if(formValid(this.state))
	{
		console.log(`
					--Submitting--
		Plugin name: ${this.state.pluginName}
		Description: ${this.state.Description}
		Version: ${this.state.Version}
		Plugin owner: ${this.state.pluginOwner}
		Owner email: ${this.state.ownerEmail}
		CPU virtual cores: ${this.state.cpuVirtualCores}
		Plugin memory: ${this.state.pluginMemory}
		GPU utilization: ${this.state.gpuUtilization}
		`)
	}

	else
	{
		console.log("Invalid Form - Display error messages")
	}
	
}





render(){

        return(
            <div>
				<AdminHeader />
                <script src="/scripts/utility.js"></script>
<div class="container">
		<h1><strong><p style={{paddingTop: "20px" , color: "black"}}>Create new ATUN plugin</p></strong></h1>
    	<form action="/newPlugin" method="POST" onSubmit={this.handleSubmit} novalidate>
        	<div className="form-group">
          		<label for="exampleFormControlInput1" style={{color: "black"}}><b>Plugin Name: </b></label>
				  <input type="text" className="form-control" id="pluginName" name="plugin[pluginName]" placeholder="Enter The Plugin Name"  onChange={this.handleChange} maxlength="20" />
				  <span></span>
          	</div>

          	<div className="form-group">
          		<label for="exampleFormControlInput2" style={{color: "black"}}><b>Brief Description: </b></label>
				  <textarea rows="5" maxlength="100" className="form-control" id="Description" name="plugin[pluginDescription]" />
				  <span></span>
          	</div>

          	<div className="form-group">
          		<label for="exampleFormControlInput3" style={{color: "black"}}><b>Version: </b></label>
				  <input type="text" className="form-control" id="Version" name="plugin[pluginVersion]" />
				  <span></span>
			  </div>
			  
			<div className="form-group">
				<label for="exampleFormControlInput3" style={{color: "black"}}><b>Plugin Owner: </b></label>
				<input type="text" className="form-control" id="pluginOwner" name="plugin[pluginOwner]" />
				<span></span><br /><br />
				<label for="exampleFormControlInput3" style={{color: "black"}}><b>Plugin Owner Email: </b></label>
				<input type="text" className="form-control" id="ownerEmail" name="plugin[pluginOwnerEmail]" required="" />
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
				<input type="text" id="cpuVirtualCores" name="plugin[pluginPerformance][0][cpuVirtualCores]"  className="form-control" />
				<span></span>
				</td>


				<td>
				<input type="text" id="pluginMemory" name="plugin[pluginPerformance][0][pluginMemory]" className="form-control" />
				<span></span>
				</td>

				
				<td>
				  	<select id="GPU model" className="form-control" name="plugin[pluginPerformance][0][gpuModel]">
						<option value="1050TI">1050TI</option>
						<option value="1080TI">1080TI</option>
					</select>				
			    </td>
				<td>
				<input type="text" id="gpuUtilization" name="plugin[pluginPerformance][0][gpuUtilization]" className="form-control" />
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

