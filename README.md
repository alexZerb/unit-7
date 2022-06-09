# unit-7
 react-gallery-app


const newSearch = ( query = 'lions') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then( res => {
      this.setState({
        photos: res.data.photos.photo,
        query: query,
    })
    console.log("FetchedData:", res.data.photos );
  }).catch(error => {
    console.log('Error fetching and parsing data', error);
  });
  }