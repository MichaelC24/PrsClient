function VendorForm() {

    
  return (
    <div className="container-fluid">
      <h2 className="ms-5 mt-3">New Vendor</h2>
      <hr />
      <div>
        <form className="row g-md-4 needs-validation is-invalid" noValidate>
          <div className="col-md-3">
            <label htmlFor="vc" className="form-label">
              Vendor Code
            </label>
            <input
              type="text"
              className="form-control is-invalid"
              id="vc"
              placeholder="Enter short vendor code"
              required
            />
            <div className="invalid-feedback ">Vendor Code required</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Vendor Name
            </label>
            <input type="text" className="form-control is-invalid" id="name" placeholder="Enter Vendor Name" required />
            <div className="invalid-feedback">Need Vendor Name</div>
          </div>
          <div className="col-9">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control is-invalid"
              id="inputAddress"
              placeholder="Enter vendor's address"
              required
            />
            <div className="invalid-feedback">Address is required</div>
          </div>
          <div className="col-5">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input type="text" className="form-control is-invalid" id="city" placeholder="Enter city" required />
            <div className="invalid-feedback">City is required</div>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select is-invalid" required>
              <option value="0">Select state...</option>
              <option value="1">OH</option>
              <option value="2">KY</option>
            </select>
            <div className="invalid-feedback">Name is required</div>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control is-invalid"
              id="inputZip"
              placeholder="Enter zip code"
              required
            />
            <div className="invalid-feedback">Zip is required</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="phone">Phone</label>
            <input type="text" className="form-control" placeholder="Enter phone number" id="phone" />
          </div>
          <div className="col-md-4">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control" placeholder="Enter email address" id="email" />
          </div>
          <div className=" offset-7">
            <button type="reset" className="btn btn-outline-primary me-2 form-check">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary form-check">
              <svg className="me-2" width={15} height={23} fill="currentColor">
                <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#save" />
              </svg>
              Save Vendor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VendorForm;