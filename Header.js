import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({name,title}){
    return(
        
                     <div style={{background:"pink" ,height:250,padding:60}}>

                <CardBody>
                <h1 className="text-center my-5">Welcome To Laptop Shop</h1>
                </CardBody>
            
        </div>
    );
}

export default Header;