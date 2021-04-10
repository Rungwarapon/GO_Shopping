import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./containers/home";
import Profile from "./containers/profile"
import DetailProduct from "./containers/detailproduct"

function App() {
    return (
        <Router basename='/'>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/detailProduct" component={DetailProduct} />
            </Switch>
        </Router>
    )
}

export default App;