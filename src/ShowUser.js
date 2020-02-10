import React from "react"
import AdminHeader from "./AdminHeader"


class ShowUser extends React.Component{
    render(){
        return(
            <div>
            <AdminHeader />
            <div className="container">
              <div className="row">
                <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-8">
                  <div className="well details">
                    <div className="col-sm-12">
                      <div className="col-xs-12 col-sm-8">
                        <p><strong>First name: </strong></p>
                        <p><strong>Last name: </strong></p>
                        <p><strong>Login name: </strong></p>
                        <p><strong>email: </strong></p>
                        <p><strong>phone Number: </strong></p>
                        <p><strong>Role: </strong></p>
                        <p>
                          <strong>account creation date: </strong>
                        </p>
                        <p><strong>last active date: </strong></p>
                        <p><strong>Address 1: </strong></p>
                        <p><strong>Address 2: </strong></p>
                        <p>
                          <strong>Address 3: </strong>city: , State:
                          , zip Code: 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-primary mb-2" onclick="goBack()">Back</button>
          </div>
        )
    }
}


export default ShowUser