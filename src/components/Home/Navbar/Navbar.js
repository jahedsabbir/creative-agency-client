import React from 'react';
import logo from '../../../images/logos/logo.png'
const Navbar = () => {
    return (
      <section>
        <nav style={{backgroundColor:'#FBD062'}} class="navbar navbar-expand-lg navbar-light pt-5">
            <img src={logo} style={{height:'50px'}} alt=""/>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav pr-5 ml-auto">
            <li class="nav-item mr-3">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item mr-3">
              <a class="nav-link" href="#">Our Portfolio</a>
            </li>
            <li class="nav-item mr-3">
              <a class="nav-link " href="/dashboard">Dashboard</a>
            </li>
            <li class="nav-item mr-3">
              <a class="nav-link " href="#">Contact Us</a>
            </li>
            <button style={{width:'120px'}} className="bg-dark text-white">Login</button>
          </ul>
        </div>
      </nav>
      </section>
    );
};

export default Navbar;