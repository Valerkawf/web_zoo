import { Card, CardImg  } from "react-bootstrap";
import styled from "styled-components";


const StyledCard = styled(Card)`
  width:250px;
  border-radius:10px 10px 10px 10px;
  &:hover{
    transition-duration: 0.2s;
    color:white;
    background-color: #e59a9a;
  }
`
const StyledBody = styled(Card.Body)`
  font-family: Arial, Helvetica, sans-serif;
`

const StyledImage = styled(CardImg)`
  height:240px;
`

const customCard = ({title,animalImage}) => {
  return (
    <div>
    <StyledCard>
      <StyledImage top width="10%" src={animalImage} alt="Card image cap" />
      <StyledBody>
        <Card.Title tag="h5">{title}</Card.Title>
        <Card.Subtitle tag="h6" className="mb-2 text-muted">Zoo</Card.Subtitle>
      </StyledBody>
    </StyledCard>
  </div>
  );
};

export default customCard;
