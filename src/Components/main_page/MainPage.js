const MainPage = () => {
    return (
        <>
        <div>
        <Header />
         <Slider />
          <Container style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
            <Row>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img vaiant="top" src={tigr2} />
                  <Card.Body>
                    <Card.Title>Tigr lyalya</Card.Title>
                    <Card.Text>dfdfdfdfdddfdfdfdf</Card.Text>
                    <Button variant="primary">Learn more</Button>
                  </Card.Body>
                </Card>
              </Col>{" "}
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img vaiant="top" src={tigr2} />
                  <Card.Body>
                    <Card.Title>Tigr lyalya</Card.Title>
                    <Card.Text>dfdfdfdfdddfdfdfdf</Card.Text>
                    <Button variant="primary">Learn more</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img vaiant="top" src={tigr2} />
                  <Card.Body>
                    <Card.Title>Tigr lyalya</Card.Title>
                    <Card.Text>dfdfdfdfdddfdfdfdf</Card.Text>
                    <Button variant="primary">Learn more</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <Jumbotron />
          <Container style={{marginBottom: '30px'}}>
            <Row>
              <Col md={7}>
                <img src={tigr} height={400} />
              </Col>
              <Col md={5}>
                <h2>GRATATATATATA</h2>
                <p>
                  GFDGFDGFDGFDGDFGFDGDFGFDGD GFDGFDGFDGFDGDFGFDGDFGFDGD
                  GFDGFDGFDGFDGDFGFDGDFGFDGD GFDGFDGFDGFDGDFGFDGDFGFDGD
                  GFDGFDGFDGFDGDFGFDGDFGFDGD GFDGFDGFDGFDGDFGFDGDFGFDGD
                  GFDGFDGFDGFDGDFGFDGDFGFDGD GFDGFDGFDGFDGDFGFDGDFGFDGD
                  GFDGFDGFDGFDGDFGFDGDFGFDGD GFDGFDGFDGFDGDFGFDGDFGFDGD
                  GFDGFDGFDGFDGDFGFDGDFGFDGD GFDGFDGFDGFDGDFGFDGDFGFDGD
                  GFDGFDGFDGFDGDFGFDGDFGFDGD GFDGFDGFDGFDGDFGFDGDFGFDGD
                  GFDGFDGFDGFDGDFGFDGDFGFDGD
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    )
}

export default MainPage;
