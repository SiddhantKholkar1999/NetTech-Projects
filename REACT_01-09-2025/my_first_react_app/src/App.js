import './App.css';

function App() {
  let count = 0;

  const handleIncre = () => {
    count += 1;
    console.log(count);
    document.getElementById('counter').textContent = `Counter ${count}`;
  }
  const handleDecre = () => {
    count -= 1;
    console.log(count);
    document.getElementById('counter').textContent = `Counter ${count}`;
  }


  return (
    <>
      <h1 id='counter'>Counter {count}</h1>
      <button onClick={handleIncre}>+</button>
      <button onClick={handleDecre}>-</button>
    </>
  );
}

export default App;
