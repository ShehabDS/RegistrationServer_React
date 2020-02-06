

function AddTableRow()
{
	let TableElement = document.getElementById("pluginTable")
	let TableTbody = document.getElementById("Table-Body")
  let LastRow = document.createElement("tr")
//Tds Creation

let TDElement1 = document.createElement("th")
let TDElement2 = document.createElement("td")
let TDElement3 = document.createElement("td")
let TDElement4 = document.createElement("td")
let TDElement5 = document.createElement("td")
let TDElement6 = document.createElement("td")
let TDElement7 = document.createElement("td")


//Input Creation

//selection checkbox creation
let InputElement1 = document.createElement("input")
InputElement1.type = "checkbox"
InputElement1.style.marginTop = "13px"

//Resolution Select Creation
let InputElement2 = document.createElement("select")
InputElement2.className = "form-control"
InputElement2.id = "ResolutionSelect"
let ResolutionSubOption1 = document.createElement("option")
let ResolutionSubOption2 = document.createElement("option")
ResolutionSubOption1.innerText = "720"
ResolutionSubOption2.innerText = "1080"
InputElement2.appendChild(ResolutionSubOption1)
InputElement2.appendChild(ResolutionSubOption2)

//FPS select creation
let InputElement3 = document.createElement("select")
InputElement3.className = "form-control"
InputElement3.id = "FPSSelect"
let FPSOption1 = document.createElement("option")
let FPSOption2 = document.createElement("option")
let FPSOption3 = document.createElement("option")
let FPSOption4 = document.createElement("option")
let FPSOption5 = document.createElement("option")
FPSOption1.innerText = "10"
FPSOption2.innerText = "15"
FPSOption3.innerText = "20"
FPSOption4.innerText = "25"
FPSOption5.innerText = "30"
InputElement3.appendChild(FPSOption1)
InputElement3.appendChild(FPSOption2)
InputElement3.appendChild(FPSOption3)
InputElement3.appendChild(FPSOption4)
InputElement3.appendChild(FPSOption5)

//Cpu Virtual cores Creation
let InputElement4 = document.createElement("input")
let AppendedSpan4 = document.createElement("span")
InputElement4.type = "text"
InputElement4.className = "form-control"
InputElement4.id = "cpuVirtualCores"


//Plugin Memory Creation
let InputElement5 = document.createElement("input")
let AppendedSpan5 = document.createElement("span")
InputElement5.type = "text"
InputElement5.className = "form-control"
InputElement5.id = "pluginMemory"


//Gpu Model Creation
let InputElement6 = document.createElement("select")
InputElement6.className = "form-control"
InputElement6.id = "gpuModel"
let GpuOption1 = document.createElement("option")
let GpuOption2 = document.createElement("option")
GpuOption1.innerText = "1050TI"
GpuOption2.innerText = "1080TI"
InputElement6.appendChild(GpuOption1)
InputElement6.appendChild(GpuOption2)


//Gpu Utilization Creation
let InputElement7 = document.createElement("input")
let AppendedSpan7 = document.createElement("span")
InputElement7.type = "text"
InputElement7.className = "form-control"
InputElement7.id = "gpuUtilization"


//Assigning all together

TDElement1.appendChild(InputElement1)
TDElement2.appendChild(InputElement2)
TDElement3.appendChild(InputElement3)
TDElement4.appendChild(InputElement4)
TDElement4.appendChild(AppendedSpan4)
TDElement5.appendChild(InputElement5)
TDElement5.appendChild(AppendedSpan5)
TDElement6.appendChild(InputElement6)
TDElement7.appendChild(InputElement7)
TDElement7.appendChild(AppendedSpan7)


LastRow.appendChild(TDElement1)
LastRow.appendChild(TDElement2)
LastRow.appendChild(TDElement3)
LastRow.appendChild(TDElement4)
LastRow.appendChild(TDElement5)
LastRow.appendChild(TDElement6)
LastRow.appendChild(TDElement7)

TableTbody.appendChild(LastRow)
//Changing the elements names to fix Database Problems

}


function deleteRow(tableID) {
      try {
      var table = document.getElementById(tableID);
      var rowCount = table.rows.length;
  
      for(var i=0; i<rowCount; i++) 
      {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];
        if(null != chkbox && true == chkbox.checked) 
        {
          if(rowCount <= 1) 
          {
            alert("Cannot delete all the rows.");
            break;
          }
          table.deleteRow(i);
          rowCount--;
          i--;
          }				
        }
        }catch(e) {
          alert(e);
        }
  }
  

var loadFile = function(event) {
  var output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
};