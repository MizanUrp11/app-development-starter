import Loginsignup from "./components/loginsignup";
import Urls from "./components/urls";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route path="/urls" component={Urls}></Route>
        <Route path="/loginsignup" component={Loginsignup}></Route>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Link to="/loginsignup">login sign up</Link>
      <Link to="/urls">Urls</Link>
    </div>
  );
}

export default App;
