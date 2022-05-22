import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CovidData from "./Component/CovidData";
// import CovidData from "./Component/CovidData";
import Home from "./Component/Home";
import TotalData from "./Component/TotalData";
// import GenCovidData from "./GenCovidData";


function App() {

  return (
    <div>
      <Home />
      <TotalData />
      <CovidData />
    </div>
  );
}

export default App;



