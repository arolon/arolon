import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Contenido() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6}>
          <p>Column 1 content</p>
        </Col>
        <Col xs={12} md={6}>
          <p>Column 2 content</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Contenido;