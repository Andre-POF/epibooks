import Alert from 'react-bootstrap/Alert';

function AdditionalContentExample() {
  return (
    <div className="container mt-3">
    <Alert variant="secondary" >
      <Alert.Heading><h1>EpiBooks! All You Can Get!</h1> </Alert.Heading>
      <p className='p-2'>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
    </div>
  );
}

export default AdditionalContentExample;