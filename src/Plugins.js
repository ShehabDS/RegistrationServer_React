import React from "react"
import AdminHeader from "./AdminHeader"
import Admin from "./Admin"

class Plugins extends React.Component{
    render(){
        return(
            <div>
                <AdminHeader />
        <div className="container-fluid">
          <p><b /></p><h2><b>Plugins</b></h2><p />
          <div className="bd-example">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Plugin</th>
                  <th scope="col">Description</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" />
                  <td />
                  <td />
                  <td>
                    <a href="/plugins/<%=plugin._id%>/edit" style={{textDecoration: 'none'}}>
                      <i className="fas fa-edit" data-toggle="tooltip" data-placement="top" title="Edit" style={{marginRight: '10px', fontSize: '1.3em', color: '#5a5a5a'}} />
                    </a>
                    <a href="/plugins/<%=plugin._id%>" style={{textDecoration: 'none'}}>
                      <i className="fas fa-list-alt" data-toggle="tooltip" data-placement="top" title="Details" style={{marginRight: '10px', fontSize: '1.3em', color: '#5a5a5a'}} />
                    </a>  
                    <form action="/plugins/<%= plugin._id %>?_method=DELETE" method="POST" style={{display: 'inline-block'}}>
                      <i className="fas fa-trash-alt" data-toggle="tooltip" data-placement="top" title="Delete" style={{marginRight: '10px', fontSize: '1.3em', color: '#5a5a5a', cursor: 'pointer'}} onclick="nextElementSibling.nextElementSibling.click()" />
                      <button type="submit" className="btn btn-primary mb-2" id="DeleteButton" style={{display: 'none'}} />
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
            <a href="/newPlugin" style={{textDecoration: 'none'}}>
              <button style={{marginBottom: '20px'}} className="btn btn-lg btn-primary btn-block">New plugin</button>
            </a>
          </div>
        </div>
      </div>
        )
    }
}

export default Plugins