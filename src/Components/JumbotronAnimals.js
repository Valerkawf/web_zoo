import React from "react";
import { Jumbotron as Jumbo} from "react-bootstrap";
import banner2 from "./banner2.jpg";
import styled from "styled-components";

const Styles = styled.div`
  .jumbo {  
    background: url(${banner2}) no-repeat  bottom;
    background-size: cover;
    color: #efefef;
    height: 1500px;
    position: relative;
    z-index: 3;
  }

`;

const JumbotronAnimals = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
    </Jumbo>
  </Styles>
);

export default JumbotronAnimals;
