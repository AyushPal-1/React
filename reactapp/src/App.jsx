// importing default components
// import Netflixcard from "./components/Netflixcard";

// name import components using {}
import { Netflixcard } from "./components/Netflixcard";

export const App = () => {
  return (
    // Fragment Start
  <>   
     {/* component calling */}
    <Netflixcard />
    <Netflixcard/>
    <Netflixcard/>
    <Netflixcard/>
  </>
  // Fragment End
  );

}
// component creating

export default App
