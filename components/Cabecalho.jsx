import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Cabecalho = () => {
  return (
    <>
      <Navbar variant="dark" style={{ backgroundColor: "green" }}>
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="https://i.pinimg.com/originals/59/41/73/594173036931a34e7952732d76b000c3.png"
              style={{ height: 40, width: 40 }}
            />{" "}
            {/* <Image
              src="https://i.pinimg.com/originals/ce/ff/c8/ceffc80d7c8615086e6e56fd952862b2.png"
              style={{ height: 40, width: 40 }}
            />{" "} */}
            <strong style={{ fontFamily: "monospace" }}>BenDex</strong>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/omnitrix">Omnitrix</Nav.Link>
            <Nav.Link href="/transformacoes">Transformações</Nav.Link>
            <Nav.Link href="/predadores">Predadores</Nav.Link>
            <Nav.Link href="/viloes">Vilões</Nav.Link>
            <Nav.Link href="/desenhos">Desenhos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Cabecalho;
