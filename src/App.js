import {Route, Switch} from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Stock from "./pages/Stock";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./components/nav";
import Header from "./components/header"
import stockData from "./stock-data";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/stocks">
        <Header/>
        <Dashboard stockData={stockData}/>
      </Route>
      <Route path="/stocks/:symbol" 
      render={(routerProps) =>  <Stock stockData={stockData} {...routerProps}/>}
        />
      <Route path="/about">
        <About/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;