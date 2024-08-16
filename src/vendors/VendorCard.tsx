import { Vendor } from "./Vendors";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import "../App.css";
import { SyntheticEvent } from "react";

interface VendorCardProps {
  vendor: Vendor;
  onRemove: (vendor: Vendor) => void;
}

function VendorCard({ vendor, onRemove }: VendorCardProps) {
  return (
    <div className="card mt-" style={{ width: "18rem" }}>
      <div className="card-body">
        <div className=" d-flex justify-content-between  ">
          <div>
            <h5 className="card-title">{vendor.name}</h5>
            <span className="badge text-bg-secondary">{vendor.code}</span>
          </div>

          <Dropdown aria-expanded="false">
            <Dropdown.Toggle variant="" className="no-caret">
              {/* <span className="text-primary fw-semibold "> */}
              <svg className=" m-2 text-primary" width={30} height={20} fill="currentColor">
                <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#three-dots-vertical" />
              </svg>
              {/* </span> */}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <li>
                <NavLink to={`/vendor/edit/${vendor.id}`} className="dropdown-item">
                  Edit
                </NavLink>
              </li>
              <li>
                <a
                  className="small dropdown-item"
                  onClick={(event: SyntheticEvent) => {
                    event.preventDefault();
                    onRemove(vendor);
                  }}>
                  Delete
                </a>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <section>
          <p className="card-text text-secondary m-0 p-0">{vendor.address}</p>
          <p className="text-secondary m-0 p-0">{vendor.phone}</p>
          <p className="text-secondary m-0 p-0">{vendor.email}</p>
        </section>
      </div>
    </div>
  );
}
export default VendorCard;
