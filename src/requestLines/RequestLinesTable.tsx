import { RequestLines } from "./RequestLines";
import { Request } from "../requests/Requests";
import { Link, NavLink } from "react-router-dom";
import { SyntheticEvent } from "react";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";

interface RequestLinesInterface {
  request: Request;
  onRemove: (requestLines: RequestLines) => void;
}

function RequestLinesTable({ request, onRemove }: RequestLinesInterface) {
  return (
    <>
      <div className="border rounded-2 p-3">
        <div className="d-flex justify-content-between">
          <label htmlFor="table">
            <h4>Items</h4>
          </label>
          <Link className=" btn btn-primary" to="requestLines/create">
            + New Request Line
          </Link>
        </div>
        <table className="table " id="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {request.requestLines?.map((requestline) => (
              <tr key={requestline.id}>
                <td>{requestline.product?.name}</td>
                <td>{requestline.product?.price}</td>
                <td>{requestline.quantity}</td>
                <td>${(requestline.product?.price ?? 0) * (requestline.quantity ?? 0)}</td>
                <td>
                  <Link to={`requestLines/edit/${requestline.id}`}>
                    <svg className="bi m-2" width="15" height="15" fill="currentColor">
                      <use xlinkHref={`${bootstrapIcons}#pencil`} />
                    </svg>
                  </Link>

                  <a
                    className=""
                    onClick={(event: SyntheticEvent) => {
                      event.preventDefault();
                      onRemove(requestline);
                    }}>
                    <svg className="bi m-2" width="15" height="15" fill="currentColor">
                      <use xlinkHref={`${bootstrapIcons}#trash`} />
                    </svg>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>${request.total}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default RequestLinesTable;
