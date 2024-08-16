// import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Vendor } from "./Vendors";
import { vendorAPI } from "./VendorAPI";

function VendorForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const vendorId = Number(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Vendor>({
    defaultValues: async () => {
      if (!vendorId) {
        return Promise.resolve(new Vendor());
      } else {
        return await vendorAPI.find(vendorId);
      }
    },
  });

  const save: SubmitHandler<Vendor> = async (vendor) => {
    try {
      if (vendor.isNew) {
        await vendorAPI.post(vendor);
      } else {
        await vendorAPI.put(vendor);
      }
      navigate("/vendors");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
      
      <div>
        <form className="row g-md-4 needs-validation is-invalid" onSubmit={handleSubmit(save)} noValidate>
          <div className="col-md-3">
            <label htmlFor="vc" className="form-label">
              Vendor Code
            </label>
            <input
              type="text"
              id="vc"
              {...register("code", {
                required: "Vendor Code is Required",
              })}
              className={`form-control ${errors.code && "is-invalid"} `}
              placeholder="Enter short vendor code"
              
            />
            <div className="invalid-feedback ">{errors?.code?.message}</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Vendor Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "name is required" })}
              placeholder="Enter Vendor Name"
              className={`form-control ${errors.name && "is-invalid"}`}
              />
            <div className="invalid-feedback">{errors?.name?.message}</div>
          </div>
          <div className="col-9">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
            //   className="form-control is-invalid"
              id="inputAddress"
              {...register("address", {
                required: "Address is required",
              })}
              placeholder="Enter vendor's address"
              className={`form-control ${errors.address && "is-invalid"}`}
            />
            <div className="invalid-feedback">{errors?.address?.message}</div>
          </div>
          <div className="col-5">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
            //   className="form-control is-invalid"
              id="city"
              {...register("city", { required: "City is required" })}
              placeholder="Enter city"
              className={`form-control ${errors.address && "is-invalid"}`}
            />
            <div className="invalid-feedback">{errors?.city?.message}</div>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select
              id="inputState"
            //   className="form-select is-invalid"
              {...register("state", { required: "State Required" })}
                className={`form-control ${errors.address && "is-invalid"}`}
              >
              <option value="">State...</option>
              <option value="1">OH</option>
              <option value="2">KY</option>
            </select>
            <div className="invalid-feedback">{errors?.state?.message}</div>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input
              type="text"
              {...register("zip", { required: "Zipcode is Required"})}
              className={`form-control ${errors.zip && "is-invalid"}`}

              id="inputZip"
              placeholder="Zip Code"
              
            />
            <div className="invalid-feedback">{errors?.zip?.message}</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="phone">Phone</label>
            <input type="text" {...register("phone")} className="form-control" placeholder="Enter Phone Number" id="phone" />
          </div>
          <div className="col-md-4">
            <label htmlFor="email">Email</label>
            <input type="text" {...register("email")}className="form-control" placeholder="Enter Email Address" id="email" />
          </div>
          <div className=" offset-7">
            <NavLink to="/vendors"  className="btn btn-outline-primary me-2 form-check">
              Cancel
            </NavLink>
            <button  className="btn btn-primary form-check">
              <svg className="me-2" width={15} height={23} fill="currentColor">
                <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#save" />
              </svg>
              Save Vendor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VendorForm;
