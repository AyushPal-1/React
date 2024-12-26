
import { DarkLight, ThemeProvider } from "./hooks/ContextAPI/DarkLight";


export const App = () => {
  return (
    <section>
     <ThemeProvider>
      <DarkLight></DarkLight>
     </ThemeProvider>
    </section>
  );
};
export default App;
