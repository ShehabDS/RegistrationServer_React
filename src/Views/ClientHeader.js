import React from "react";

class ClientHeader extends React.Component{
    render(){
        return(
            <div>
                <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
                integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
                crossorigin="anonymous" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/home/avidbeam/webdevbootcamp/ProductRegisteration/fontawesome-free-5.10.2-web/css/all.css" rel="stylesheet" />
        <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
   
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
   <meta charset="utf-8" />

   <title>AvidBeam Technologies</title>


</head>
<body>

                <nav className="navbar navbar-light" style={{backgroundColor:"#007bff"}}>
                <div className="container-fluid" style={{display: "inline"}}>
                <div className="navbar-header">
                <h1 style={{color: "aliceblue"}}><strong><img src="/icons/AvidBeam-logo-white.png" alt="AvidBeam" style={{width: "210px" , paddingBottom: "10px"}} /> Product Registration Form</strong></h1>
                <b><a className="navbar-brand" href="/" style={{color: "aliceblue"}}>AvidBeam</a></b>
                <b><a className="navbar-brand" href="/productLog" style={{color: "aliceblue"}}>Orders</a></b>
                <b><a className="navbar-brand" href="/clientLog" style={{color: "aliceblue"}}>Account History</a></b>
                <b><a className="navbar-brand" href="/orderLog" style={{color: "aliceblue"}}>Inbox</a></b>
                </div>
                        
                <div className="navbar-collapse collapse">                
                        <ul className="navbar-nav ml-auto">                                
                                <li><a className="nav-link" href="">Log Out</a></li>
                        </ul>
                </div>
        </div>  
            </nav>    
            </body>
            </div>

        )
    }
}

export default ClientHeader