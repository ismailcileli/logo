import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages";
import SigninPage from "./components/pages/signin";

function App() {
  return (
    <Router>
     
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signin" component={SigninPage} exact />

      </Switch>
  
    </Router>
  );
}

export default App;
