import React,{Fragment,useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const AddProduct=()=>{
    useEffect(()=>{
        document.title="Add Product";
},[]);

    const [product,setproduct]=useState({});

    //form handler function
    const handleForm=(e)=>{
        console.log(product);
        postDatatoServer(product);
        e.preventDefault();

    }
//creating function to post data on server
const postDatatoServer=(data)=>{
    axios.post(`${base_url}/product`,data).then(
        (response)=>{
            console.log(response);
            console.log("success");
            toast.success("Product added successfully",{position:"bottom-center"});
        },
        (error)=>{
            console.log(error);
            console.log("error");
            toast.error("Something went wrong ",{position:"bottom-center"});
        }
    );
};


    return (
        <Fragment>
        <h1 className="text-center my-6">Fill Product Details</h1>
        <Form onSubmit={handleForm}>

            <FormGroup>
                <label for="ProductId">Product Id</label>
                <Input
                        Type="text"
                        placeholder="Enter ProductID here"
                        name="ProductId"
                        Id="ProductId"
                        onChange={(e)=>{
                            setproduct({...product,id:e.target.value});
                        }}
                />
            </FormGroup>
                
                <FormGroup>
                <label for="description">Product Description</label>
                <Input
                        Type="textarea"
                        placeholder="Enter  description here "
                        Id="description"
                        style={{height:150}}
                        onChange={(e)=>{
                            setproduct({...product,description:e.target.value});
                        }}
                />
                 </FormGroup>

                  <FormGroup>
                <label for="model">Product Model</label>
                <Input
                        Type="text"
                        placeholder="Enter model here "
                        name="model"
                        Id="model"
                        onChange={(e)=>{
                            setproduct({...product,model:e.target.value});
                        }}
                />
                 </FormGroup>

                 <FormGroup>
                <label for="Product Name">Product Name</label>
                <Input
                        Type="text"
                        placeholder="Enter Product Name here"
                        name="pname"
                        Id="pname"
                        onChange={(e)=>{
                            setproduct({...product,pname:e.target.value});
                        }}
                />
                </FormGroup>

                 <FormGroup>
                <label for="price">Product Price</label>
                <Input
                        Type="text"
                        placeholder="Enter  description here "
                        name="price"
                        Id="price"
                        onChange={(e)=>{
                            setproduct({...product,price:e.target.value});
                        }}
                />
          </FormGroup>


               <FormGroup>
                <label for="type">Product Type</label>
                <Input
                        Type="text"
                        placeholder="Enter type here "
                        name="type"
                        Id="type"
                        onChange={(e)=>{
                            setproduct({...product,type:e.target.value});
                        }}
                />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">Add Product</Button>{' '}
                    <Button type="reset" color="warning ml-2">  Clear   </Button>
                </Container>
            
        </Form>
        </Fragment>

    );
    
};
export default AddProduct;