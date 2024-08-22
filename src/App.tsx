import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./Header.tsx";
import NavPanel from "./NavPanel.tsx";
import VendorsPage from "./vendors/VendorsList.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VendorCreate from "./vendors/VendorCreate.tsx";
import SignIn from "./users/SignIn.tsx";
import VendorEdit from "./vendors/VendorEdit.tsx";
import UsersPage from "./users/UsersPage.tsx";
import UserCreate from "./users/UserCreate.tsx";
import UserEdit from "./users/UserEdit.tsx";
import ProductsPage from "./products/ProductsList.tsx";
import ProductCreate from "./products/ProductCreate.tsx";
import ProductEdit from "./products/ProductEdit.tsx";
import RequestsPage from "./requests/RequestList.tsx";
import RequestEdit from "./requests/RequestEdit.tsx";
import RequestCreate from "./requests/RequestCreate.tsx";
import RequestDetails from "./requests/RequestDetails.tsx";
import RequestLinesForm from "./requestLines/RequestLineForm.tsx";
import RequestLineCreate from "./requestLines/RequestLineCreate.tsx";
import RequestLineEdit from "./requestLines/RequestLineEdit.tsx";
import SignInPage from "./users/SignIn.tsx";
import HomePage from "./Home.tsx";
import { useState } from "react";
import { User } from "./users/User.ts";
import { UserContext } from "./users/UserContext.ts";
import { Toaster } from "react-hot-toast";

function getPersistedUser() {
  const userAsJson = localStorage.getItem("user");
  if (!userAsJson) return undefined;
  const user = JSON.parse(userAsJson);
  return user;
}

function App() {
  const [user, setUser] = useState<User | undefined>(getPersistedUser());
  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <main className="container-fluid d-flex ps-0">
        <Toaster
            toastOptions={{
              success: {
                iconTheme: {
                  primary: "#0d6efd",
                  secondary: "white",
                },
              },
              style: {
                maxWidth: 500,
              },
            }}
          />
          <NavPanel />

          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="vendors" element={<VendorsPage />} />
              <Route path="/vendor/create" element={<VendorCreate />} />
              <Route path="Signin" element={<SignInPage />} />
              <Route path={`vendor/edit/:id`} element={<VendorEdit />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="user/create" element={<UserCreate />} />
              <Route path="user/edit/:id" element={<UserEdit />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="products/create" element={<ProductCreate />} />
              <Route path="product/edit/:id" element={<ProductEdit />} />
              <Route path="request" element={<RequestsPage />} />
              <Route path="requests/create" element={<RequestCreate />} />
              <Route path="request/edit/:id" element={<RequestEdit />} />
              <Route path="/request/detail/:id" element={<RequestDetails />} />
              <Route path="/request/detail/:id/requestLines/create" element={<RequestLineCreate />} />
              <Route path="/request/detail/:id/requestLines/edit/:lineId" element={<RequestLineEdit />} />
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
      </UserContext.Provider>
    </Router>
  );
}

export default App;
