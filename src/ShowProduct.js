import React from "react"
import AdminHeader from "./AdminHeader"

class ShowProduct extends React.Component{
    render(){
        return(
            <div>
            <AdminHeader />
            <div className="container">
              <p /><h1 style={{textAlign: 'center'}}><strong /></h1><p /><br />
              <ul>
                <li>product unique ID: </li>
                <li>installation file path: </li>
                <li>Product version: </li>
              </ul>
              <div>
                <a href="/products/<%=foundProduct._id%>/downloadPDF">
                  <button className="btn btn-primary">download specifications</button>
                </a>
                <a href="<%=foundProduct.imageName%>" type="application/pdf" target="balnk"><button className="btn btn-primary">Show &lt;%=foundProduct.name %&gt; specifications</button> </a>
                <a href="<%=foundProduct.imageName%>" type="application/pdf" target="balnk"><button className="btn btn-primary">Show &lt;%=foundProduct.name %&gt; specifications</button> </a>
                <a href="<%=foundProduct.imageName%>" type="application/pdf" target="balnk"><button className="btn btn-primary">Show &lt;%=foundProduct.name %&gt; specifications</button> </a>
                <a href="<%=foundProduct.imageName%>" type="application/pdf" target="balnk"><button className="btn btn-primary">Show &lt;%=foundProduct.name %&gt; specifications</button> </a>
              </div>
              <h3>Product version:</h3>
              <p /><h2><strong> Product Description</strong></h2><p />
              <p />
              <div className="container">
                <div className="VideoWrapper" style={{width: '100%', marginRight: '0px', marginLeft: '0px'}}>
                  <iframe style={{width: '49.9%', height: '350px', float: 'right'}} src="https://www.youtube.com/embed/qWrAh3-gZII?rel=0" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                  </iframe>
                  <img src="/products/avidFace/images/avidFace.png" style={{width: '49.9%', height: '350px'}} />
                  <iframe style={{width: '49.9%', height: '350px', float: 'right'}} src="https://www.youtube.com/embed/2EIDF1MEnfY" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  <img src="/products/avidAuto/images/avidAuto.png" style={{width: '49.9%', height: '350px'}} />
                  <iframe style={{width: '49.9%', height: '350px', float: 'right'}} src="https://www.youtube.com/embed/NZhEsPZF7To" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  <img src="/products/avidHawk/images/avidHawk.png" style={{width: '49.9%', height: '350px'}} />
                  <iframe style={{width: '49.9%', height: '350px', float: 'right'}} src="https://www.youtube.com/embed/Z5olLTc-7hg" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  <img src="/products/avidGuard/images/AvidGuard.png" style={{width: '49.9%', height: '350px'}} />
                </div>
              </div>
              <a href="/campgrounds/new"> add new camp gorunds </a> 
              <h2> image name: </h2> 
              <img src="/images/a0a922df-8640-471a-863c-66faafb1b567.png" />
              <img src="/home/avidbeam/workspace/client-database/public/images/a0a922df-8640-471a-863c-66faafb1b567.png" /> 
              <hr />
              <p /><h2><strong> Features (plugins)</strong></h2><p />
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Plugin name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th></th>
                    <td />
                    <td />
                    <td>
                      <a href="/plugins/<%=plugin._id%>">
                        <i className="fas fa-list-alt" data-toggle="tooltip" data-placement="top" title="Details" style={{marginRight: '10px', fontSize: '1.3em', color: '#5a5a5a'}} />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <a href="/products/<%=foundProduct._id%>/order">
                <button className="btn btn-primary mb-2">Order </button>
              </a>
              <button className="btn btn-primary mb-2" onclick="goBack()">Back</button>
            </div>
          </div>
        )
    }
}


export default ShowProduct