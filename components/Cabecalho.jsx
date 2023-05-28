import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Cabecalho = () => {
  return (
    <>
      <Navbar variant="dark" style={{ backgroundColor: "green" }}>
        <Container>
          <Navbar.Brand href="/">Início</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/transformacoes">Transformações</Nav.Link>
            <Nav.Link href="/viloes">Vilões</Nav.Link>
            <Nav.Link href="/desenhos">Desenhos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Cabecalho;
