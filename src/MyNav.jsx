import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {  
    return ( 
        <Navbar expand="lg" bg="secondary-subtle" >
            <Container>
                <Navbar.Brand href="#home" className='text-danger'>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Browse</Nav.Link>
                </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}