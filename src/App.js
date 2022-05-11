
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/NavBar"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar/>}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
