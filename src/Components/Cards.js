import { Container, Row, Col, Card} from "react-bootstrap";
import vk from "./vk.png";
import Inst from "./Inst.png";
import telega from "./telega.png";
import styled from "styled-components";

const StyledCard = styled(Card)`
  height:300px;
  margin:15px 0;
  `  ;

  const StyledImg = styled(Card.Img)`
  height:150px;
  width:150px;
  margin-left:calc(50% - 75px);
  `;

const Cards = () => {
  return (
    <Container >
      <Row>
        <Col className="col-md-4" >
          <StyledCard >
            <StyledImg vaiant="top" src={vk} />
            <Card.Body>
              <Card.Title>VKONTAKTE</Card.Title>
              <a href="https://vk.com/valerkawf" class="btn btn-primary" role="button" aria-disabled="true" target="_blank  ">Learn more</a>
            </Card.Body>
          </StyledCard>
        </Col>
        <Col className="col-md-4">
          <StyledCard >
            <StyledImg vaiant="top" src={Inst} />
            <Card.Body>
              <Card.Title>INSTAGRAM</Card.Title>
              <a href="https://www.instagram.com/valerij.ilyuk/" class="btn btn-primary" role="button" aria-disabled="true" target="_blank  ">Learn more</a>
            </Card.Body>
          </StyledCard>
        </Col>
        <Col className="col-md-4">
          <StyledCard >
            <StyledImg vaiant="top" src={telega} />
            <Card.Body>
              <Card.Title>TELEGRAM</Card.Title>
              <a href="https://t.me/valerkawf" class="btn btn-primary" role="button" aria-disabled="true" target="_blank  ">Learn more</a>
            </Card.Body>
          </StyledCard>
        </Col>
      </Row>
    </Container>
  );
};

export default Cards;
