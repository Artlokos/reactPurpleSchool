import './CardItem.css';

function CardItem({ name, img, rating }) {
  return (
    <>
      <div className="card">
        <div className="film-rating">
          <img src="/star.svg" alt="" />
          <p>{rating}</p>
        </div>

        <img src={img} alt="BlackWidow" />

        <p>{name}</p>

        <div className="favourite">
          <img src="/like.svg" alt="" />
          <a href="#">В избранное</a>
        </div>
      </div>
    </>
  );
}
export default CardItem;
