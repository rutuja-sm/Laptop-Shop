import React from "react";
import {ListGroup,ListGroupItem} from 'reactstrap';
const Menus=()=>{
    return(
        
        <ListGroup>
          <ListGroupItem tag="a" href="/">Home</ListGroupItem>
            <ListGroupItem tag="a" href="/add-product">Add Product</ListGroupItem>
            <ListGroupItem tag="a" href="/view-product">View Product</ListGroupItem>
            <ListGroupItem tag="a" href="/update-product">Update Product</ListGroupItem>
            <ListGroupItem tag="a" href="/contact-us">Contact</ListGroupItem>
           

        </ListGroup>
    );
    
}
export default Menus;