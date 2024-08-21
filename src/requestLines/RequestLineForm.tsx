import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RequestLines } from "./RequestLines";
import toast from "react-hot-toast";
import { requestLinesAPI } from "./RequestLinesAPI";
import { useState } from "react";
import { Product } from "../products/Products";
import { productAPI } from "../products/ProductsAPI";
// import { Product } from "../products/Product";
// import { productAPI } from "../products/ProductAPI";

function RequestLinesForm() {
  const navigate = useNavigate();
  //   let { requestId: requestLinesIdAsString } = useParams<{ requestLinesId: string }>();
  let { id: requestIdAsString, lineId: lineIdAsString } = useParams<{ id: string, lineId:string }>();
  let requestLineId = Number(lineIdAsString);
  let requestId = Number(requestIdAsString);
  const [products, setProducts] = useState<Product[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestLines>({
    defaultValues: async () => {
      let productsData = await productAPI.list();
      setProducts(productsData);

        if (!requestLineId) {
      let newRequestLines = new RequestLines({ requestId: requestId });
      return Promise.resolve(newRequestLines);
       }
      else {
         return await requestLinesAPI.find(requestLineId);
          
        }
    },
  });

  const save: SubmitHandler<RequestLines> = async (requestLines: RequestLines) => {
    try {
      if (requestLines.isNew) {
        await requestLinesAPI.post(requestLines);
      } else {
        await requestLinesAPI.put(requestLines);
      }
      //   navigate(`/request/detail/${requestId}?lastUpdated=${Date.now()}`);
      navigate(`/request/detail/${requestId}`)
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <form className="w-50" onSubmit={handleSubmit(save)} noValidate>
      <div className="mb-3">
        <label className="form-label" htmlFor="product">
          Name
        </label>
        <select
          {...register("productId", {
            required: "Product is required",
          })}
          className={`form-select ${errors.productId && "is-invalid"} `}
          id="product">
          <option value="">Select...</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
        <div className="invalid-feedback">{errors?.productId?.message}</div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="role">
          Quantity
        </label>
        <input
          {...register("quantity", {
            required: "quantity is required",
          })}
          className="form-control"
          type="text"
          id="quantity"
        />
      <div className="invalid-feedback">{errors?.quantity?.message}</div>
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-outline-primary">Save</button>
        <Link className="btn btn-outline-secondary" to={`/request/detail/${requestId}`}>
          Cancel
        </Link>
      </div>
    </form>
  );
}

export default RequestLinesForm;
