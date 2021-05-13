import React from "react";
import { Jumbotron as Jumbo } from "react-bootstrap";
import banner2 from "./banner2.jpg";
import styled from "styled-components";

const Styles = styled.div`
  .jumbo {
    background: url(${banner2});
    background-size: cover;
    color: #efefef;
    height: 1400px;
    position: relative;
    z-index: 3;
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

const JumbotronAnimals = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
    </Jumbo>
  </Styles>
);

export default JumbotronAnimals;
