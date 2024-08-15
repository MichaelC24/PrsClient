import { Vendor } from "./Vendors";
import { NavLink } from "react-router-dom";


interface VendorCardProps {
    vendor: Vendor;
}

function VendorCard({vendor} : VendorCardProps) {
    return (
        <div>
      <section className="container-fluid">
        <header className="border-bottom border-1 border-success-subtle d-flex justify-content-between">
          <h2 className="ms-5 mt-3">Vendors</h2>
          <NavLink to="/vendors/create" className="btn btn-primary m-3">
            Create A Vendor
          </NavLink>
        </header>
        <section className="p-5">
          <section className="border border-1 p-3 bg-body-secondary rounded d-flex flex-wrap">
            <div className="card mt-" style={{ width: "18rem" }}>
              <div className="card-body">
                <div className=" d-flex justify-content-between  ">
                  <div>
                    <h5 className="card-title">{vendor.name}</h5>
                    <span className="badge text-bg-secondary">New</span>
                  </div>
                  <div className="btn-group dropend">
                    <button type="button" className="btn dropdown" data-bs-toggle="dropdown" aria-expanded="true">
                      <span className="text-primary fw-semibold ">
                        <svg className="bi m-2" width={30} height={20} fill="currentColor">
                          <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#three-dots-vertical" />
                        </svg>
                      </span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to="/edit" className="dropdown-item">
                          Edit
                        </NavLink>
                      </li>
                      <li>
                        <a className="dropdown-item" href="delete">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <section>
                  <p className="card-text text-secondary m-0 p-0">{vendor.address}</p>
                  <p className="text-secondary m-0 p-0">{vendor.phone}</p>
                  <p className="text-secondary m-0 p-0">{vendor.email}</p>
                </section>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>


    )
    
}
export default VendorCard