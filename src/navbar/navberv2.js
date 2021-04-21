// import { Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import "../styles/App.css"


function App2() {

  return (
    <div>
        <img id="logo-main" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/32877/logo-thing.png" width="200" alt="Logo Thing main logo"/>
        <nav id="navbar-primary" class="navbar navbar-default" role="navigation">
        <div class="container-fluid">
            
            <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-primary-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            </div>
            <div class="collapse navbar-collapse" id="navbar-primary-collapse">
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  );
}

export default App2;
