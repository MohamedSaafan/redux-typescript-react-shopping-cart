import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Products from "./Products";
import Cart from "./Cart";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand' href='#'>
            Navbar
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <Link className='nav-item nav-link active' to='/'>
                Products <span className='sr-only'>(current)</span>
              </Link>
              <Link className='nav-item nav-link' to='/cart'>
                Cart
              </Link>
            </div>
          </div>
        </nav>
        <div className='container mt-5'>
          <Route path='/' component={Products} exact />
          <Route path='/cart' component={Cart} />
        </div>
      </Router>
    </div>
  );
};

export default App;
