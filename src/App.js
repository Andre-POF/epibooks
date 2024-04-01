import './App.css';
import MyNav from './MyNav.jsx';
import Footer from './MyFooter.jsx';
import Welcome from './Welcome.jsx';
import AllTheBooks from './AllTheBooks.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import Data from './books/horror.json';


function App() {
  const[searchedBook, setSearchedBook] = useState("");
  return (
    <div className="App">
      <MyNav searchedBook={searchedBook} setSearchedBook={setSearchedBook}/>
      <AllTheBooks searchedBook={searchedBook}/>
      <Welcome/>
      <Footer/>
    </div>
  );
}

export default App;
