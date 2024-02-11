
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">TM</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
             >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/all-task">Task</Nav.Link>
            <Nav.Link href="#action2">Payment History</Nav.Link>

          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavComponent