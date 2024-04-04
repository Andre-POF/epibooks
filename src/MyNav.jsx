import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

export default function MyNav(props) {
    const{searchedBook,setSearchedBook}=props;

    return ( 
        
        <Navbar className='d-flex align-items-center' expand="lg" bg="secondary-subtle" >
            <Container>
                <Navbar.Brand href="#home" className='text-danger'>Epibooks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Item className='mx-2 d-flex align-items-center'> 
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className='mx-2 d-flex align-items-center'>
                    <Nav.Link eventKey="link-1">About</Nav.Link>
                </Nav.Item>
                <Nav.Item className='mx-2 d-flex align-items-center'>
                    <Nav.Link eventKey="link-2">Browse</Nav.Link>
                </Nav.Item>
                <Nav.Item className='ms-auto'>
                <Form>
                <Form.Group className='my-3'>
                    <Form.Label>Search for your book!</Form.Label>
                    <Form.Control
                    size="sm" type="text" placeholder="Book title..."
                    style={{width:"450px"}}
                    value = {searchedBook}
                    onChange = {(e) => setSearchedBook(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                </Form>
                </Nav.Item>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}