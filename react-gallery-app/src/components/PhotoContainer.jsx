import Photo from "./Photo";

const PhotoContainer = (props) => {
  
  let images;
  const photoList = props.data;

  if(photoList.length > 0) {    
    images = photoList.map( (photo, index) => 
      <Photo server={photo.server} secret={photo.secret} key={index} alt={props.altTag} />   
    )
  }
  
  return(
    <div className='photo-container'>
      <h2>Photos</h2>
      <ul>
        {images}
      </ul>

    </div>
  );
}

export default PhotoContainer;