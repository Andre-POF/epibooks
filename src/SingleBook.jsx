
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/esm/CardBody';
import CardTitle from 'react-bootstrap/esm/CardTitle';
import CardImg from 'react-bootstrap/esm/CardImg';


export default function SingleBook({book}) {
    return (
    <Card className='h-100 p-3'>
        <CardTitle className='p-3 '>{book.title}</CardTitle>
        <CardBody className='d-flex flex-column justify-content-center align-items-center'>
            <CardImg className='img-fluid' src = {book.img}/>
            <div className="bottom mt-auto">
                <p className='p-2 m-0'> {book.price} € </p>
                <p className='p-2 m-0'>Genre: {book.category} </p>
            </div>
        </CardBody>
    </Card>              
    )
}