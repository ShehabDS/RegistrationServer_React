import React from "react";
import {Link} from "react-router-dom";
import {ShoppingCartOutlined ,FormOutlined ,UnorderedListOutlined,DeleteOutlined} from  '@ant-design/icons';
import 'antd/dist/antd.css';
import {Tooltip} from "antd";
import AdminHeader from "./Partials/AdminHeader";


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

                    <div style={{marginRight:"15px"}}>
                         <Tooltip  trigger={['hover',]} title="Edit" placement="top" >
                           <Link to="/EditProduct" >
                             <FormOutlined title="Edit" style={{fontSize:"1.5em",color:"#5a5a5a"}}/>                             
                           </Link>    
                         </Tooltip>
                    </div>
                       
                        <div style={{marginRight:"15px"}}>
                          <Tooltip  trigger={['hover',]} title="Order" placement="top" >
                             <Link to="/NewOrder" >
                               <ShoppingCartOutlined style={{fontSize:"1.5em",color:"#5a5a5a"}} />                            
                             </Link>
                           </Tooltip>
                        </div>
                         
                          <div style={{marginRight:"15px"}}>
                            <Tooltip  trigger={['hover',]} title="Details" placement="top" >
                              <Link to="/ShowProduct">
                                <UnorderedListOutlined title="Details" style={{fontSize:"1.5em",color:"#5a5a5a"}} />
                              </Link>
                            </Tooltip>
                          </div>
                         
                          <div style={{marginRight:"15px"}}>
                            <Tooltip  trigger={['hover',]} title="Delete" placement="top" >
                              <form action="/products/<%= product._id %>?_method=DELETE" method="POST" style={{display: 'inline-block'}}>
                                <DeleteOutlined style={{fontSize:"1.5em",color:"#5a5a5a"}} >
                                  <button type="submit" className="btn btn-primary mb-1" style={{display: 'none', marginRight: '5px'}}>Delete</button>
                                </DeleteOutlined>
                              </form>
                            </Tooltip>
                          </div>
                          
                          
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