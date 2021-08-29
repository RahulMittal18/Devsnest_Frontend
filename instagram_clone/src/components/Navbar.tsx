import React from "react";
import {useSelector} from "react-redux"

const Navbar = () => {
  const user = useSelector((state: any) => state.user)
  return (
    <nav className="navbar navbar-expand-lg card">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="https://fontmeme.com/images/instagram-new-logo.png"
            alt=""
            height="50px"
            width="auto"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="search">
          <input className="form-control" type="search" placeholder="&#xF002; Search"/>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 icon-flex">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                <i className="bi bi-house-door-fill"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="bi bi-messenger"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                <i className="bi bi-compass"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                <i className="bi bi-heart"></i>
              </a>
            </li>
            <li className="nav-item profile-icon">
            <img src={user.profilePicture} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
