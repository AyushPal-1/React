export const SeriesCard = (props) => {
  console.log(props);
  
  const {id, img_url, name, rating, description, cast, genre, watch_url} = props.curElem;
    return (
        <li key={props}>
          <div>
            <img src={img_url} width="40%" height="40%" alt="" />
          </div>
          <h2>Name: {name}</h2>
          <h3>Rating: {rating}</h3>
          <p>Summary: {description}</p>
          <p>Genre: {genre}</p>
          <p>Cast: {cast}</p>
          <a href={watch_url} target="_blank">
            <button>Watch Now</button>
          </a>
          {/* Ternary Condition Using
        <button> {age >= 18 ? "Watch Now" : "Not Available"}</button> */}
        </li>
      );
}

