import React from "react"

class RegisterHeader extends React.Component{

     getDate() {
        var today = new Date();
        document.getElementById("date").innerHTML = today.toGMTString();
      }

       goBack() {
        window.history.back();
      }      

    render(){
        return(
            <div>
                <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
      integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
      crossorigin="anonymous" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="/home/avidbeam/webdevbootcamp/ProductRegisteration/fontawesome-free-5.10.2-web/css/all.css"
      rel="stylesheet"
    />
    <script
      src="https://code.jquery.com/jquery-3.4.1.js"
      integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>
   
   
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta charset="utf-8" />
    

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>AvidBeam Technologies</title>
  </head>
  <body>
    <nav className="navbar navbar-expand-md navbar-dark bg-primary" >
      <div className="container-fluid" style={{width: "100%;"}}>
        <div className="navbar-header" style={{width: "65%;"}}>
          <p style={{color: "aliceblue" , marginTop: "20px" , fontSize: "40px"}}>
            <img
            src="/icons/AvidBeam-logo-white.png"
            style={{width: "280px" , marginBottom:"20px"}}
            alt="AvidBeam"
          /> <b>Registration Form</b></p>
         
        </div>

        <div className="navbar-collapse collapse">
          <ul className="navbar-nav ml-auto">
            <li><a style={{color: "aliceblue"}} className="nav-link" href="/">Sign in</a></li>
            <li>
              <a
                style={{color: "aliceblue"}}
                className="nav-link"
                href="#"
                id="date"
              ></a>
            </li>
            <li>
              <a style={{color: "aliceblue"}} className="nav-link" href="#"
                >
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

   
    
  </body>

            </div>
        )
    }
}

export default RegisterHeader