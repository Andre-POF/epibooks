import Data from './books/horror.json';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';
import { useState } from 'react';

export default function AllTheBooks (props) {
    const {searchedBook} = props;
    const [chosenBook,setChosenBook] = useState("");
    return (
    <div className='row cols-3'>
        <Container>
            <Row xs={2}>
                <Col>
                <Row md={2} sm={1}>
                {
                    Data.filter((book) => {
                    if (searchedBook === '') {
                        return (book)
                    } else {return book.title.toLowerCase().includes(searchedBook.toLowerCase())}
                }) 
                .map((book, index) => { 
                    return (
                        <div className='g-4'>
                            <Col className='h-100'>
                                <SingleBook chosenBook={chosenBook}
                                setChosenBook={setChosenBook}
                                index={index} book={book}
                                />
                            </Col>                    
                        </div>
                    )})
                }
                </Row>
                </Col>
                <Row>
                    <CommentArea show={chosenBook}/>
                </Row>
            </Row>
            </Container>
        </div>
    );
}
