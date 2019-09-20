// @flow strict-local
import React from 'react'

export default function (_: {||}): React$Node {
  return (
    <>
    {/* Start of GeD Progress */}
    <div className="progress ged-progress d-none d-lg-flex">
      <div
        className="progress-bar"
        role="progressbar"
        style={{width: '0%'}}
        aria-valuenow="60"
        aria-valuemin="0"
        aria-valuemax="100"
        // aria-used="500000"
      >
        <span className="progress-bar-label">
          უკვე გაცემულია
          <span className="progress-bar-value d-inline-flex align-items-center">
            <i className="icon-ged"></i>0</span>
        </span>
      </div>
      <div className="progress-bar-total">
        <span className="progress-bar-label">
          განკუთვნილია
          <span className="progress-bar-value d-inline-flex align-items-center">
            <i className="icon-ged"></i>5 000 000 000</span>
        </span>
      </div>
    </div>
    {/* End of GeD Progress */}
    {/* Start of header */}
    <header className="bg-white">
      <div className="container">
        {/* Start of nav */}
        <nav
          className="navbar navbar-expand-lg navbar-light border-bottom border-bottom-0 border-bottom-lg-1 p-0 py-lg-4"
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMenu"
            aria-controls="navbarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="icon-menu-three-horizontal-lines-symbol"></i>
          </button>
          <a
            className="navbar-brand d-flex align-items-center line-height-1-2 my-2 my-lg-0"
            href="index.html"
          >
            <i className="icon-girchi-logo navbar-brand-lg mr-lg-4"></i>
            <span
              className="navbar-text text-success text-uppercase font-weight-bold d-none d-lg-inline"
              >გირჩი</span
            >
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarAuth"
            aria-controls="navbarAuth"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-user auth-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarAuth">
            <div
              className="ml-auto py-3 py-lg-0 border-top border-top-lg-0 text-center"
            >
              <a
                href="login.html"
                className="btn btn-success mr-md-2 text-uppercase btn-block d-md-inline-block  w-100 max-w-md-210 w-lg-auto"
              >
                შესვლა
              </a>
              <a
                href="register.html"
                className="btn btn-warning text-uppercase btn-block d-md-inline-block w-100 max-w-md-210 w-lg-auto mt-md-0"
              >
                რეგისტრაცია
              </a>
            </div>
          </div>
        </nav>
        {/* End of nav */}
      </div>
      <div className="sticky-navbar-wrapper">
        <div className="sticky-navbar bg-white">
          <div className="container">
            {/* Start of nav */}
            <nav className="navbar navbar-expand-lg navbar-light mx-n2 p-0">
              <div
                className="collapse navbar-collapse text-center text-lg-left"
                id="navbarMenu"
              >
                <a className="navbar-brand d-none line-height-1-2" href="index.html">
                  <i
                    className="icon-girchi-logo navbar-brand-lg ml-3 mr-4 font-size-8"
                  ></i>
                </a>
                {/* Start of menu */}
                <ul
                  className="navbar-nav text-uppercase border-top border-bottom border-top-lg-0 border-bottom-lg-0 mx-2 py-2 py-lg-0 m-lg-0 text-center text-lg-left"
                >
                  <li className="nav-item active">
                    <a className="nav-link py-lg-4 font-weight-bold" href="#"
                      >მთავარი <span className="sr-only">(current)</span></a
                    >
                  </li>
                  <li className="nav-item">
                    <a className="nav-link py-lg-4 font-weight-bold" href="news.html"
                      >სიახლეები</a
                    >
                  </li>
                  <li className="nav-item">
                    <a className="nav-link py-lg-4 font-weight-bold" href="#"
                      >დააფინანსე</a
                    >
                  </li>
                  <li className="nav-item">
                    <a className="nav-link py-lg-4 font-weight-bold" href="#"
                      >პროექტები</a
                    >
                  </li>
                  <li className="nav-item">
                    <a className="nav-link py-lg-4 font-weight-bold" href="#"
                      >ჩვენს შესახებ</a
                    >
                  </li>
                  <li className="nav-item">
                    <a className="nav-link py-lg-4 font-weight-bold" href="#"
                      >კონტაქტი</a
                    >
                  </li>
                </ul>
                {/* End of menu */}
                {/* Start of aut */}
                <div className="auth d-none ml-auto text-center">
                  <a
                    href="login.html"
                    className="btn btn-success mr-md-2 text-uppercase"
                  >
                    შესვლა
                  </a>
                  <a href="register.html" className="btn btn-warning text-uppercase">
                    რეგისტრაცია
                  </a>
                </div>
                {/* End of auth */}
                {/* Start of search */}
                <form
                  className="navbar-search mt-3 mt-lg-0  ml-auto mr-2 text-right border-bottom border-bottom-lg-0 pb-3 pb-lg-0"
                  action=""
                >
                  <div
                    className="navbar-search-input bg-white rounded-oval pr-4 border-secondary border overflow-hidden w-100 w-lg-200 max-w-lg-200"
                  >
                    <input
                      type="text"
                      name="q"
                      placeholder="ძებნა..."
                      className="border-0 py-1 m-1 px-3 outline-none font-size-3 text-success w-100"
                    />
                  </div>
                  <button
                    className="navbar-search-btn border-0 p-0 outline-none bg-transparent line-height-0-9 m-2 p-1 text-dark-silver"
                  >
                    <i className="icon-search"></i>
                  </button>
                </form>
                {/* End of search */}
                {/* Start of language switcher */}
                <div className="dropdown mr-2 d-inline-block my-3 my-lg-0">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle p-1 d-flex align-items-center text-grey bg-transparent shadow-none"
                    type="button"
                    id="languageSwitcher"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src="~assets/images/georgia.svg"
                      width="28"
                      className="mr-2"
                      alt=""
                    />
                    ქარ
                    <i className="icon-arrow-down-sign-to-navigate mr-1 ml-3 caret"></i>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="languageSwitcher">
                    <a className="dropdown-item text-grey" href="#"
                      ><img
                        src="~assets/images/united-kingdom.svg"
                        width="28"
                        className="mr-2"
                        alt=""
                      />
                      Eng</a
                    >
                  </div>
                </div>
              </div>
              {/* End of language switcher */}
            </nav>
            {/* End of nav */}
          </div>
        </div>
      </div>
    </header>
    {/* End of header */}
    </>
  )
}
