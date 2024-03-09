import Card from 'react-bootstrap/Card';
import Data from './books/horror.json';
import CardBody from 'react-bootstrap/esm/CardBody';
import CardTitle from 'react-bootstrap/esm/CardTitle';
import CardImg from 'react-bootstrap/esm/CardImg';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function DisplayRecord () {
    return (
    <div className='row cols-3'>
        <Container>
            <Row xs={2} md={3} lg={4}>
           {
            Data.map( (book) => { 
                return (
                    <div className='g-4 d-flex align-items-center'>
                        <Col className='h-100'>
                        <Card className='h-100 p-5'>
                            <CardTitle className='p-3'>{book.title}</CardTitle>
                            <CardBody>
                                <CardImg className='img-fluid' src = {book.img}/>
                                <p className='p-2 m-0'> {book.price} € </p>
                                <p className='p-2 m-0'>Genre: {book.category} </p>
                            </CardBody>
                        </Card>
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
