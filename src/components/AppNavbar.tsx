import { Navbar, Container, Nav } from "react-bootstrap"

export const AppNavbar = () => {
  return(
    <Navbar bg='light' expand='lg' collapseOnSelect>
      <Container>
        <Navbar.Brand>Delmer López</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-nav-bar-nav' />
        <Navbar.Collapse id="responsive-nav-bar-nav">
          <Nav>
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link>Publications</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}