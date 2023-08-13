import { Calculator } from "./index";
import { CalProvider } from "../Context/CalContext";

function App() {
  return (
    <div className="App">
      <CalProvider>
        <Calculator />
      </CalProvider>
    </div>
  );
}

export default App;
