import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Profile from "./containers/profile"
import DetailProduct from "./containers/detailproduct"
import Login from "./containers/Login"

function App() {
    return (
        <Router basename='/'>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/profile" component={Profile} />
                <Route path="/detailProduct" component={DetailProduct} />
            </Switch>
        </Router>
    )
}

export default App;