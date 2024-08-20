import { RequestLines } from "./RequestLines";
import { Request}  from "../requests/Requests";
import { Link, NavLink } from "react-router-dom";

interface RequestLinesInterface {
  request: Request;
  OnRemove: (requestLines: RequestLines) => void;
}


function RequestLinesTable({request, OnRemove} : RequestLinesInterface) {


  return (
    <>
    <div className="border rounded-2 p-3">
    <div className="d-flex justify-content-between">

    <label htmlFor="table"><h4>Items</h4></label>
    <Link className=" btn btn-primary" to="requestLines/create">+ New Request Line</Link>
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
        
            {request.requestLines?.map((request) => (
              <tr>
                <td>{request.product?.name}</td>
                <td>{request.product?.price}</td>
                <td>{request.quantity}</td>
                <td></td>
              </tr>
            ))
            
            }
        
      </tbody>
      </table>
    </div>
    </>
  )
}

export default RequestLinesTable;
