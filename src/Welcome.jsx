import Alert from 'react-bootstrap/Alert';

function Welcome() {
  return (
    <div className="container mt-3">
    <Alert variant="secondary" >
      <Alert.Heading><h1>EpiBooks! Horror stories for all tastes! </h1> </Alert.Heading>
      <p className='p-2'>
        Horror books have an unparalleled ability to captivate readers with
        their spine-chilling narratives, invoking a sense of fear, suspense,
        and intrigue. From classic tales of supernatural entities and haunted 
        houses to modern psychological thrillers, the genre encompasses a wide
        range of themes and motifs that delve into the darkest corners of human
        imagination.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use your immagination.
      </p>
    </Alert>
    </div>
  );
}

export default Welcome;