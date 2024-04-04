import './App.css';
import AllTheBooks from './AllTheBooks.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from "./NotFound.jsx";
import BoookDetails from './BoookDetails.jsx';


function App() {
  const[searchedBook, setSearchedBook] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllTheBooks searchedBook={searchedBook} setSearchedBook={setSearchedBook}/>}></Route>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/BookDetails/:asin' element={<BoookDetails></BoookDetails>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
