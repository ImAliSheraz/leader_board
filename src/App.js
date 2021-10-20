// import logo from './logo.svg';
import './App.css';

import Students from "./Components/Students";

function App() {
  return (
    <div className="App">
      <h1 className="leaderBoard">Leader Board</h1>
      <Students name="Ali Sheraz" university="Superior University" score={485} />
      <Students name="Ali Hamza" university="NED University" score={480} />
      <Students name="Yasir Iqbal" university="FAST ISB" score={450} />
      <Students name="Hamza Ejaz" university="Comsats LHR" score={430} />
    </div>
  );
}

export default App;
