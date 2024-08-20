// import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Request } from "./Requests";
import { requestAPI } from "./RequestsAPI";
import { useState } from "react";
import { User } from "../users/Users";
import { userAPI } from "../users/UsersAPI";

function RequestForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const requestId = Number(id);
  const [users, setUser] = useState<User[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Request>({
    defaultValues: async () => {
      let userList = await userAPI.list();
      setUser(userList);

      if (!requestId) {
        return Promise.resolve(new Request());
      } else {
        return await requestAPI.find(requestId);
      }
    },
  });

  const save: SubmitHandler<Request> = async (request) => {
    try {
      let savedRequest;
      if (request.isNew) {
        savedRequest = await requestAPI.post(request);
        navigate(`/request/detail/${savedRequest.id}`);
      } else {
        
        savedRequest = await requestAPI.put(request);
        navigate(`/request/detail/${requestId}`)
        

      } 
      console.log(savedRequest);
      
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <div className="container-fluid">
      <div>
        <form className="row g-md-4 needs-validation is-invalid" onSubmit={handleSubmit(save)} noValidate>
          <div className="col-md-5">
            <label htmlFor="vc" className="form-label">
              Request Description
            </label>
            <input
              type="text"
              id="vc"
              {...register("description", {
                required: "Request Description is Required",
              })}
              className={`form-control ${errors.description && "is-invalid"} `}
              placeholder="Enter Request Description"
            />
            <div className="invalid-feedback ">{errors?.description?.message}</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="justification" className="form-label">
              Justification
            </label>
            <input
              type="text"
              id="justification"
              {...register("justification", { required: "Justification is required" })}
              placeholder="Enter Justification"
              className={`form-control ${errors.justification && "is-invalid"}`}
            />
            <div className="invalid-feedback">{errors?.justification?.message}</div>
          </div>

          <div className="col-3">
            <label htmlFor="deliveryMode" className="form-label">
              Delivery Mode
            </label>
            <input
              type="text"
              id="deliveryMode"
              {...register("deliveryMode", { required: "Delivery Mode is required" })}
              placeholder="Enter Delivery Mode"
              className={`form-control ${errors.deliveryMode && "is-invalid"}`}
            />
            <div className="invalid-feedback">{errors?.deliveryMode?.message}</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              id="status"
              {...register("status", { required: "Status Required" })}
              defaultValue="NEW" 
              
              disabled
              className={`form-select ${errors.status && "is-invalid"}`}
            >
              <option value="NEW">NEW</option>
              <option value="REVIEW">REVIEW</option>
              <option value="APPROVED">APPROVED</option>
              <option value="REJECTED">REJECTED</option>
            </select>
            <div className="invalid-feedback">{errors?.status?.message}</div>
          {/* {(status==="REJECTED") && (
          <div className="col-md">
              <label htmlFor="inputAddress" className="form-label">
                Rejection
              </label>
              <input
                type="text"
                
                id="inputAddress"
                {...register("rejectionReason", {
                  required: "Rejection reason required",
                })}
                
                placeholder="Enter Price"
                className={`form-control ${errors.rejectionReason && "is-invalid"}`}
              />
              <div className="invalid-feedback">{errors?.rejectionReason?.message}</div>
            </div>
            
          )} */}
            </div>
          <div className="col-md-4">
            <label htmlFor="user" className="form-label">
              Requested By
            </label>
            <select
              id="user"
              {...register("userId", { required: "Requested by is Required" })}
              className={`form-select ${errors.userId && "is-invalid"}`}
            >
              <option value="">Select...</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.firstname} {user.lastname}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">{errors?.userId?.message}</div>
          </div>

          <div className="offset-7">
            <NavLink to="/request" className="btn btn-outline-primary me-2 form-check">
              Cancel
            </NavLink>
            <button className="btn btn-primary form-check">
              <svg className="me-2" width={15} height={23} fill="currentColor">
                <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#save" />
              </svg>
              Save Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestForm;
