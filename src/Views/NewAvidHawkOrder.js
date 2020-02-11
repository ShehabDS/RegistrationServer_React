import React from "react"
import AdminHeader from "./AdminHeader"
import Admin from "./Admin"

class NewAvidHawkOrder extends React.Component{


/* 

//Start Date Code
$(document).ready(function(){
		var date_input=$('input[name="order[orderStartdate]"]'); //our date input has the name "date"

		var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
		date_input.datepicker({
			format: 'mm/dd/yyyy',
			container: container,
			todayHighlight: true,
			autoclose: true,
		})
	})


  var numStreams = [];
  var numCPUcores = [];
  var numMemory = [];
  var gpuUtilization = [];
  var totalStreams;
  var totalCPUcores;
  var totalMemory;
  var totalGPU;
  var SlaveCore=16;

  function calculateSolutionHardware() {
    SlaveCore = document.getElementById("mySelect").value;  
    calculateTotalHardware();
}


  function calculateTotalHardware()
  {
    numMachine = document.getElementById("totalSlaveMachines").value;
    totalCPUcores = SlaveCore*numMachine;
    totalGPU = 2 * numMachine;
    updatedTotalMemory = 2 * numMachine;

    // document.getElementById("totalSlaveMachines").value = numMachine;    
    document.getElementById("totalCoresUsed").value  = totalCPUcores;
    document.getElementById("totalMemoryUsed").value = updatedTotalMemory;
    document.getElementById("slaveTotalGPU").value = 2;
    document.getElementById("pluginStreams").value = SlaveCore - 2;
    

    updatePluginDetails();

  }

  function updatePluginDetails() {
    // numStreams[index] = Number(val);
    // numCPUcores[index] = Number(numCores);
    // numMemory[index] = Number(memorySize);
    // gpuUtilization[index] = parseFloat(gpuUtilizationVal);
    // totalStreams = 0;
    // totalCPUcores = 0;
    // totalMemory = 0;
    // totalGPU = 0;
    // numStreams.forEach(function(stream,index){
    //   totalStreams = totalStreams + stream;
    //   totalCPUcores = totalCPUcores + stream*numCPUcores[index];
    //   totalMemory = totalMemory + stream*numMemory[index];
    //   totalGPU = totalGPU + stream*gpuUtilization[index];
    //  });
     //alert("total GPU "+gpuUtilizationVal+" "+gpuUtilization[0]+" "+ totalGPU);
    // alert(foundProduct.optionalPlugins[index].name);
    totalStreams = (SlaveCore - 2)*numMachine; //remove ATUN overhead
    totalCPUcores = SlaveCore*numMachine;
    totalMemory = 64*numMachine; //assume each machine takes 64 Giga RAM
    totalGPU = 2**numMachine; //assume each machine takes 2 GPUs
    document.getElementById("totalPluginStreams").value = totalStreams;
    document.getElementById("totalPluginCPU").value = totalCPUcores;
    document.getElementById("totalPluginMemory").value = totalMemory;
    document.getElementById("totalGPUUtilization").value = totalGPU;

  } //

  // Form validation code will come here.
     function validate() {
        const data = {
          fields: [1,2,3]
        };

        jQuery.ajax({
          data: JSON.stringify(data),
          contentType: 'application/json'
        });

        return(true);
     }
  

   */

    render(){
        return(
            <div>
            <AdminHeader />
            <h1 style={{textAlign: 'center', marginTop: '10px', marginBottom: '30px'}}><b> Order</b></h1>
            <div className="form-group" style={{marginLeft: '25%', marginRight: '25%'}}>
              <img src style={{width: '100%'}} />
            </div>
            <p> AvidHawk</p>
            <div className="container-fluid">
              <h1 style={{textAlign: 'center', marginTop: '100px'}}><b>  order form</b></h1>
              <form action="/submitOrder" method="POST" onsubmit="return(validate());">
                <input type="hidden" name="order[product][name]" />
                <input type="hidden" name="order[product][version]" />
                <div className="container-fluid">
                  <div className="bd-example">
                    <br />
                    <link rel="stylesheet" href="https://formden.com/static/cdn/bootstrap-iso.css" /> 
                    <link rel="stylesheet" href="https://formden.com/static/cdn/font-awesome/4.4.0/css/font-awesome.min.css" />
                    <div className="form-group" style={{marginLeft: '23%', marginRight: '23%'}}>
                      <div className="bootstrap-iso">
                        <div className="container-fluid" style={{padding: '0px', marginBottom: '15px'}}>
                          <div className="row">
                            <div className="col-md-12 col-sm-6 col-xs-12">
                              <label className="control-label " htmlFor="date">
                                Date
                              </label>
                              <div className="input-group">
                                <div className="input-group-addon">
                                  <i className="fa fa-calendar">
                                  </i>
                                </div>
                                <input className="form-control" id="date" name="order[orderStartdate]" placeholder="MM/DD/YYYY" type="text" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <label className="font-weight-bold" htmlFor="Duration">Duration </label>
                      <input type="text" id="Duration" className="form-control col-md-12" />
                    </div>
                    <link rel="stylesheet" href="https://formden.com/static/cdn/bootstrap-iso.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css" />
                  </div>
                  <link rel="stylesheet" href="https://formden.com/static/cdn/bootstrap-iso.css" />
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css" />
                  <h1><b>Deployment Requirements</b></h1>
                  <div className="form-row">       
                    <div className="form-group col-md-2">
                      <label htmlFor="MachineType">Machine type</label>
                      <input type="hidden" className="form-control" id="Master" name="masterMachine" defaultValue="Master" readOnly />
                      <input type="text" className="form-control" id="Slave" name="slaveMachine" defaultValue="Processing node" readOnly />
                    </div>
                    <div className="form-group col-md-2">
                      <label htmlFor="Model">Model</label>
                      <input type="hidden" className="form-control" id="Master" name="masterMachine" defaultValue="8 cores" readOnly />
                      <input type="text" className="form-control" id="Slave" name="slaveMachine" defaultValue="16 cores" readOnly /> --&gt;
                      <select id="mySelect" className="form-control" onchange="calculateSolutionHardware()">
                        <option value={16}>16 cores, 64 Giga RAM, and 2 1080TI GPUs</option>
                        <option value={32}>32 cores, 128 Giga RAM, and 2 1080TI GPUs</option>
                        <option value={40}>40 cores, 128 Giga RAM, and 2 1080TI GPUs</option>
                      </select>
                    </div>
                    <div className="form-group col-md-2">
                      <label htmlFor="MachineCount">Machine count</label>
                      <input type="hidden" className="form-control" id="MasterCount" name="order[masterMachine][count]" defaultValue={1} readOnly />
                      <input type="text" className="form-control" id="totalSlaveMachines" name="order[slaveMachine][count]" defaultValue={1} onchange="calculateSolutionHardware()" />
                    </div>
                    <div className="form-group col-md-2">
                      <label htmlFor="numberOfCPUs">Virtual CPU cores</label> 
                      <input type="hidden" className="form-control" id="mastertotalCoresUsed" name="order[masterMachine][TotalCores]" defaultValue={8} readOnly />
                      <input type="hidden" className="form-control" id="totalCoresUsed" name="order[slaveMachine][TotalCores]" readOnly />
                    </div>
                    <div className="form-group col-md-2">
                      <label htmlFor="numberOfCPUs">Memory (GB)</label> 
                      <input type="hidden" className="form-control" id="masterTotalMemoryUsed" name="order[masterMachine][TotalMemory]" defaultValue={16} readOnly />
                      <input type="hidden" className="form-control" id="totalMemoryUsed" name="order[slaveMachine][TotalMemory]" readOnly />
                    </div>
                    <div className="form-group col-md-2">
                      <label htmlFor="numberOfGPUs">Average # GPU</label> 
                      <input type="hidden" className="form-control" id="masterTotalGPU" name="order[masterMachine][TotalGPU]" defaultValue={0} readOnly />
                      <input type="hidden" className="form-control" id="slaveTotalGPU" name="order[slaveMachine][TotalGPU]" readOnly />
                    </div>
                  </div>
                  <p /><h2>Total hardware</h2><p />
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Camera resolution</th>
                        <th scope="col">Number of streams</th>
                        <th scope="col">CPU cores</th>
                        <th scope="col">Memory (GB)</th>
                        <th scope="col">GPU model</th>
                        <th scope="col">GPU utilization</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>720p</td>
                        <td> <input type="text" className="form-control" id="totalPluginStreams" name="order[totalNumStreams]" readOnly /></td>                      
                        <td><input type="text" className="form-control" id="totalPluginCPU" name="order[totalCpuCores]" readOnly /></td>
                        <td> <input type="text" className="form-control" id="totalPluginMemory" name="order[totalmemory]" readOnly /></td>
                        <td><input type="text" className="form-control" id="gpuModel" readOnly /></td>
                        <td> <input type="text" className="form-control" id="totalGPUUtilization" name="order[totalGPUUtilization]" readOnly /></td>
                      </tr>
                    </tbody>
                  </table>          
                  <p /><h2 /><p />
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Camera resolution</th>
                        <th scope="col">Number of streams</th>
                        <th scope="col">CPU cores</th>
                        <th scope="col">Memory (GB)</th>
                        <th scope="col">GPU model</th>
                        <th scope="col">GPU utilization</th>
                      </tr>
                    </thead>
                    <tbody>
                      <input type="hidden" name="order[product][plugin][0][name]" defaultValue="<%=foundProduct.optionalPlugins[0].pluginName%>" /> 
                      <input type="hidden" name="order[product][plugin][0][pluginVersion]" />
                      <tr>     
                        <td>720p</td>
                        <td> <input type="text" className="form-control" id="pluginStreams" placeholder={0} readOnly /></td>                      
                        <td><input type="text" className="form-control" id="pluginCPU" readOnly /></td>
                        <td> <input type="text" className="form-control" id="pluginMemory" readOnly /></td>
                        <td><input type="text" className="form-control" id="gpuModel" readOnly /></td>
                        <td> <input type="text" className="form-control" id="gpuUtilization" readOnly /></td>
                      </tr>
                    </tbody>
                  </table>        
                </div>
              </form></div>
            <div className="container-fluid">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <button type="submit" className="btn btn-primary">Submit order</button>
                </div>
              </div>
              <a href="/products"> <button className="btn btn-primary"> <i className="fas fa-arrow-alt-circle-left" style={{marginRight: '5px'}} />Back</button> </a>
            </div>
          </div>
        )
    }
}


export default NewAvidHawkOrder