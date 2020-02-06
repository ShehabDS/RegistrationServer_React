import React from "react"

class Admin extends React.Component{
    render(){
        return(
            <div>
                <p><h1>DASHboard</h1></p>
  

 <i className="fas fa-tachometer-alt"></i> 
  
  <div className="panel panel-primary container" id="result_panel">
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