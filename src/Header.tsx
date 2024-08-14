function Header() {
  return (
    <header className="container-fluid bg-body-secondary py-4 px-5 d-flex justify-content-between border-bottom border-1 border-success border-success-subtle">
      <div>
        <a href="layout.html">
          <svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF"></path>
            <path
              d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
              className="ccustom"
              fill="#312ECB"></path>
          </svg>
        </a>
        <span>Purchase Request System</span>
      </div>
      <a className="btn btn-outline-primary" href="SignIn">
        <svg className="bi" width="32" height="32" fill="currentColor">
          <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#person" />
        </svg>
        Sign In
      </a>
    </header>
  );
}

export default Header