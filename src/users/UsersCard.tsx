import { User } from "./Users";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Dropdown } from "react-bootstrap";
import { SyntheticEvent } from "react";
import { NavLink } from "react-router-dom";

interface UserCardProps {
  user: User;
  onRemove: (user: User) => void;
}

function UserCard({ user, onRemove }: UserCardProps) {
  return (
<>
   
<div className="d-flex gap-4 " style={{ width: "25rem" }}>
      <div
        style={{ width: "6rem", height: "6rem" }}
        className="d-flex bg-secondary fs-3 text-white align-items-center justify-content-center rounded-circle me-2"
      >
        {user.firstname[0]}
        {user.lastname[0]}
        
      </div>
      <address >
        <div className="d-flex">

        <h5>
          {user.firstname} {user.lastname}
         {/* dropdown here */}
        </h5>
        <Dropdown className="" aria-expanded="false">
            <Dropdown.Toggle variant="" className="no-caret">
              {/* <span className="text-primary fw-semibold "> */}
              <svg className=" m-2 text-primary" width={30} height={20} fill="currentColor">
                <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#three-dots-vertical" />
              </svg>
              {/* </span> */}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <li>
                <NavLink to={`/user/edit/${user.id}`} className="dropdown-item">
                  Edit
                </NavLink>
              </li>
              <li>
                <a
                  className="small dropdown-item"
                  onClick={(event: SyntheticEvent) => {
                    event.preventDefault();
                    onRemove(user);
                  }}>
                  Delete
                </a>
              </li>
            </Dropdown.Menu>
          </Dropdown>
                    </div>
        <br />
        
        <span className="text-secondary">
            {user.isAdmin && ("Admin")} 
        </span>
      <span className="text-secondary">  {(user.isAdmin && user.isReviewer) &&
          "| "}
        </span>
        <span className="text-secondary">{user.isReviewer && ("Reviwer")}</span>
        <br />
        <span className="text-secondary">{user.phone}</span>
        <br />
        <div className="d-flex justify-content-start"></div>
      </address>
    </div>
 </>
  )
}
export default UserCard;
