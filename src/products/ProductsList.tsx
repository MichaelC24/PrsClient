import { useEffect, useState } from "react";
import { Product } from "./Products";
import { productAPI } from "./ProductsAPI";
import ProductCard from "./ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

function ProductsPage() {
  const [products, setProduct] = useState<Product[]>([]);
  const [busy, setBusy] = useState(false);

  async function loadProducts() {
    try {
      setBusy(true);
      const data = await productAPI.list();
      setProduct(data);
    } catch (error: any) {
      console.log("error");
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function remove(product: Product) {
    if (confirm("Are you sure you want to delete this Product?")) {
      if (product.id) {
        await productAPI.delete(product.id);
        let updatedProducts = products.filter((v) => v.id !== product.id);
        setProduct(updatedProducts);
        toast.success("Successfully deleted.");
      }
    }
  }

  return (
    <>
      {busy && (
        <section className=" d-flex justify-content-center align-items-center align-content-center vh-100">
          <div className=" spinner-border text-primary">
            <span className="visually-hidden">Loading...</span>
          </div>
        </section>
      )}
      <header className=" mt-3 ms-4 d-flex justify-content-between">
        <h3>Products</h3>
        <Link to={"/products/create"} className="btn btn-outline-secondary">
          + Add Product
        </Link>
      </header>
      <hr />
      <section className="p-5">
        <section className="border border-1 p-3 bg-body-secondary rounded d-flex flex-wrap">
          <section className="d-flex flex-wrap gap-5 list">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onRemove={remove} />
            ))}
          </section>
        </section>
      </section>
    </>
  );
}

export default ProductsPage;
