import "./App.css";
import Card from "./components/Card.jsx";


function App() {
  const isAvailable = true;
  const programmerCardNumber = 3;

  const cards = Array.from({ length: programmerCardNumber }, (_, index) => (
    <Card key={index} isAvailable={isAvailable} />
  ));

  return <div className="app">{cards}</div>;
}

export default App;
