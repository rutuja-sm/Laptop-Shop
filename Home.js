import { Container,Button, Card, CardTitle, CardBody } from "reactstrap";
import React,{ useEffect} from "react";
const Home=()=>{
    useEffect(()=>{
        document.title="Home";
},[]);
    return(
        
    <div >
       
       <img src="Images/show.jpeg" alt="Laptop" height="400"  width="600"/>

     </div>
    );
};
export default Home;