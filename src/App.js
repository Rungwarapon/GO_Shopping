import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Profile from "./containers/profile"
import DetailProduct from "./containers/detailproduct"
import Login from "./containers/Login"
import Register from "./containers/registercustomer"
import Registercompany from "./containers/registercompany"
import Companymanage from "./containers/companymanage"

function App() {
    return (
        <Router basename='/'>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/registercompany" component={Registercompany} />
                <Route path="/profile" component={Profile} />
                <Route path="/detailProduct" component={DetailProduct} />
                <Route path="/companymanage" component={Companymanage} />
            </Switch>
        </Router>
    )
}

export default App;