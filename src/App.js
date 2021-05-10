import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Profile from "./containers/profile"
import DetailProduct from "./containers/detailproduct"
import Login from "./containers/Login"
import Register from "./containers/registercompany"
import Companymanage from "./containers/companymanage"
import Admin from "./containers/admin"
import Adminuser from "./containers/adminuser"

function App() {
    return (
        <Router basename='/'>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                {/* <Route path="/registercompany" component={Registercompany} /> */}
                <Route path="/profile" component={Profile} />
                <Route path="/detailProduct/:id" component={DetailProduct} />
                <Route path="/companymanage" component={Companymanage} />
                <Route path="/adminmanage" component={Admin} />
                <Route path="/adminuser" component={Adminuser} />
            </Switch>
        </Router>
    )
}

export default App;