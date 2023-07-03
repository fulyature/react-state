import Greet from "./Greet";
import "./App.css";
function App() {
  const persons = [
    {
      name: "Fulya",
      surName: "Türe",
    },
    {
      name: "Yunus",
      surName: "Türe",
    },
    {
      name: "Zeynep Begüm",
      surName: "Türe",
    },
  ];
  return (
    <div className="App">
      {persons.map((person) => (
        <Greet name={person.name} surName={person.surName} />
      ))}
    </div>
  );
}

export default App;
