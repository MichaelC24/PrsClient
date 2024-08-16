// import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { User } from "./Users";
import { userAPI } from "./UsersAPI";

function VendorForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: async () => {
      if (!userId) {
        return Promise.resolve(new User());
      } else {
        return await userAPI.find(userId);
      }
    },
  });

  const save: SubmitHandler<User> = async (user) => {
    try {
      if (user.isNew) {
        await userAPI.post(user);
      } else {
        await userAPI.put(user);
      }
      navigate("/users");
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
              Username
            </label>
            <input
              type="text"
              id="vc"
              {...register("username", {
                required: "Username is Required",
              })}
              className={`form-control ${errors.username && "is-invalid"} `}
              placeholder="Enter Username"
            />
            <div className="invalid-feedback ">{errors?.username?.message}</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="text"
              id="password"
              {...register("password", { required: "password is required" })}
              placeholder="Enter Password"
              className={`form-control ${errors.password && "is-invalid"}`}
            />
            <div className="invalid-feedback">{errors?.password?.message}</div>
          </div>
          <div className="col-9">
            <label htmlFor="inputAddress" className="form-label">
              First Name
            </label>
            <input
              type="text"
              //   className="form-control is-invalid"
              id="inputAddress"
              {...register("firstname", {
                required: "First Name is required",
              })}
              placeholder="Enter Firstname"
              className={`form-control ${errors.firstname && "is-invalid"}`}
            />
            <div className="invalid-feedback">{errors?.firstname?.message}</div>
          </div>
          <div className="col-5">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              //   className="form-control is-invalid"
              id="lastname"
              {...register("lastname", { required: "Last Name is required" })}
              placeholder="Enter Lastname"
              className={`form-control ${errors.lastname && "is-invalid"}`}
            />
            <div className="invalid-feedback">{errors?.lastname?.message}</div>
          </div>
          {/* <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select
              id="inputState"
              //   className="form-select is-invalid"
              {...register("state", { required: "State Required" })}
              className={`form-control ${errors.address && "is-invalid"}`}>
              <option value="">State...</option>
              <option value="1">OH</option>
              <option value="2">KY</option>
            </select>
            <div className="invalid-feedback">{errors?.state?.message}</div>
          </div> */}
          <div className="col-md-4">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              {...register("phone")}
              className="form-control"
              placeholder="Enter Phone Number"
              id="phone"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              {...register("email")}
              className="form-control"
              placeholder="Enter Email Address"
              id="email"
            />
          </div>
          <div className="mb-3 w-50">
            <label  className="form-label">
              Role
            </label>
            <br />
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" />
              <label  className="form-check-label">
                Reviewer
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" />
              <label  className="form-check-label">
                Admin
              </label>
            </div>
          </div>
          <div className=" offset-7">
            <button type="reset" className="btn btn-outline-primary me-2 form-check">
              Cancel
            </button>
            <button className="btn btn-primary form-check">
              <svg className="me-2" width={15} height={23} fill="currentColor">
                <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#save" />
              </svg>
              Save User
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default VendorForm;
