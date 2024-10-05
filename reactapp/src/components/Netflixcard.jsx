import seriesData from "../api/seriesData.json";
// name export components using export keyword
export const Netflixcard = () => {
  // Dynamic Values creating
  // const name = "Queen of Tears"
  // const age = 16
  return (
    <ul>
      {seriesData.map((curElem) => {
        return (
          <li>
            <div>
              <img src={curElem.img_url} width="40%" height="40%" alt="" />
            </div>
            <h2>Name: {curElem.name}</h2>
            <h3>Rating: {curElem.rating}</h3>
            <p>Summary: {curElem.description}</p>
            <p>Genre: {curElem.genre}</p>
            <p>Cast: {curElem.cast}</p>
            <a href={curElem.watch_url} target="_blank">
              <button>Watch Now</button>
            </a>
            {/* Ternary Condition Using
          <button> {age >= 18 ? "Watch Now" : "Not Available"}</button> */}
          </li>
        );
      })}
    </ul>
  );
};

// exporting default components
// export default Netflixcard
