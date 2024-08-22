import { Request } from "./Request";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import "../App.css";
import { SyntheticEvent, useState } from "react";

interface RequestCardProps {
  request: Request;
  onRemove: (request: Request) => void;
}
function RequestCard({ request, onRemove }: RequestCardProps) {
  // Determine the badge class based on the request status
  const getBadgeClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "new":
        return "badge bg-primary";
      case "review":
        return "badge bg-warning";
      case "approved":
        return "badge bg-success";
      case "rejected":
        return "badge bg-danger";
    }
  };

  return (
    <tr>
      <td>{request.id}</td>
      <td>
        <span>
          {request.description}
          <div className="text-secondary">{request.justification}</div>
        </span>
      </td>
      <td>
        <span className={getBadgeClass(request.status)}>{request.status}</span>
      </td>
      <td className="bi-currency-dollar">{request.total}</td>
      <td>
        <span>
          {request.user?.firstname} {request.user?.lastname}
          <div className="text-secondary">{request.deliveryMode}</div>
        </span>
      </td>
      <td>
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
              <NavLink to={`/request/edit/${request.id}`} className="dropdown-item">
                Edit
              </NavLink>
            </li>
            <li>
              <Link to={`/request/detail/${request.id}`} className="dropdown-item">
                Details
              </Link>
            </li>
            <li>
              <a
                className="small dropdown-item"
                onClick={(event: SyntheticEvent) => {
                  event.preventDefault();
                  onRemove(request);
                }}>
                Delete
              </a>
            </li>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
}

export default RequestCard;
