import React from "react"
import AdminHeader from "./AdminHeader"

class ShowPlugin extends React.Component{
    render(){
        return(
            <div>
                <AdminHeader />
        <div className="container-fluid">
          <section>
            <p /><h1><b /></h1><p />
            <p>Description: 
            </p><ul>
              <li>Version: </li>
              <li>Owner: </li>
              <li>Owner email: </li>
            </ul>
            <p />
          </section>
          <br /><h2><b>Plugin Performance</b></h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">resolution</th>
                <th scope="col">framePerSec</th>
                <th scope="col">cpuVirtualCores</th>
                <th scope="col">pluginMemory</th>
                <th scope="col">gpuModel</th>
                <th scope="col">gpuUtilization</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" />
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-primary" style={{paddingRight: '8px'}} onclick="goBack()">Back</button>
        </div>
      </div>
        )
    }
}


export default ShowPlugin