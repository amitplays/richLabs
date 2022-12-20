import Header from "./shared/Header";
import styles from "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        {/* <Home /> */}
        <Switch>
          <Route path="/" exact component={Home}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
