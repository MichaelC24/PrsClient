import { NavLink } from "react-router-dom";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

function NavPanel() {
  return (
    <>
      
        
      <nav
        className="d-flex flex-column flex-shrink-0 p-3 bg-body-secondary border-end min-vh-100 position-sticky"
        
      >
            <div className="btn-group dropend bg-body-secondary">
              <button type="button" className="btn dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="text-primary fw-semibold">
                  <svg className="bi m-2" width="32" height="32" fill="currentColor">
                    <use xlinkHref={`${bootstrapIcons}#plus-circle-fill`} />
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
              <ul className="nav nav-pills  flex-column container-fluid ps-4">
                <li className="mb-2 text-secondary">Purchases</li>
                <li>
                  <NavLink className="nav-link d-flex" aria-current="page" to="/request">
                    <svg className="bi me-2" width="20" height="20" fill="currentColor">
                      <use xlinkHref={`${bootstrapIcons}#cart`} />
                    </svg>
                    Requests
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/products">
                    <svg className="bi me-2" width="20" height="20" fill="currentColor">
                      <use xlinkHref={`${bootstrapIcons}#grid`} />
                    </svg>
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/vendors" className="nav-link" >
                    <svg className="bi me-2" width="20" height="20" fill="currentColor">
                      <use xlinkHref={`${bootstrapIcons}#building`} />
                    </svg>
                    Vendors
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/users">
                    <svg className="bi me-2" width="20" height="20" fill="currentColor">
                      <use xlinkHref={`${bootstrapIcons}#people`} />
                    </svg>
                    Users
                  </NavLink>
                </li>
              </ul>
              
            </nav>
          
          
        
     
    </>
  );
}

export default NavPanel;
