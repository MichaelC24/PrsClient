import { useEffect, useState } from "react";
import { Request } from "./Request";
import { requestAPI } from "./RequestsAPI";
import RequestCard from "./RequestTable";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

function RequestList() {
  const [requests, setRequest] = useState<Request[]>([]);
  const [busy, setBusy] = useState(false);

  async function loadRequests() {
    try {
      setBusy(true);
      const data = await requestAPI.list();
      setRequest(data);
    } catch (error: any) {
      console.log("error");
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    loadRequests();
  }, []);

  async function remove(request: Request) {
    if (confirm("Are you sure you want to delete this Request?")) {
      if (request.id) {
        await requestAPI.delete(request.id);
        let updatedRequests = requests.filter((v) => v.id !== request.id);
        setRequest(updatedRequests);
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
        <h3>Requests</h3>
        <Link to={"/requests/create"} className="btn btn-outline-secondary">
          + Add Request
        </Link>
      </header>
      <hr />
      <section className="p-5">
        <section className="border border-1 p-3 bg-body-secondary rounded">
          
            <div className=" p-1 rounded-3 bg-body-secondary ">
              
                <table className="table w-75">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Total</th>
                      <th>Requested By</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody >
                    {requests.map((request) => (                      <RequestCard key={request.id} request={request} onRemove={remove} />
                    ))}
                  </tbody>
                </table>
              </div>
            
          </section>
        </section>
      
    </>
  );
}

export default RequestList;
