import React from "react"
import AdminHeader from "./AdminHeader"


class Users extends React.Component{
    render(){
        return(
            <div>
                <AdminHeader/>
        <div className="container-fluid">
          <p /><h2><b>Clients</b></h2><p />
          <div className="bd-example">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">User name</th>
                  <th scope="col">First name</th>
                  <th scope="col">Last name</th>
                  <th scope="col">email</th>
                  <th scope="col">actions</th>
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
                    <a href="/users/<%=user._id%>/edit" style={{textDecoration: 'none'}}>
                      <i className="fas fa-edit" data-toggle="tooltip" data-placement="top" title="Edit" style={{fontSize: '1.3em', marginRight: '10px', color: '#5a5a5a'}} /> 
                    </a>
                    <a href="/users/<%=user._id%>" style={{textDecoration: 'none'}}>
                      <i className="fas fa-list-alt" data-toggle="tooltip" data-placement="top" title="Details" style={{fontSize: '1.3em', marginRight: '10px', color: '#5a5a5a'}} />
                    </a>  
                    <form action="/users/<%= user._id %>?_method=DELETE" method="POST" style={{display: 'inline-block'}}>
                      <i className="fas fa-trash-alt" data-toggle="tooltip" data-placement="top" title="Delete" style={{fontSize: '1.3em', marginRight: '10px', color: '#5a5a5a', cursor: 'pointer'}} onclick="nextElementSibling.click()" />
                      <button style={{display: 'none'}} type="submit" className="btn btn-primary mb-2">Delete</button>
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


export default Users