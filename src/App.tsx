import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import CollectionPage from "./page/CollectionPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/collection" Component={CollectionPage} />
      </Routes>
    </>
  );
}

export default App;
