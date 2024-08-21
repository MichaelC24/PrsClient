// import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Product } from "./Products";
import { productAPI } from "./ProductsAPI";
import { useState } from "react";
import { Vendor } from "../vendors/Vendors";
import { vendorAPI } from "../vendors/VendorAPI";
import toast from "react-hot-toast";

function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const [vendors, setVendor] = useState<Vendor[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    defaultValues: async () => {
      let vendorList = await vendorAPI.list();
      setVendor(vendorList);

      if (!productId) {
        return Promise.resolve(new Product());
      } else {
        return await productAPI.find(productId);
      }
    },
  });

  const save: SubmitHandler<Product> = async (product) => {
    try {
      if (product.isNew) {
        await productAPI.post(product);
      } else {
        await productAPI.put(product);
      }
      toast.success("Product Saved")
      navigate("/products");
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
              Product Name
            </label>
            <input
              type="text"
              id="vc"
              {...register("name", {
                required: "Productname is Required",
              })}
              className={`form-control ${errors.name && "is-invalid"} `}
              placeholder="Enter Product Name"
            />
            <div className="invalid-feedback ">{errors?.name?.message}</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="partNbr" className="form-label">
              Part Number
            </label>
            <input
              type="text"
              id="partNbr"
              {...register("partNbr", { required: "Part Number is required" })}
              placeholder="Enter Part Number"
              className={`form-control ${errors.partNbr && "is-invalid"}`}
            />
            <div className="invalid-feedback">{errors?.partNbr?.message}</div>
          </div>
          <div className="col-9">
            <label htmlFor="inputAddress" className="form-label">
              Price
            </label>
            <input
              type="text"
              //   className="form-control is-invalid"
              id="inputAddress"
              {...register("price", {
                required: "Price is required",
              })}
              placeholder="Enter Price"
              className={`form-control ${errors.price && "is-invalid"}`}
            />
            <div className="invalid-feedback">{errors?.price?.message}</div>
          </div>
          <div className="col-5">
            <label htmlFor="unit" className="form-label">
              Unit
            </label>
            <input
              type="text"
              //   className="form-control is-invalid"
              id="unit"
              {...register("unit", { required: "Unit is required" })}
              placeholder="Enter Unit"
              className={`form-control ${errors.unit && "is-invalid"}`}
            />
            <div className="invalid-feedback">{errors?.unit?.message}</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="vendor" className="form-label">
              Vendor
            </label>
            <select
              id="vendor"
              //   className="form-select is-invalid"
              {...register("vendorId", { required: "Vendor is Required" })}
              className={`form-select ${errors.vendorId && "is-invalid"}`}>
                <option value="">Select...</option>
                {vendors.map((vendor) => (
                  <option key={vendor.id} value={vendor.id}>
                    {vendor.name}
                  </option>
                ))}
             
            </select>
            <div className="invalid-feedback">{errors?.vendorId?.message}</div>
          </div>
          {/* <div className="col-md-4">
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
            <label className="form-label">Role</label>
            <br />
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Reviewer</label>
            </div>
            <div className="form-check form-check-inline">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Admin</label>
            </div>
          </div> */}
          <div className=" offset-7">
            <NavLink to="/products" className="btn btn-outline-primary me-2 form-check">
              Cancel
            </NavLink>
            <button className="btn btn-primary form-check">
              <svg className="me-2" width={15} height={23} fill="currentColor">
                <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#save" />
              </svg>
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
