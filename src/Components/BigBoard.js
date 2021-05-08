import { Container, Row, Col } from "react-bootstrap";
import logo111 from "./logo111.png";

const BigBoard = () => {
    return (

        <Container style={{marginBottom: '30px'}}>
        <Row>
          
          <Col md={7}>
            <img src={logo111} alt="logo" height={400} />
          </Col>
          <Col md={5}>
            <h2>ABOUT US</h2>
            <p>
            What is a "ZOO" in your understanding? 
            Institution for keeping animals in captivity for the purpose of demonstration, preservation, reproduction and research, including research?
            Yes, but we are all the same, only much more innovative. 
            Meet our project "WEB ZOO " 
            In our project, you can get acquainted with a huge variety of the animal world, learn many interesting facts and be the most trained in the industry. 
            Interested?
            Then you are WELCOME in our wonderful world!
            </p>
          </Col>
        </Row>
      </Container>
    );
};

export default BigBoard;
