import React, { useState, useEffect } from 'react';
import axios from "axios";
import apiKey from "./config";
import PhotoContainer from './components/PhotoContainer';


function App() {

  //set state for photos 
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');

  // useEffect fetches computer photos on page load
useEffect(() => {
  fetchPhotos();

}, []);
  
  // use axios to make call for 24 pictures
  const fetchPhotos = (query = 'computers') => {
    axios
      .get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then((res) => {
        console.log(res);
        setPhotos(res.data);
        setQuery(query);
      })
      .catch((err) => {console.log(err)});
  }

 
  return (
    <PhotoContainer data={photos} altTag={query} />
  )
}

export default App;
