import { Card, CardImg, Modal, Button } from "react-bootstrap";
import styled from "styled-components";
import React, { useState } from "react";

const StyledCard = styled(Card)`
  width: 250px;
  border-radius: 10px 10px 100px 10px;
  margin: 15px;
  &:hover {
    transition-duration: 0.2s;
    color: white;
    background-color: #e59a9a;
  }
`;
const StyledBody = styled(Card.Body)`
  font-family: Arial, Helvetica, sans-serif;
`;

const StyledImage = styled(CardImg)`
  height: 240px;
`;

const CustomCard = ({ title, animalImage, modalText }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <StyledCard onClick={handleShow}>
        <StyledImage top width="10%" src={animalImage} alt="Card image cap" />
        <StyledBody>
          <div class="text-center">
            <Card.Title tag="h5">{title}</Card.Title>
          </div>
        </StyledBody>
      </StyledCard>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Animal information </Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomCard;
