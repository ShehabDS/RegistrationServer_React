import React from "react";
import AdminHeader from "./Partials/AdminHeader.js"
import "./Styles.css" 
import { DatePicker } from "antd";
import {BrowserRouter as Router, Route,Link} from "react-router-dom";





class NewPlugin extends React.Component{




	handleChange(e){
		e.preventDefault()
	}


render(){

        return(
            <div>
				<AdminHeader />
                <script src="/scripts/utility.js"></script>
<div class="container">
		<h1><strong><p style={{paddingTop: "20px" , color: "black"}}>Create new ATUN plugin</p></strong></h1>
    	<form  method="POST"  novalidate onSubmit={this.handleChange}>
        	<div className="form-group">
          		<label for="exampleFormControlInput1" style={{color: "black"}}><b>Plugin Name: </b></label>
				  <input type="text" className="form-control" id="pluginName" name="plugin[pluginName]" placeholder="Enter The Plugin Name"   maxlength="20" />
				  <span></span>
          	</div>

			  <DatePicker />

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
		<Link to="/"><input type="submit" id="SubButton" className="btn btn-primary mb-2" value="Submit" style={{marginTop: "20px"}} /></Link>
		
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

