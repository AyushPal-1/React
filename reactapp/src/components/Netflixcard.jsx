import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
export const Netflixcard = () => {
  return (
    <ul>
      {seriesData.map((curElem) => ( <SeriesCard key={curElem.id} curElem={curElem} />
      ))}
    </ul>
  );
};

// exporting default components
export default Netflixcard
