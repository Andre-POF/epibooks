
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/esm/CardBody';
import CardImg from 'react-bootstrap/esm/CardImg';
import { useState } from 'react';

export default function SingleBook({book,index,setChosenBook}) {
  const[selected, setSelected] = useState(null); 
  
    return (
      <>
    <Card className='h-100 p-3 bg-secondary-subtle' >
        <div className='p-3 fw-bold text text-center'>{book.title}</div>
        <CardBody className='d-flex flex-column justify-content-center align-items-center'>
          <a
          type = "button"
          onClick={()=> {
            setChosenBook(book.asin);
            setSelected(!selected)}}>
            <CardImg 
            className='img-fluid' 
            src = {book.img}
            style={selected ? {border: '3px solid rgba(220, 53, 69, 1)'} : {}}/>
          </a>
            <div className="bottom mt-auto">
                <p className='p-2 m-0'> {book.price} € </p>
                <p className='p-2 m-0'>Genre: {book.category} </p>
            </div>
        </CardBody>
    </Card>              
        </>
    )
}