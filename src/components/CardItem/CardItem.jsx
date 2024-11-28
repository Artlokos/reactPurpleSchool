import styles from "./CardItem.module.css";

function CardItem({ name, img, rating }) {
  return (
    <>
      <div className={styles["card"]}>
        <div className={styles["film-rating"]}>
          <img src="/star.svg" alt="" />
          <p>{rating}</p>
        </div>

        <img src={img} alt={name} />

        <p>{name}</p>

        <div className={styles["favourite"]}>
          <img src="/like.svg" alt="" />
          <a href="#">В избранное</a>
        </div>
      </div>
    </>
  );
}
export default CardItem;
