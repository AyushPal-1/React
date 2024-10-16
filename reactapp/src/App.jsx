// importing default components
// import Netflixcard from "./components/Netflixcard";

// name import components using {}
// import { Netflixcard } from "./components/Netflixcard";
// import Profile from "./components/Profile";
// import "./components/Netflix.module.css"
// import { EventHanding } from "./components/EventHanding";
// import { EventProps } from "./components/EventProps";
// import { EventPropagation } from "./components/EventPropagation";
// import { State } from "./hooks/State";
// import { ToggleSwitch } from "./projects/Toggle Switch/ToggleSwitch";
import { CounterChallenge } from "./hooks/useState/CounterApp";
import { RegistrationForm } from "./hooks/useState/Registration";
// import { Todo } from "./projects/Todo/Todo";

export const App = () => {
  return (
    <section>
      {/* <Todo /> */}
      <RegistrationForm />
    </section>
  );
};
export default App;
