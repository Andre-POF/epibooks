import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NotFound () {

  return (
    <>
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
        <Alert variant='danger'>
            <h1>Page not Found!</h1>
        </Alert>
        <Link to="/"><Button variant='outline-dark'> Home</Button></Link> 
    </div>
    </>
  )
}
