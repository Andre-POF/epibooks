import Data from './books/horror.json';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleBook from './SingleBook';
// import Input from 'react-bootstrap';


export default function DisplayRecord () {
    return (
    <div className='row cols-3'>
        <Container>
            <Row xs={2} md={3} lg={5}>
           {
            Data.map((book) => { 
                return (
                  
                    
                    <div className='g-4'>
                        <Col className='h-100'>
                            <SingleBook book={book}/>
                        </Col>                    
                    </div>
                    
                )
                })
            }
                </Row>
            </Container>
        </div>
    );
}
