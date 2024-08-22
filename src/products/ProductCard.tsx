import { Product } from "./Product";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import "../App.css";
import { SyntheticEvent } from "react";

interface ProductCardProps {
  product: Product;
  onRemove: (product: Product) => void;
}

function ProductCard({ product, onRemove }: ProductCardProps) {
  return (
    <div className="card mt-" style={{ width: "18rem" }}>
      <div className="card-body">
        <div className=" d-flex justify-content-between  ">
          <div className="mb-4">
            <h5 className="card-title">{product.name}</h5>
            <span className="">${product.price} /each</span>
          </div>

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
                <NavLink to={`/product/edit/${product.id}`} className="dropdown-item">
                  Edit
                </NavLink>
              </li>
              <li>
                <a
                  className="small dropdown-item"
                  onClick={(event: SyntheticEvent) => {
                    event.preventDefault();
                    onRemove(product);
                  }}>
                  Delete
                </a>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <section>
          {/* <p className="text-secondary m-0 p-0">{product.unit}</p> */}
          <p className="text-secondary m-0 p-0">{product.vendor?.name}</p>
          <mark className=" rounded card-text bg-primary-subtle text-secondary ">{product.partNbr}</mark>
        </section>
      </div>
    </div>
  );
}
export default ProductCard;
