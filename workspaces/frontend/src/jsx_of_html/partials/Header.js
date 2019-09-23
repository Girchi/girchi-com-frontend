// @flow strict-local
// Auto Generated, Don't Modify Manually

import React from 'react'

export default function Header (_: {||}): React$Node {
  return (
    <>
      {/* Start of GeD Progress */}
      <div className='progress ged-progress d-none d-lg-flex'>
        <div className='progress-bar' role='progressbar' style={{ width: '0%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} aria-used={500000}>
          <span className='progress-bar-label'>
            უკვე გაცემულია
            <span className='progress-bar-value d-inline-flex align-items-center'>
              <i className='icon-ged' />0
            </span>
          </span>
        </div>
        <div className='progress-bar-total'>
          <span className='progress-bar-label'>
            განკუთვნილია
            <span className='progress-bar-value d-inline-flex align-items-center'>
              <i className='icon-ged' />5 000 000 000
            </span>
          </span>
        </div>
      </div>
      {/* End of GeD Progress */}
      {/* Start of header */}
      <header className='bg-white'>
        <div className='container'>
          {/* Start of nav */}
          <nav className='navbar navbar-expand-lg navbar-light border-bottom border-bottom-0 border-bottom-lg-1 p-0 py-lg-4'>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarMenu' aria-controls='navbarMenu' aria-expanded='false' aria-label='Toggle navigation'>
              <i className='icon-menu-three-horizontal-lines-symbol' />
            </button>
            <a className='navbar-brand d-flex align-items-center line-height-1-2 my-2 my-lg-0' href='#'>
              <i className='icon-girchi-logo navbar-brand-lg mr-lg-4' />
              <span className='navbar-text text-success text-uppercase font-weight-bold d-none d-lg-inline'>გირჩი</span>
            </a>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarAuth' aria-controls='navbarAuth' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='icon-user auth-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='navbarAuth'>
              {/* <div
        class="ml-auto py-3 py-lg-0 border-top border-top-lg-0 text-center"
      >
        <a
          href="login.html"
          class="btn btn-success mr-md-2 text-uppercase btn-block d-md-inline-block  w-100 max-w-md-210 w-lg-auto"
        >
          შესვლა
        </a>
        <a
          href="register.html"
          class="btn btn-warning text-uppercase btn-block d-md-inline-block w-100 max-w-md-210 w-lg-auto mt-md-0"
        >
          რეგისტრაცია
        </a>
      </div> */}
              {/* Start of logged in user */}
              <div className='d-flex align-items-center ml-auto py-3 py-lg-0 border-top-1 border-top-lg-0'>
                <a href='#' className='rounded-circle overflow-hidden d-inline-block'>
                  <img src='../images/i.metreveli.jpg' className='rounded' alt='...' />
                </a>
                <h6 className='text-uppercase line-height-1-2 font-size-3 font-size-xl-base mb-0 mx-2 mx-xl-3'>
                  <a href='#' className='text-decoration-none d-inline-block text-hover-success'>
                    ირაკლი
                    <span className='font-weight-bold'>მეტრეველი</span>
                    <span className='d-flex align-items-center font-size-3 text-success'><i className='icon-ged line-height-1-1' />
                      <span className='font-weight-bold line-height-0-7 ml-1'>3 200</span>
                    </span>
                  </a>
                </h6>
                <a href='#' className='btn ml-auto ml-lg-2 btn-outline-light-silver btn-lg text-dark-silver font-size-5 rounded-circle line-height-0-2 px-2 line-height-md-0-6 px-md-3'>
                  <i className='icon-logout mx-1' />
                </a>
              </div>
              {/* End of logged in user */}
            </div>
          </nav>
          {/* End of nav */}
        </div>
        <div className='sticky-navbar-wrapper'>
          <div className='sticky-navbar bg-white'>
            <div className='container'>
              {/* Start of nav */}
              <nav className='navbar navbar-expand-lg navbar-light mx-n2 p-0'>
                <div className='collapse navbar-collapse text-center text-lg-left' id='navbarMenu'>
                  <a className='navbar-brand d-none line-height-1-2' href='#'>
                    <i className='icon-girchi-logo navbar-brand-lg ml-3 mr-4 font-size-8' />
                  </a>
                  {/* Start of menu */}
                  <ul className='navbar-nav text-uppercase border-top border-bottom border-top-lg-0 border-bottom-lg-0 mx-2 py-2 py-lg-0 m-lg-0 text-center text-lg-left'>
                    <li className='nav-item active'>
                      <a className='nav-link py-3 py-lg-4 font-weight-bold' href='#'>მთავარი <span className='sr-only'>(current)</span></a>
                    </li>
                    <li className='nav-item is-dropdown'>
                      <a className='nav-link py-3 py-lg-4 font-weight-bold' href='#'>სიახლეები
                        <i className='icon-arrow-down-sign-to-navigate font-size-1 text-dark-silver mx-2' />
                      </a>
                      <ul className='nav-dropdown py-2'>
                        <li className='nav-dropdown-item active'>
                          <a className='nav-dropdown-link py-2 px-4 font-weight-bold' href='#'>ეკონომიკა
                          </a>
                        </li>
                        <li className='nav-dropdown-item'>
                          <a className='nav-dropdown-link py-2 px-4 font-weight-bold' href='#'>კულტურა
                          </a>
                        </li>
                        <li className='nav-dropdown-item'>
                          <a className='nav-dropdown-link py-2 px-4 font-weight-bold' href='#'>სიახლეები</a>
                        </li>
                      </ul>
                    </li>
                    <li className='nav-item is-dropdown'>
                      <a className='nav-link py-3 py-lg-4 font-weight-bold' href='#'>დააფინანსე
                        <i className='icon-arrow-down-sign-to-navigate font-size-1 text-dark-silver mx-2' />
                      </a>
                      <ul className='nav-dropdown py-2'>
                        <li className='nav-dropdown-item active'>
                          <a className='nav-dropdown-link py-2 px-4 font-weight-bold' href='#'>ეკონომიკა
                          </a>
                        </li>
                        <li className='nav-dropdown-item'>
                          <a className='nav-dropdown-link py-2 px-4 font-weight-bold' href='#'>კულტურა
                          </a>
                        </li>
                        <li className='nav-dropdown-item'>
                          <a className='nav-dropdown-link py-2 px-4 font-weight-bold' href='#'>სიახლეები</a>
                        </li>
                      </ul>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link py-3 py-lg-4 font-weight-bold' href='#'>პროექტები</a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link py-3 py-lg-4 font-weight-bold' href='#'>ჩვენს შესახებ</a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link py-3 py-lg-4 font-weight-bold' href='#'>კონტაქტი</a>
                    </li>
                  </ul>
                  {/* End of menu */}
                  {/* Start of aut */}
                  {/* <div class="auth d-none ml-auto text-center">
            <a
              href="login.html"
              class="btn btn-success mr-md-2 text-uppercase"
            >
              შესვლა
            </a>
            <a href="register.html" class="btn btn-warning text-uppercase">
              რეგისტრაცია
            </a>
          </div> */}
                  {/* End of auth */}
                  {/* Start of logged in user */}
                  <div className='user-panel d-none align-items-center ml-auto'>
                    <a href='#' className='rounded-circle overflow-hidden d-inline-block'>
                      <img src='../images/i.metreveli.jpg' className='rounded' alt='...' />
                    </a>
                    <h6 className='text-uppercase line-height-1-2 font-size-3 font-size-xl-base mb-0 mx-2 mx-xl-3'>
                      <a href='#' className='text-decoration-none d-inline-block text-hover-success'>
                        ირაკლი
                        <span className='font-weight-bold'>მეტრეველი</span>
                        <span className='d-flex align-items-center font-size-3 text-success'><i className='icon-ged line-height-1-1' />
                          <span className='font-weight-bold line-height-0-7 ml-1'>3 200</span>
                        </span>
                      </a>
                    </h6>
                    <a href='#' className='btn btn-outline-light-silver btn-lg text-dark-silver font-size-5 rounded-circle line-height-0-6 px-3 ml-2'>
                      <i className='icon-logout mx-1' />
                    </a>
                  </div>
                  {/* End of logged in user */}
                  {/* Start of search */}
                  <form className='navbar-search mt-3 mt-lg-0  ml-auto mr-2 text-right border-bottom border-bottom-lg-0 pb-3 pb-lg-0' action>
                    <div className='navbar-search-input bg-white rounded-oval pr-4 border-secondary border overflow-hidden w-100 w-lg-200 max-w-lg-200'>
                      <input type='text' name='q' placeholder='ძებნა...' className='border-0 py-1 m-1 px-3 outline-none font-size-3 text-success w-100' />
                    </div>
                    <button className='navbar-search-btn border-0 p-0 outline-none bg-transparent line-height-0-9 m-2 p-1 text-dark-silver'>
                      <i className='icon-search' />
                    </button>
                  </form>
                  {/* End of search */}
                  {/* Start of language switcher */}
                  <div className='dropdown mr-2 d-inline-block my-3 my-lg-0'>
                    <button className='btn btn-outline-secondary dropdown-toggle p-1 d-flex align-items-center text-grey bg-transparent shadow-none' type='button' id='languageSwitcher' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                      <img src='../images/georgia.svg' width={28} className='mr-2' alt='' />
                      ქარ
                      <i className='icon-arrow-down-sign-to-navigate mr-1 ml-3 caret' />
                    </button>
                    <div className='dropdown-menu' aria-labelledby='languageSwitcher'>
                      <a className='dropdown-item text-grey' href='#'><img src='../images/united-kingdom.svg' width={28} className='mr-2' alt='' />
                        Eng
                      </a>
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
