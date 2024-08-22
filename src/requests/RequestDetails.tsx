// import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { Request } from "./Request";
import { requestAPI } from "./RequestsAPI";
import { useEffect, useState } from "react";

import RequestLinesTable from "../requestLines/RequestLinesTable";
import { RequestLines } from "../requestLines/RequestLines";
import { requestLinesAPI } from "../requestLines/RequestLinesAPI";
import toast from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";

function RequestDetails() {
  // const [request, setRequest] =useState<Request>()
  const { id } = useParams<{ id: string }>();
  const requestId = Number(id);
  const [request, setRequest] = useState<Request | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    getId();
  }, []);

  async function getId() {
    let foundRequest = await requestAPI.find(requestId);
    setRequest(foundRequest);
  }
  const getBadgeClass = (status: string | undefined) => {
    switch (status?.toLowerCase()) {
      case "new":
        return "badge bg-primary"; // Blue badge for "New"
      case "review":
        return "badge bg-warning"; // Yellow badge for "Review"
      case "approved":
        return "badge bg-success"; // Green badge for "Approved"
      case "rejected":
        return "badge bg-danger"; // Red badge for "Rejected"
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Request>({
    defaultValues: async () => {
      if (!requestId) {
        return Promise.resolve(new Request());
      } else {
        return await requestAPI.find(requestId);
      }
    },
  });
  async function removeRequestLine(requestLine: RequestLines) {
    if (confirm("Do you really want to delete")) {
      if (requestLine.id) {
        await requestLinesAPI.delete(requestLine.id);
        toast.success("Successfully deleted.");
        let updatedRequestlines = request?.requestLines?.filter((r) => r.id !== requestLine.id);
        if (request) {
          setRequest({ ...request, requestLines: updatedRequestlines } as Request);
        }
      }
    }
  }
  const handleReview: SubmitHandler<Request> = async (request: Request) => {
    try {
      await requestAPI.review(request);
      navigate("/request");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleApprove: SubmitHandler<Request> = async (request: Request) => {
    try {
      await requestAPI.approve(request);
      navigate("/request");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const handleReject: SubmitHandler<Request> = async (request: Request) => {
    try {
      await requestAPI.reject(request);
      navigate("/request");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  if (!request) return null;
  return (
    <>
      <div className="px-4 pb-0 mb-0 mt-3 d-flex justify-content-between">
        <h2>Request</h2>
        <div>
          <button onClick={handleSubmit(handleReview)} className="ms-2 btn btn-primary me-2">
            Send For Review
          </button>
          <button onClick={handleSubmit(handleApprove)} className="btn btn-outline-success me-2">
            Approve
          </button>
          <button onClick={handleSubmit(handleReject)} className="btn btn-outline-danger">
            Reject
          </button>
        </div>
      </div>
      <hr className="mt-2" />
      <div className="container d-flex justify-content-between">
        <div>
          <dl>
            <dt>Description</dt>
            <dd>{request?.description}</dd>
            <dt>Justification</dt>
            <dd>{request?.justification}</dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt>Delivery Method</dt>
            <dd>{request?.deliveryMode}</dd>
            <dt>Status</dt>
            <dd className={getBadgeClass(request?.status)}>{request?.status}</dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt>Requested By</dt>
            <dd>
              {request?.user?.firstname} {request?.user?.lastname}
            </dd>
          </dl>
        </div>
      </div>
      <div>
        <RequestLinesTable request={request} onRemove={removeRequestLine} />
      </div>
    </>
  );
}

export default RequestDetails;
