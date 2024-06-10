import './Styles/Card.css'
function Card({value,name,rating,desc}){
    return(
        <div className="card">
        <img className='img' src={`https://image.tmdb.org/t/p/w500/${value}`} alt="" /><h2>{name}</h2>
        <div className="rating">{rating}</div><div class="card-text">
    
    {desc}
  </div>
        </div>
    )
}
export default Card;