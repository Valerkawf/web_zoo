import { Container, Row, Col, Card } from "react-bootstrap";
import elephant from "./elephant.jpg";
import lion from "./lion.jpg";
import blackbear from "./blackbear.jpg";
import tiger from "./tiger.jpg";
import zebra from "./zebra.png";
import anaconda from "./anaconda.jpg";
import monkey from "./monkey.jpg";
import tarantula from "./tarantula.jpg";
import lori from "./lori.jpg";
import styled from "styled-components";
import CustomCard from "./CustomCard";

const StyledCard = styled(Card)`
  height: 300px;
  margin: 15px 0;
  border: 2px solid pink;
  border-radius: 10px 10px 10px 10px;
  &:hover{
    transition-duration: 0.2s;
    color:white;
    background-color: #e59a9a;
`;

const StyledImg = styled(Card.Img)`
  height: 150px;
  width: 150px;
  margin-left: calc(50% - 75px);
`;

const AnimalCards = () => {
  const animals = [
    {
      name: "Elephant",
      image: elephant,
    },
    {
      name: "Lion",
      image: lion,
    },
    {
      name: "Blackbear",
      image: blackbear,
    },
    {
      name: "Tiger",
      image: tiger,
    },
    {
      name: "Zebra",
      image: zebra,
    },
    {
      name: "Anaconda",
      image: anaconda,
    },
    {
      name: "Monkey",
      image: monkey,
    },
    {
      name: "Tarantula",
      image: tarantula,
    },
    {
      name: "Lori",
      image: lori,
    },
  ];

  let animalsContainer = [];

  animals.forEach((animal) => {
    animalsContainer.push(
      <Col className="col-lg-3">
        <StyledCard>
          <StyledImg vaiant="top" src={animal.image} />
          <Card.Body>
            <Card.Title>{animal.name}</Card.Title>
          </Card.Body>
        </StyledCard>
     <CustomCard title={animal.image} animalImage={animal.image}/>
      </Col>
    );
  });
  return (
    <Container>
      <Row>
       {animalsContainer}
      </Row>
    </Container>
  );
};

export default AnimalCards;
