import React from "react";
import AdminHeader from "./AdminHeader";


class ClientDashboard extends React.Component{

  //var socket = io.connect('http://localhost:8080');
  //var socket = io.connect('http://192.168.0.42:8080');
  
//   var socket = io.connect('<%=ipAddress%>:8080');

//   console.log("start listening  ");
  
//   socket.on("message", function (data) {
//     // console.log("test "+ data);   
//     // alert("approved");
//     location.reload();
//     toastr.options.timeOut = 5000; // How long the toast will display without user interaction
//     toastr.info(data);
//   });

//   socket.on("error_messages", function (data) {
//     // console.log("test "+ data);   
//     // alert("approved");
//     //location.reload();
//     //toastr.options.timeOut = 1000; // How long the toast will display without user interaction
//     alert(data);
//   });


    render(){
        return(
            <div>
                <AdminHeader />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"></script>
    <link href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet"/>
    <script src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
    
<p> <h1> DASHboard view</h1></p>
  
<p><h2>Client DASHboard</h2></p>

<table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Order num</th>
            <th scope="col">User name</th>
            <th scope="col">Product</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            
          <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>  
                                
                <a href="" >                  
                <i className="fa fa-list-alt" data-toggle="tooltip" data-placement="top" title="Details" style={{fontSize: "1.3em" , marginRight:"10px" , color:"#5a5a5a"}}></i> 
                </a>
                
                <a href="" >
                <i className="fa fa-list-alt" data-toggle="tooltip" data-placement="top" title="Details" style={{fontSize: "1.3em" , marginRight:"10px" , color:"#5a5a5a"}}></i>
                </a>
                
                  <a href="/orders/<%=order._id%>/cancel" >
                  <i className="fa fa-list-alt" data-toggle="tooltip" data-placement="top" title="Details" style={{fontSize: "1.3em" , marginRight:"10px" , color:"#5a5a5a"}}></i>
                  </a>
                   
                  <form action="/orders/<%= order._id %>?_method=DELETE" method="POST" style={{display:"inline-block;"}}>
                  <button type="submit" className="btn btn-primary mb-2">Cancel</button>
              </form> 
              
                <a href="/orders/<%=order._id%>" >
                  <button className="btn btn-primary mb-2">details</button> 
                </a>  
                
            </td>
          </tr>
        </tbody>
      </table> 

            </div>
        )
    }
}

export default ClientDashboard