import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  let [query , setQuery] = useState(" ");
  let navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    navigate(`/search?q=${query}`);
  }

  return (
    <div>
      <div>
        {/* Header Area Start */}
        <header className="large-screens">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg p-0">
              <div className="collapse navbar-collapse" id="mynavbar">
                <Link to="/" className="navbar-brand m-0 p-0">
                  <img alt src="assets/media/logo.png" />
                </Link>
                <ul className="navbar-nav m-0">
                  <li className="menu-item">
                    <Link to="/" className="active">
                      Home
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="listing" className="">
                      Anime 
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="mangalisting" className="">
                      Manga 
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="category" className="">
                      Category
                    </Link>
                  </li>
                </ul>
                <div className="right-nav">
                  <div className="search-block">
                    <form onSubmit={handleSubmit}
                      action="https://uiparadox.co.uk/templates/vivid/v3/anime-listing.html"
                      className="input-group search-bar"
                    >
                      <button className="search" type="submit">
                        <i className="far fa-search search-icon" />
                      </button>
                      <input onChange={(e) => {
                        setQuery(e.target.value);
                      }} type="text" placeholder="Search..." required />
                    </form>
                  </div>
                  <ul className="navbar-nav m-0">
                    <li className="menu-item">
                      <a href="javascript:void(0);" className="notification">
                        <div className="notification-number">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={23}
                            height={24}
                            viewBox="0 0 23 24"
                            fill="none"
                          >
                            <path
                              d="M19.2138 12.3217V10.0781C19.2138 6.80522 16.9448 4.0312 13.836 3.12516V2.10938C13.836 0.946266 12.8491 0 11.636 0C10.4229 0 9.43602 0.946266 9.43602 2.10938V3.12516C6.32718 4.0312 4.05826 6.80517 4.05826 10.0781V12.3217C4.05826 15.1966 2.91533 17.9227 0.840056 19.9977C0.636679 20.2011 0.579528 20.5011 0.694808 20.7602C0.810087 21.0194 1.07555 21.1875 1.36937 21.1875H8.04313C8.38378 22.7903 9.86531 24 11.636 24C13.4068 24 14.8882 22.7903 15.2289 21.1875H21.9026C22.1965 21.1875 22.4619 21.0194 22.5772 20.7602C22.6924 20.5011 22.6353 20.2011 22.432 19.9977C20.3567 17.9227 19.2138 15.1965 19.2138 12.3217ZM10.9027 2.10938C10.9027 1.72167 11.2317 1.40625 11.636 1.40625C12.0404 1.40625 12.3693 1.72167 12.3693 2.10938V2.84663C12.128 2.82431 11.8834 2.8125 11.636 2.8125C11.3886 2.8125 11.144 2.82431 10.9027 2.84663V2.10938ZM11.636 22.5938C10.68 22.5938 9.86487 22.0059 9.56215 21.1875H13.7099C13.4072 22.0059 12.592 22.5938 11.636 22.5938ZM2.94995 19.7812C4.62004 17.6348 5.52492 15.0371 5.52492 12.3217V10.0781C5.52492 6.84727 8.26635 4.21875 11.636 4.21875C15.0057 4.21875 17.7471 6.84727 17.7471 10.0781V12.3217C17.7471 15.0371 18.652 17.6348 20.3221 19.7812H2.94995Z"
                              fill="#C6CBD2"
                            />
                            <path
                              d="M21.1693 10.0781C21.1693 10.4664 21.4977 10.7812 21.9026 10.7812C22.3076 10.7812 22.636 10.4664 22.636 10.0781C22.636 7.26094 21.4918 4.61236 19.4142 2.62031C19.1278 2.34577 18.6635 2.34572 18.3771 2.62031C18.0907 2.89491 18.0907 3.34008 18.3771 3.61467C20.1777 5.34113 21.1693 7.63655 21.1693 10.0781Z"
                              fill="#C6CBD2"
                            />
                            <path
                              d="M1.36937 10.7812C1.77437 10.7812 2.10271 10.4664 2.10271 10.0781C2.10271 7.63659 3.09436 5.34117 4.89494 3.61472C5.18133 3.34012 5.18133 2.89495 4.89494 2.62036C4.6086 2.34577 4.14425 2.34577 3.85786 2.62036C1.78024 4.61241 0.636043 7.26094 0.636043 10.0781C0.636043 10.4664 0.96438 10.7812 1.36937 10.7812Z"
                              fill="#C6CBD2"
                            />
                          </svg>
                          <span>1</span>
                        </div>
                      </a>
                    </li>
                    <li className="has-children">
                      <a href="javascript:void(0);">
                        <img src="assets/media/author/profile.png" alt />
                      </a>
                      <ul className="submenu">
                        <li>
                          <Link to="signup">Sign up</Link>
                        </li>
                        <li>
                          <Link to="login">Login</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <header className="small-screen">
          <div className="container-fluid">
            <div className="mobile-menu">
              <div>
                <a className="navbar-brand" href="index.html">
                  <img alt src="assets/media/logo.png" />
                </a>
              </div>
              <div className="hamburger-menu">
                <div className="bar" />
              </div>
            </div>
            <nav className="mobile-navar d-xl-none">
              <ul>
                <li>
                  <a href="index.html" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="anime-listing.html">Listing</a>
                </li>
                <li className="has-children">
                  Detail <span className="icon-arrow" />
                  <ul className="children">
                    <li>
                      <a href="anime-detail.html">Anime Detail</a>
                    </li>
                    <li>
                      <a href="movie-detail.html">Movie Detail</a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  Pages <span className="icon-arrow" />
                  <ul className="children">
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-detail.html">Blog Detail</a>
                    </li>
                    <li>
                      <a href="404.html">404</a>
                    </li>
                    <li>
                      <a href="coming-soon.html">Coming Soon</a>
                    </li>
                    <li>
                      <a href="sign-up.html">Sign Up</a>
                    </li>
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/* Header Area end */}
      </div>
    </div>
  );
}

export default Header;
