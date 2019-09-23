// @flow strict-local
// Auto Generated, Don't Modify Manually

import React from 'react'
import Header from 'jsx_of_html/partials/Header'
import Footer from 'jsx_of_html/partials/Footer'

export default function Login (_: {||}): React$Node {
  return (
    <>
      <Header />
      <div className="container">
        <div className="my-3 my-sm-4">
          <div className="card">
            <div className="card-body overflow-hidden p-3 py-md-4 px-md-4">
              <div className="row">
                <div className="col-xs-12 col-md-8 col-lg-6 m-auto">
                  <h5 className="card-title text-center text-success font-weight-bold text-uppercase mb-0">
                    ავტორიზაცია
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-md-7 col-lg-4 m-auto">
                  {/* <button
                class="btn btn-block d-none d-sm-flex align-items-center justify-content-center btn-with-icon btn-lg btn-purple text-uppercase my-4"
              >
                <i
                  class="icon-social-facebook-circular-button font-size-7"
                ></i>
                FACEBOOK ავტორიზაცია
              </button> */}
                  <button className="btn btn-block d-flex align-items-center justify-content-center btn-with-icon btn-lg btn-purple text-uppercase my-3 my-sm-4 text-nowrap">
                    <i className="icon-social-facebook-circular-button font-size-5 font-size-sm-7 mr-2" />
                    FACEBOOK ავტორიზაცია
                  </button>
                </div>
              </div>
              <hr className="my-0 mx-n5" />
              <div className="row">
                <div className="col-xs-12 col-md-7 col-lg-4 m-auto">
                  <form className="my-4">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">ელ.ფოსტა</label>
                      <input type="email" className="form-control form-control-lg" id="email" placeholder="მიუთითეთ ელ.ფოსტა" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="password">პაროლი</label>
                      <div className="input-with-addon">
                        <input type="password" className="form-control form-control-lg" id="password" placeholder="მიუთითეთ პაროლი" />
                        <div className="input-addon">
                          <a href="#" className="btn btn-sm btn-light text-grey">
                            აღდგენა
                          </a>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-lg btn-block btn-success text-uppercase mt-4">
                      შესვლა
                    </button>
                    <hr className="mx-0 my-4 my-sm-5 mx-sm-n5" />
                    <p className="card-text text-center">
                      არ გაქვთ ანგარიში? გაიარეთ რეგისტრაცია მარტივად
                    </p>
                    <a href="register.html" className="btn btn-lg btn-block btn-warning text-uppercase mt-4">
                      რეგისტრაცია
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
