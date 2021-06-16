import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="copyright" id="white" className="text-center py-3">
            Copyright &copy; MyBuyTech
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
