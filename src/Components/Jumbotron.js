
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import banner3 from "./banner3.jpg";
import styled from "styled-components";


const Styles = styled.div`
  .jumbo {  
    background: url(${banner3}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 600px;
    position: relative;
    z-index: 3 
  }
  .overlay {
    background-color: #000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const Jumbotron = () => {

  
  return(


  <Styles>
    <Jumbo fluid className="jumbo">
      < div  className="overlay"  ></div>
      <Container >
        <h1 class="display-2"
        >WEB ZOO</h1>
        <h2 class="display-2">We are the future </h2>
        <div class="text-center">
        </div>
      </Container>
    </Jumbo>
  </Styles>
  )
};

export default Jumbotron;
