import NavBar from './components/NavBar'
import Principal from './components/Principal'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar />}>
        
        <Route path="/landing" element={<Principal />}>
          
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
