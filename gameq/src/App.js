import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import GameCard from './components/GameCard'
import './App.css';

function App() {
  return (
    <main>
      <h1>gameQ</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <GameCard />
    </main>
  );
}

export default App;
