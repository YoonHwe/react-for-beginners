import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
//Switch는 라우터를 찾는 역할
function App(){
  return (
  <Router>
    <Switch>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>);
}

export default App;

