// importing default components
// import Netflixcard from "./components/Netflixcard";

// name import components using {}
import { Netflixcard } from "./components/Netflixcard";
import Profile from "./components/Profile";
import "./components/Netflix.module.css"
import { EventHanding } from "./components/EventHanding";
import { EventProps } from "./components/EventProps";
import { EventPropagation } from "./components/EventPropagation";

export const App = () => {
  return (
    // Fragment Start
    <>
      {/* component calling */}
      <section className="container">
        <h1 className="card-heading">List of Best Netflix Series</h1>
       {/* <Netflixcard />  */}
      {/* <EventHanding ></EventHanding> */}
      {/* <EventProps></EventProps> */}
      <EventPropagation/>

      </section>
      {/* <Profile /> */}
    </>
    // Fragment End
  );
};
// component creating

export default App;
