import styles from "./Netflix.module.css";
export const SeriesCard = (props) => {
  const { id, img_url, name, rating, description, cast, genre, watch_url } =
    props.curElem;

  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "var(--bg-color)"
  };
  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average

  return (
    <li key={props} className={styles.card}>
      <div>
        <img src={img_url} width="40%" height="40%" alt="" />
      </div>
      <div className={styles["card-content"]}>
        <h2>Name: {name}</h2>
        <h3>
          Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
        </h3>
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
          <button style={btn_style}>Watch Now</button>
        </a>
        {/* Ternary Condition Using
        <button> {age >= 18 ? "Watch Now" : "Not Available"}</button> */}
      </div>
    </li>
  );
};
