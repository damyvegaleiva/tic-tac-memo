import { BrowserRouter, Route, Routes } from "react-router-dom";
import BoardContainer from "./containers/BoardContainer";
import HomeContainer from "./containers/HomeContainer";
import GameTitle from "./components/GameTitle";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <GameTitle />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/game" element={<BoardContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
