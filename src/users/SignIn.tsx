// import { SubmitHandler, useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { User } from "./User";
import { userAPI } from "./UsersAPI";
import { useUserContext } from "./UserContext";

// import { userAPI } from "../users/userAPI";

// import { User } from "../users/User";
// import toast from "react-hot-toast";
// import { useUserContext } from "../users/UserContext";

interface IAccount {
  username: string;
  password: string;
}

let emptyAccount = {
  username: "",
  password: "",
};

function persistUser(user: User) {
  localStorage.setItem("user", JSON.stringify(user));
}

function SignInPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAccount>({
    defaultValues: async () => {
      return emptyAccount;
    },
  });
  const { setUser } = useUserContext();

  const signIn: SubmitHandler<IAccount> = async (account) => {
    try {
      const currentUser = await userAPI.findAccount(account.username, account.password);
      persistUser(currentUser);
      setUser(currentUser);

      navigate("/");
    } catch (error: any) {
      toast.error("Unsuccessful sign in. Please try again.");
      // console.log("error here");
      
    }
  };

  return (
    <main className="signin d-flex flex-column gap-4 justify-content-center align-items-center">
      {/* <div
    class="w-100 position-absolute"
    style="height: 10rem; background-color: #302ECB; transform:skewY(12deg)"
  ></div> */}
      <svg id="logo-35" width={100} height={78} viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF" />
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          className="ccustom"
          fill="#312ECB"
        />
      </svg>
      <span className="mx-2 fw-semibold">Purchase Request System</span>
      <div className="card w-25 h-25 p-4">
        <h4 className="card-title">Sign in</h4>
        <form className="d-flex flex-column" onSubmit={handleSubmit(signIn)}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              {...register("username", { required: "Username is required" })}
              type="text"
              className={`form-control ${errors?.username && "is-invalid"}`}
            />
            <div className="invalid-feedback">{errors?.username?.message}</div>
          </div>
          <div className="mb-1">
            <label className="form-label">Password</label>
            <input
              {...register("password", { required: "Password is Required" })}
              type="password"
              className={`form-control ${errors?.username && "is-invalid"}`}
            />
          </div>
          <div className="mb-4 form-text">
            <a>Forgot It?</a>
          </div>
          <div className="mb-3 d-grid gap-2">
            <button className="btn btn-lg btn-primary">Sign in</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default SignInPage;
