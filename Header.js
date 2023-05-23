import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({name,title}){
    return(
        <div className="header">

        <div className="text-center">
 
         <div style={{background:"pink" ,height:300,padding:50}}>
         <CardBody>
       <img src="Images/images.png" alt="Laptop" height="150"  width="150"/>
                <h1 className="text-center my-4">Hi-TECH</h1>
                </CardBody>
                </div>
        </div>
        </div>
    );
}

export default Header;
