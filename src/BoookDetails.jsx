import React from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function BoookDetails() {
    const {asin} = useParams();


  return (
    <div>
       <p><h1>Book Title</h1></p>

       <p><h1> NON HO AVUTO TEMPO DI CREARE IL CONTEXT PER PASSARE L'INFO DEI LIBRI, e di fare fix di tante cose</h1></p>
       {/* <h1>{`This is book ${book.title}`}</h1> */}

       <Link to="/"><Button variant='outline-dark'> Home</Button></Link> 
    </div>
  )
}
