import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./Header.tsx";
import NavPanel from "./NavPanel.tsx";
import VendorsPage from "./vendors/VendorsPage.tsx";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateVendor from "./vendors/VendorCreate.tsx";
import SignIn from "./SignIn.tsx";
import VendorEdit from "./vendors/VendorEdit.tsx";

function App() {
  return (
    <Router>
      <>
        <Header />
        <main className="container-fluid d-flex ps-0">
          <NavPanel />
          <div className="container-fluid">
            <Routes>
              <Route path="/" />
              <Route path="/vendors" element={<VendorsPage />} />
              <Route path="vendors/create" element={<CreateVendor />} />
              <Route path="Signin" element={<SignIn/>} />
              <Route path="vendors/edit" element={<VendorEdit/>}/>
            </Routes>

            {/* <h2 className="ms-5 mt-3 ">Purchase Request System</h2>
          <hr />
          <div className="ms-4">
            <h6 className="m-4 text-secondary fs-6 fst-normal">
              This application will allow you to make purchase requests.
            </h6>
          </div> */}
          </div>
        </main>
      </>
    </Router>
  );
}

export default App;
