import './App.css';
import Navigation from './MyNav.jsx';
import Footer from './MyFooter.jsx';
import AdditionalContentExample from './Welcome.jsx';
import DisplayRecord from './AllTheBooks.jsx';


function App() {


  return (
    <div className="App">
      <Navigation/>
      <DisplayRecord/>
      <AdditionalContentExample/>
      <Footer/>
    </div>
  );
}

export default App;
