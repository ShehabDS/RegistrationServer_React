import React from "react"
import AdminHeader from "./Partials/AdminHeader"


class ShowOrder extends React.Component{
    render(){
        return(
            <div>
                <AdminHeader />
        <br />
        <div className="container-fluid">
          <p /><h2><b>Order details</b></h2><p />
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">order number</th>
                <th scope="col">orderStatus</th>
                <th scope="col">order Submission Date</th>
                <th scope="col">order Deployment Date</th>
                <th scope="col">License Duration</th>
                <th scope="col">product name</th>
                <th scope="col">product version</th>
                <th scope="col">orderUsername</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className="container-fluid">
          <p /><h2><b>Product information</b></h2><p />
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Feature</th>
                <th scope="col">Version</th>
                <th scope="col">Number of streams</th>
                <th scope="col">CPU cores</th>
                <th scope="col">Memory (Gbytes)</th>
                <th scope="col">GPU model</th>
                <th scope="col">GPU utlization</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
              <tr>
                <th scope="row">Total</th>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className="container-fluid">
          <p /><h2><b>Hardware Requirements</b></h2><p />
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Item</th>
                <th scope="col">Model</th>
                <th scope="col">Count</th>
                <th scope="col">Total CPU cores</th>
                <th scope="col">Memory (Gbytes)</th>
                <th scope="col">Total GPUs</th>
                <th scope="col">GPU model</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Master machine</td>
                <td>8 cores virtual</td>
                <td />
                <td />
                <td />
                <td />
                <td>N/A</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Slave machines</td>
                <td>16 cores virtual</td>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className="container-fluid">
          <p /><h2><b>License information</b></h2><p />
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">orderProductKey</th>
                <th scope="col">License start date</th>
                <th scope="col">LicenseDuration</th>
                <th scope="col">orderExpirydate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" />
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
          <button className="btn btn-primary mb-2" onclick="goBack()">Back</button>
        </div>
      </div>
        )
    }
}

export default ShowOrder