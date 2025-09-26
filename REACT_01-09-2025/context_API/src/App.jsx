import { useContext } from "react";
import { CounterContext } from "./Context/CounterContext";
import { Counter } from "./Components/Counter";

function App() {
  const counterState = useContext(CounterContext);
  console.log(counterState);

  return (
    <>
      <div>
        <p>
          <u>This is from "App.jsx"</u>
        </p>
        <h2>count is {counterState.count}</h2>
        <Counter />
      </div>
    </>
  );
}

export default App;
