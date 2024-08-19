// import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { Request } from "./Requests";
import { requestAPI } from "./RequestsAPI";
import { useEffect, useState } from "react";



function RequestDetails() {
  // const [request, setRequest] =useState<Request>()
  const { id } = useParams<{ id: string }>();
  const requestId = Number(id);
  const [request, setRequest] = useState<Request>();

  useEffect(() => {
    test();
  }, []);

  async function test() {
    let foundRequest = await requestAPI.find(requestId);
    setRequest(foundRequest);
    
  }
  


  return (
      <>
      <dl>
        <dt>{request?.description}</dt>
      </dl>
      </>
    );
}

export default RequestDetails;
