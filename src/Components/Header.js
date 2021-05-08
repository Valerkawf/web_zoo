import React, {useState} from 'react'
import {
  Navbar,
  Form,
  Button,
  FormControl,
  Container,
} from "react-bootstrap";
import logo from "./logo111.png";
import styled from "styled-components";
import {
  Redirect
} from "react-router-dom";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: #adb1b8;
      &:hover {
        color: white;
    }
  }
`;

const StyledFormControl = styled(FormControl)`
width: 230px !important;
`;


const StyledNavbar = styled(Navbar)`
background-color:#181513;
  `  ;

const Header = () => {
  const [redirected, setRedirected] = useState(false);

  const redirectToDashboard = () => {
  setRedirected(true);
  }
  
  if (redirected) {
   window.location.href="/animals";
  }
  

  return (
      <Styles>
        <StyledNavbar  variant="light ">
          <Container>
            <div style={{height:"70px"}}>
            <img onClick={redirectToDashboard}
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
           <p style={{margin:"unset",color:"white"}}>Web Zoo</p>  </div>
            <Form inline > 
              <StyledFormControl
                type="text"
                placeholder="Enter the name of the animal " 
                className="mr-sm-2"
              />  
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Container>
        </StyledNavbar>
      </Styles>
  );
};

export default Header;
