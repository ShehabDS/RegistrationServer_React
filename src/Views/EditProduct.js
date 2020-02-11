import React from "react"
import AdminHeader from "./Partials/AdminHeader"

class EditProduct extends React.Component{
    render(){
        return(
            <div>
                <AdminHeader />
                 <div className="container">
        <p /><h1 style={{textAlign: 'center'}}><b>Edit </b></h1><p /><br />
        <form method="post" action="/products/<%=foundProduct._id %>?_method=PUT" encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1" style={{fontWeight: 'bolder'}}>Product Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" name="product[name]" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1" style={{fontWeight: 'bolder'}}>Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" name="product[description]" rows={3} defaultValue={" <%=foundProduct.description %> "} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1" style={{fontWeight: 'bolder'}}>Product version</label>          
            <input type="text" className="form-control" id="exampleFormControlSelect1" name="product[version]" />
          </div>
          <div className="form-group">
            <div className="container">
              <br /><h2 style={{fontWeight: 'bolder'}}>Features (plugins)</h2>
              <input type="button" defaultValue="Add plugin (not currently supported)" onclick="addRow('productPlugins')" />
              <input type="button" defaultValue="Delete plugin (not currently supported)" onclick="deleteRow('productPlugins')" />					                  
              <table className="table table-hover" id="productPlugins">
                <thead>
                  <tr>
                    <th scope="col" />
                    <th scope="col">#</th>
                    <th scope="col">Plugin name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody><tr>
                    <td><input type="checkbox" name="pluginsList" /></td>
                    <th scope="row"></th>
                    <td></td>
                    <td> </td>
                    <td>
                      <a href="/plugins/<%=plugin._id%>">
                        <button className="btn btn-primary mb-2">details</button> 
                      </a>
                    </td>
                  </tr></tbody>
              </table>
            </div>        
          </div>
          <div className="form-group">
            <button type="button" id="loadImageFile" value="load product image" className="btn btn-primary" onclick="document.getElementById('fileDialog').click();">Upload an image</button>  
            <input id="fileDialog" type="file" accept="image/*" style={{display: 'none'}} onchange="loadFile(event)" name="product[imageName]" />
          </div>             
          <button type="submit" name="upload" className="btn btn-primary">submit</button>
          <img id="output" src="" style={{width: '120px'}} alt="input image" />
        </form>
      </div>
            </div>
        )
    }
}


export default EditProduct