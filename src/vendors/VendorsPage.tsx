
import { useEffect, useState } from "react";
import { Vendor } from "./Vendors";
import { vendorAPI } from "./VendorAPI";
import VendorCard from "./VendorCard";


function VendorsPage() {
  const [vendors, setVendor] = useState<Vendor[]>([]);
  const [busy, setBusy] = useState(false);

  async function loadVendors() {
    try{ 
        setBusy(true);
        const data = await vendorAPI.list();
        setVendor(data);
    } catch (error: any) {
        console.log("error");
    }
    finally{
        setBusy(false)
    }
  }


  async function remove(vendor: Vendor) {
    
  }

  return (
    <>
    {busy && ( 
         <section className="d-flex justify-content-center align-items-center align-content-center vh-100">
            <div className=" spinner-border text-primary">
                <span className="visually-hidden">Loading...</span>
            </div>
         </section>

    )}
    <section>
        {vendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
        ))}
    </section>
            </>
  );
}

export default VendorsPage;
