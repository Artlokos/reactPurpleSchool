import './CardItem.css';

function CardItem({ name, img, rating }) {
  return (
    <>
    
      <div className="film-rating">
        <img src="/star.svg" alt="" />
        <p>{rating}</p>
      </div>

      <img src={img} alt="" />
      
      <p>{name}</p>
      
      <div className="favourite">
        <img src="/like.svg" alt="" />
        <a href="#">В избранное</a>
      </div>
    
    </>
  );
}
export default CardItem;
