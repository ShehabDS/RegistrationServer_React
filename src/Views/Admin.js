import React from "react"
import AdminHeader from "./Partials/AdminHeader"

class Admin extends React.Component{
    render(){
        return(
            <div>
                <AdminHeader />
  

 <i className="fas fa-tachometer-alt"></i> 
  
  <div className="panel panel-primary container-fluid" id="result_panel">
  <p><h1><b>DASHboard</b></h1></p>

      <div className="panel-heading"><h3 className="panel-title">Highlights</h3>
      </div>
      <div className="panel-body">
          <ul className="list-group">
              <li className="list-group-item"><strong>Registered plugins </strong></li>
              <li className="list-group-item"><strong>Registered products</strong></li>
              <li className="list-group-item"><strong>Registered clients</strong></li>
              <li className="list-group-item"><strong>Placed orders</strong></li>
          </ul>
      </div>
  </div>
  
            </div>
        )
    }
}

export default Admin