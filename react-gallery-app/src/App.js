import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate, Link } from 'react-router-dom';
import axios from "axios";
import apiKey from "./config";
import PhotoContainer from './components/PhotoContainer';
import SearchForm from './components/SearchForm';
// import MainNav from './components/MainNav';


function App() {

  //set state for photos 
  const [photos, setPhotos] = useState([]);
  const [searchText, setSearchText] = useState('');

  // useEffect fetches computer photos on page load
useEffect(() => {
  fetchPhotos('Basketball');

}, []);
  
  // use axios to make call for 24 pictures
  const fetchPhotos = (query) => {
    axios
      .get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then((res) => {
        console.log(res.data.photos.photo);
        setPhotos(res.data.photos.photo);
        setSearchText(query);
      })
      .catch((err) => {console.log(err)});
  }

 
  return (
    <BrowserRouter>
      
      <div>
        <SearchForm />
        <nav className="main-nav">
          <ul>
            <li>
            <Link to='/basketball' onclick={() => fetchPhotos('Basketball')}>Basketball</Link></li>
            <li>
              <Link to='/Hockey' onclick={() => fetchPhotos('Hockey')}>Hockey</Link></li>
            <li>
              <Link to='/Baseball' onclick={() => fetchPhotos('Baseball')}>Baseball</Link></li>
          </ul>
        </nav>
        
      <Routes>
      
        <Route exact path='/' element={ <Navigate to='/Basketball' />} />
        
        <Route path='/Basketball' element={<PhotoContainer data={photos} searchText={'Basketball'} /> } />
        
        <Route path='/Hockey' element={<PhotoContainer data={photos} searchText={'Hockey'} /> } />
        
        <Route path='/Baseball' element={<PhotoContainer data={photos} searchText={'Baseball'} /> } />
        
        <Route path='/search/:searchText' element={<PhotoContainer data={photos} searchText={searchText} /> } />
        
      </Routes>

      </div>
    
    </BrowserRouter>
  )
}

export default App;
