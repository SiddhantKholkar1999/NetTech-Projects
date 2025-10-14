import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Bread_Crumb } from "./Components/Bread_Crumb";
import { Allroutes } from "./Routes/Allroutes";

function App() {
  return (
    <>
      <Navbar />
      <Bread_Crumb />
      <Allroutes />
    </>
  );
}

export default App;
