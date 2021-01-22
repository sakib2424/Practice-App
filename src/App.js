import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Product";

function App() {
  return (
    <div>
      <Router>
        <Navbar> </Navbar>
        <Switch>
          <Route path="/services" component={Services}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/" component={Home}></Route>
          {/* <Route path="/sign-up" component={Home}></Route>  */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
