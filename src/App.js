import Discover from "./components/Discover/Discover";
import DiscoverCard from "./components/Discover/DiscoverCard";
import Header from "./components/Header/Header";
import Recommended from "./components/Recommended/Recommended";


function App() {
  return (
    <div>
      <Header/>
      <Discover/>
      <Recommended/>
    </div>
  );
}

export default App;
