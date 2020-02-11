import React from "react"
import AdminHeader from "./Partials/AdminHeader"

class Orders extends React.Component{

    /* var socket = io.connect('<%=ipAddress%>:8080');
  console.log("start listening  ");
  socket.on("message", function (data) {
    //console.log("test "+ data);   
    // alert("approved");
    location.reload();
    toastr.options.timeOut = 1000; // How long the toast will display without user interaction
    toastr.info(data);
  }); */


    render()
    {
        return(
            <div>
            <AdminHeader />
            <link href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet" />
            <div className="container-fluid">
              <p> </p><h2><b>Orders</b></h2><p />
              <div className="bd-example">
                <table className="table table-hover">
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
                      <th scope="row" />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <a href="/orders/<%=order._id%>" style={{textDecoration: 'none'}}>
                          <i className="fas fa-list-alt" data-toggle="tooltip" data-placement="top" title="Details" style={{fontSize: '1.3em', marginRight: '10px', color: '#5a5a5a'}} />
                        </a>
                        <a href="/orders/<%=order._id%>/approve" style={{textDecoration: 'none'}}>
                          <i className="fas fa-check-circle" data-toggle="tooltip" data-placement="top" title="Approve" style={{fontSize: '1.3em', marginRight: '10px', color: 'green'}} />
                        </a>
                        <a href="/orders/<%=order._id%>/cancel" style={{textDecoration: 'none'}}>
                          <i className="fas fa-times" data-toggle="tooltip" data-placement="top" title="Cancel" style={{fontSize: '1.3em', marginRight: '10px', color: 'red'}} /> 
                        </a>
                        <form action="/orders/<%= order._id %>?_method=DELETE" method="POST" style={{display: 'inline-block'}}>
                          <button type="submit" className="btn btn-primary mb-2">Delete</button>
                        </form> 
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
    }
}

export default Orders