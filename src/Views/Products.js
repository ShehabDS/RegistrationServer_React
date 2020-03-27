import React from "react"
import {Link} from "react-router-dom"
import AdminHeader from "./Partials/AdminHeader"


class Products extends React.Component{
    render(){
        return(
            <div>
            <AdminHeader />
            <div className="container-fluid">
              <p> </p><h2><strong> Products</strong></h2><p />
              <div className="bd-example">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Product</th>
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
                        <div className="btn-group" role="group">                           
                         <Link to="/EditProduct" >
                            <i className="fa fa-edit" data-toggle="tooltip" data-placement="top" title="Edit" style={{fontSize: '1.3em', marginRight: '15px', color: '#5a5a5a'}} />
                             </Link>                          
                          <Link to="/NewOrder" >
                            <i className="fa fa-shopping-cart" data-toggle="tooltip" data-placement="top" title="Order" style={{fontSize: '1.3em', marginRight: '15px', color: '#5a5a5a', cursor: 'pointer'}} />                                  
                          </Link>
                          <form action="/products/<%= product._id %>?_method=DELETE" method="POST" style={{display: 'inline-block'}}>
                            <i className="fa fa-trash-alt" data-toggle="tooltip" data-placement="top" title="Delete" style={{fontSize: '1.3em', marginRight: '15px', color: '#5a5a5a', cursor: 'pointer'}}>
                            <button type="submit" className="btn btn-primary mb-1" style={{display: 'none', marginRight: '5px'}}>Delete</button>
                            </i>
                          </form>
                          <Link to="/ShowProduct">
                            <i className="fa fa-list-alt" data-toggle="tooltip" data-placement="top" title="Details" style={{fontSize: '1.3em', marginRight: '15px', color: '#5a5a5a'}} />                                    
                          </Link>
                          
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a href="/Products/new" style={{textDecoration: 'none'}}>
                <button style={{marginBottom: '20px', textDecoration: 'none'}} className="btn btn-lg btn-primary btn-block">New product</button>
              </a> 
            </div>
          </div>
        )
    }
}


export default Products