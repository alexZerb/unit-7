
const Photo = (props, key) => {
  return(
    <li>
        <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}_q.jpg`} key={key} alt={props.title} />
    </li> 
  )
}

export default Photo;