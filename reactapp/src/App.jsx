// importing default components
// import Netflixcard from "./components/Netflixcard";

// name import components using {}
import { Netflixcard } from "./components/Netflixcard";
import Profile from "./components/Profile";

export const App = () => {
  return (
    // Fragment Start
    <>
      {/* component calling */}
      {/* <Netflixcard /> */}
      <Profile />
    </>
    // Fragment End
  );
};
// component creating

export default App;
