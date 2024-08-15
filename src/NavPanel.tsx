import { NavLink } from "react-router-dom";

function NavPanel() {
  return (
    <>
      
        <div>
          <div className="border-1 vh-100 bg-body-secondary " id="menu">
            <div className="btn-group dropend">
              <button type="button" className="btn dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="text-primary fw-semibold">
                  <svg className="bi m-2" width="32" height="32" fill="currentColor">
                    <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#plus-circle-fill" />
                  </svg>
                  Create New
                </span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/vendors" className="dropdown-item">
                    Create Vendor
                  </NavLink>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Create Product
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Create Request
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Create User
                  </a>
                </li>
              </ul>
            </div>
            <nav>
              <ul className="nav nav-pills  flex-column container-fluid ps-4">
                <li className="mb-2 text-secondary">Purchases</li>
                <li>
                  <a className="nav-link d-flex" aria-current="page" href="requests.html">
                    <svg className="bi me-2" width="20" height="20" fill="currentColor">
                      <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#cart" />
                    </svg>
                    Requests
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="products">
                    <svg className="bi me-2" width="20" height="20" fill="currentColor">
                      <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#grid" />
                    </svg>
                    Products
                  </a>
                </li>
                <li>
                  <NavLink to="/vendors" className="nav-link" >
                    <svg className="bi me-2" width="20" height="20" fill="currentColor">
                      <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#building" />
                    </svg>
                    Vendors
                  </NavLink>
                </li>
                <li>
                  <a className="nav-link" href="user.html">
                    <svg className="bi me-2" width="20" height="20" fill="currentColor">
                      <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#people" />
                    </svg>
                    Users
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          
        </div>
     
    </>
  );
}

export default NavPanel;
