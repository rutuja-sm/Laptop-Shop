import { CardBody ,Card,CardTitle, Button, Container} from "reactstrap"

const Contact=() => {

    return(
        <div className="contact">

            <Card className="text-center" border="success" >
        <CardBody>
            <CardTitle>EmailId : matsagarrutuja@gmail.com</CardTitle>
            <CardTitle>Mobile No:7020637008</CardTitle>
            <Container className="text-center">
                <Button color="primary" outline>Thank You</Button>
            </Container>
            </CardBody>
            </Card>
        </div>

    )

};
export default Contact;