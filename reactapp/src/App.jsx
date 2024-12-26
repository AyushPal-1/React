import { BioProvider } from "./hooks/ContextAPI";
import { Home } from "./hooks/ContextAPI/Home";


export const App = () => {
  return (
    <section>
      <BioProvider>
        <Home></Home>
      </BioProvider>
    </section>
  );
};
export default App;
