import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
        <>
          <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">BDPA LOGO</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link to="/" class="nav-link">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/Login" class="nav-link">Login</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav> 
        <Outlet />
      </>
  )
};

export default Navigation;