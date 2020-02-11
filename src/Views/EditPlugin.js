import React from "react"
import AdminHeader from "./AdminHeader"

class EditPlugin extends React.Component{


/* 
let SelectAll = document.getElementById("SelectAllCheck")
SelectAll.addEventListener("click",CheckAll)

function CheckAll()
{
let individuals = document.getElementsByTagName("input")

for(check of individuals)
{
    if(check.type == "checkbox")
    {
        check.checked = SelectAll.checked
    }
}
}

    //Changing the elements names
    
    let i = 0

let submitbutton = document.getElementById("whatever")
    submitbutton.addEventListener("click", Naming)


function Naming()
    {
        i = 0
        let TableBody = document.querySelectorAll("tbody tr")
        
        for(let Row = 0;Row < TableBody.length; Row++)
        {
            let TDs = TableBody[Row].querySelectorAll("td")
            for(Element of TDs)
            {
                

                if(Element.children[0].id == "ResolutionSelect")
                {
                    Element.children[0].name ="plugin[pluginPerformance]["+ Row + "][resolution]"
                }
                
                else if(Element.children[0].id == "FPSSelect")
                {
                    Element.children[0].name ="plugin[pluginPerformance]["+ Row + "][framePerSec]"
                }

                else if(Element.children[0].id == "CPU virtual cores")
                {
                    Element.children[0].name ="plugin[pluginPerformance]["+ Row + "][cpuVirtualCores]"
                    let CPUValidator = document.getElementsByName(Element.children[0].name)
                    if(CheckEmpty(CPUValidator[0])) i++
                }

                else if(Element.children[0].id == "gpuModel")
                {
                    Element.children[0].name ="plugin[pluginPerformance]["+ Row + "][gpuModel]"
                }

                else if(Element.children[0].id == "Plugin memory")
                {
                    Element.children[0].name ="plugin[pluginPerformance]["+ Row + "][pluginMemory]"
                    let PluginMemoryValidator = document.getElementsByName(Element.children[0].name)
                    if(CheckEmpty(PluginMemoryValidator[0]))i++
                }

                else if(Element.children[0].id == "GPU utilization")
                {
                    Element.children[0].name ="plugin[pluginPerformance]["+ Row + "][gpuUtilization]"
                    let GPUValidator = document.getElementsByName(Element.children[0].name)
                    if(CheckEmpty(GPUValidator[0]))i++
                }					
                
            }
    
            
        }
        console.log(i)
    }

    
    

    
    //Form Validation
    
    //Elements Grablers
    
    let PluginName = document.getElementById("plugin name")
    let Description = document.getElementById("description")
    let Version = document.getElementById("version")
    let Owner = document.getElementById("plugin owner")
    let OwnerMail = document.getElementById("owner e-mail")
    let red = "#E50000"
    let blue = "#007bff"
    
    //Main Form Validator
    
    function ValidateForm()
    {
        let y  = ValidatePluginName()
            y += ValidateDescription()
            y += ValidateVersion()
            y += ValidateOwner()
            y += ValidateOwnerEmail()
            //y += i
            console.log(y)
            if(y == 5 && i == 0)
            {
                return true
            }
        else return false
    }
    
    
    
    //Validators
    
    function ValidatePluginName()
    {
        if(CheckEmpty(PluginName))return false
        else if(CheckValidity(PluginName))return false
        else return true	
    }
    
    function ValidateDescription()
    {
        if(CheckEmpty(Description))return false
        else if(CheckValidity(Description))return false
        else return true	
    }
    
    function ValidateVersion()
    {
        if(CheckEmpty(Version))return false
        else if(CheckVersion(Version))return false
        else return true	
    }
    
    function ValidateOwner()
    {
        if(CheckEmpty(Owner))return false
        else if(CheckOnlyLetters(Owner))return false
        else return true	
    }
    
    function ValidateOwnerEmail()
    {
        if(CheckEmpty(OwnerMail))return false
        else if(CheckMailValidation(OwnerMail))return false
        else return true	
    }
    //Validation Utilities
    function CheckEmpty(field)
      {
        if(field.value.trim() == "")
        {
            SetInvalid(field,`${field.id} must not be empty`)
            return true
        }
    
        else
        {
            SetValid(field)
            return false
        }
      }
    
      function CheckValidity(field)
      {
        if(/^[a-z A-Z-.]+$/.test(field.value))
        {
          SetValid(field)
          return false
        }
        else
        {
          SetInvalid(field,`${field.id} must contain only letters, dots and dashes`)
          return true
        }
      }
    
      function CheckOnlyLetters(field)
      {
        if(/^[a-zA-Z]+$/.test(field.value))
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
    
      function CheckVersion(field)
      {
        if(/^[0-9-.]+$/.test(field.value))
        {
          SetValid(field)
          return false
        }
        else
        {
          SetInvalid(field,`${field.id} must contain only Numbers,dots and dashes`)
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
     */

    render(){
        return(
            <div>
                <AdminHeader />
        <div className="container">
          <p><strong /></p><h1><strong>Edit plugin form</strong></h1><p />
          <form action="/plugins/<%=foundPlugin._id %>?_method=PUT" method="POST" onsubmit="return ValidateForm()">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1" style={{color: 'black'}}><b>Plugin Name: </b></label>
              <input type="text" className="form-control" id="plugin name" name="plugin[pluginName]" maxLength={20} />
              <span />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput2" style={{color: 'black'}}><b>Brief Description: </b></label>
              <textarea rows={5} maxLength={300} className="form-control" id="description" name="plugin[pluginDescription]" defaultValue={""} />
              <span />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput3" style={{color: 'black'}}><b>Version: </b></label>
              <input type="text" className="form-control" id="version" name="plugin[pluginVersion]" />
              <span />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput3" style={{color: 'black'}}><b>pluginOwner: </b></label>
              <input type="text" className="form-control" id="plugin owner" name="plugin[pluginOwner]" />
              <span />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput3" style={{color: 'black'}}><b>pluginOwnerEmail: </b></label>
              <input type="text" className="form-control" id="owner e-mail" name="plugin[pluginOwnerEmail]" />
              <span />
            </div>  
            <div className="form-group row" style={{marginLeft: '0px'}}>
              <div className="col-xs-4">
                <br /><h1 style={{color: 'black'}}><b>Plugin performance numbers</b></h1><br />
                <label htmlFor="resolutionID" style={{color: '#345ceb'}}><b>Resolution: </b></label>
                <input type="text" id="Resolution" name="pluginPerformance[resolution]" className="form-control" />
                <label htmlFor="cpuID" style={{color: '#345ceb'}}><b>FPS: </b></label>
                <input type="text" id="framePerSec" name="pluginPerformance[framePerSec]" className="form-control" />
                <label htmlFor="memoryID" style={{color: '#345ceb'}}><b>Number of virtual CPU cores: </b></label>
                <input type="text" id="cpuVirtualCores" name="pluginPerformance[cpuVirtualCores]" className="form-control" />
                <label htmlFor="memoryID" style={{color: '#345ceb'}}><b>Memory: </b></label>
                <input type="text" id="pluginMemory" name="pluginPerformance[pluginMemory]" className="form-control" />
                <label htmlFor="memoryID" style={{color: '#345ceb'}}><b>Reference GPU model: </b></label>
                <input type="text" id="gpuModel" name="pluginPerformance[gpuModel]" className="form-control" />
                <label htmlFor="memoryID" style={{color: '#345ceb'}}><b>GPU utlization: </b></label>
                <input type="text" id="gpuUtilization" name="pluginPerformance[gpuUtilization]" className="form-control" />
              </div>
            </div>	
            <div className="container">
              <input type="button" className="btn btn-primary mb-2" defaultValue="Add entry" onclick="AddTableRow()" />
              <input type="button" className="btn btn-primary mb-2" defaultValue="Delete selected" onclick="deleteRow('pluginTable')" />					  
              <table className="table table-borderless" id="pluginTable">
                <thead>
                  <tr>
                    <th scope="col"><input type="checkbox" id="SelectAllCheck" /></th>
                    <th scope="col" style={{color: 'black'}}>Resolution</th>
                    <th scope="col" style={{color: 'black'}}>Frame PerSec</th>
                    <th scope="col" style={{color: 'black'}}>CPU VirtualCores</th>
                    <th scope="col" style={{color: 'black'}}>Plugin Memory(GB)</th>
                    <th scope="col" style={{color: 'black'}}>GPU Model</th>
                    <th scope="col" style={{color: 'black'}}>GPU Utilization</th>
                  </tr>
                </thead>
                <tbody id="Table-Body">
                  <tr>
                    <th><input type="checkbox" style={{marginTop: '10px'}} name="chk" /></th>
                    <td>
                      <select id="ResolutionSelect" name="pluginPerformance[resolution]" className="form-control">
                        <option value="720p">720p</option>
                        <option value="1080p">1080p</option>
                      </select>
                    </td>
                    <td>
                      <select id="FPSSelect" name="pluginPerformance[framePerSec]" className="form-control">
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                        <option value={25}>25</option>
                        <option value={30}>30</option>
                      </select>
                    </td>				
                    <td>
                      <input type="text" id="CPU virtual cores" name="pluginPerformance[cpuVirtualCores]" className="form-control" />
                      <span />
                    </td>
                    <td>
                      <input type="text" id="Plugin memory" name="pluginPerformance[pluginMemory]" className="form-control" />
                      <span />
                    </td>
                    <td>
                      <select id="gpuModel" name="pluginPerformance[gpuModel]" className="form-control">
                        <option value="1050TI">1050TI</option>
                        <option value="1080TI">1080TI</option>
                      </select>				
                    </td>
                    <td>
                      <input type="text" id="GPU utilization" name="pluginPerformance[gpuUtilization]" className="form-control" />
                      <span />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="form-group">
              <input className="btn btn-primary mb-2" type="reset" style={{float: 'right', marginRight: '61%', paddingLeft: '20px', paddingRight: '20px'}} defaultValue="Clear" />
              <input type="submit" id="whatever" className="btn btn-primary mb-2" defaultValue="Submit" />
            </div>
          </form>
        </div>
      </div>
        )
    }
}


export default EditPlugin