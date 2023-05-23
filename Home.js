import { Container,Button, Card, CardTitle, CardBody } from "reactstrap";
import React,{ useEffect} from "react";
const Home=()=>{
    useEffect(()=>{
        document.title="Home";
},[]);
    return(
        
    <div >
       
       <img src="Images/show.jpeg" alt="Laptop" height="400"  width="600"/>
       <h1 className="text-center my-12"></h1>
       <Button color="primary"   type="submit" href="/add-product" outline>Start</Button>

     </div>
    );
};
export default Home;
