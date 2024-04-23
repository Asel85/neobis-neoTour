import Discover from "./components/Discover/Discover";
import Header from "./components/Header/Header";
import Recommended from "./components/Recommended/Recommended";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";


function App() {
  return (
    
      <Router>
        <div>
      <Header/>
      <Discover/>
      <Recommended/>
      <Routes>
        <Route path="/:id" element={<Details/>} />
      </Routes>
      </div>
      </Router>
    
  );
}

export default App;
