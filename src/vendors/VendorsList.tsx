import { useEffect, useState } from "react";
import { Vendor } from "./Vendors";
import { vendorAPI } from "./VendorAPI";
import VendorCard from "./VendorCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function VendorsPage() {
  const [vendors, setVendor] = useState<Vendor[]>([]);
  const [busy, setBusy] = useState(false);

  async function loadVendors() {
    try {
      setBusy(true);
      const data = await vendorAPI.list();
      setVendor(data);
    } catch (error: any) {
      console.log("error");
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    loadVendors();
  }, []);

  async function remove(vendor: Vendor) {}

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
        <h3>Vendors</h3>
        <Link to={"/vendor/create"} className="btn btn-outline-secondary">
          + Add Vendor
        </Link>
      </header>
      <hr />
      <section className="p-5">
        <section className="border border-1 p-3 bg-body-secondary rounded d-flex flex-wrap">
          <section className="d-flex flex-wrap gap-4 list">
            {vendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </section>
        </section>
      </section>
    </>
  );
}

export default VendorsPage;
