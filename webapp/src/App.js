import Sidebar from "./components/Sidebar/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/400.css';
import NavBar from "./components/Navbar/NavBar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import {Navbar_one} from "./components/Navbar1/Navbar1";
import {Navbar_two} from "./components/Navbar2/Navbar2";
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" component={NavBar} />
      <div className="container">
      <Route path="/"  component={Sidebar} />
      
      <div>
      <Route path="/" exact component={Home} />
      <Route path="/about"  component={About} />
      <Route path="/navbar_one" component={Navbar_one} />
      <Route path="/navbar_two"  component={Navbar_two} />
      </div>

      </div>
    
    </Router>
  );
}

export default App;
