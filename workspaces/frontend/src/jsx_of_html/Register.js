// @flow strict-local
// Auto Generated, Don't Modify Manually

import React from 'react'
import Header from 'jsx_of_html/partials/Header'
import Footer from 'jsx_of_html/partials/Footer'

export default function Register (_: {||}): React$Node {
  return (
    <>
      <Header />
      <div className="container">
        <div className="my-3 my-sm-4">
          <div className="card">
            <div className="card-body overflow-hidden p-3 py-md-4 px-md-4">
              <div className="row">
                <div className="col-xs-12 col-md-8 col-lg-6 m-auto">
                  <h5 className="card-title text-center text-success font-weight-bold text-uppercase">
                    რეგისტრაცია
                  </h5>
                  <h6 className="card-subtitle text-center">
                    აირჩიეთ პოლიტიკოსი, მიუთითეთ თქვენი წონის რამდენი %-ით უჭერთ
                    მას მხარს და მიიღე მონაწილეობა პარტიული სიის ჩამოყალიბებაში.
                  </h6>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-md-7 col-lg-4 m-auto">
                  <button className="btn btn-block d-flex align-items-center justify-content-center btn-with-icon btn-lg btn-purple text-uppercase my-3 my-sm-4 text-nowrap">
                    <i className="icon-social-facebook-circular-button font-size-5 font-size-sm-7 mr-2" />
                    FACEBOOK რეგისტრაცია
                  </button>
                </div>
              </div>
              <hr className="my-0 mx-n5" />
              <div className="row">
                <div className="col-6 mx-auto mt-5">
                  <div className="alert alert-primary" role="alert">
                    A simple primary alert—check it out!
                  </div>
                  <div className="alert alert-secondary" role="alert">
                    A simple secondary alert—check it out!
                  </div>
                  <div className="alert alert-success" role="alert">
                    A simple success alert—check it out!
                  </div>
                  <div className="alert alert-danger" role="alert">
                    A simple danger alert—check it out!
                  </div>
                  <div className="alert alert-warning" role="alert">
                    A simple warning alert—check it out!
                  </div>
                  <div className="alert alert-info" role="alert">
                    A simple info alert—check it out!
                  </div>
                  <div className="alert alert-light" role="alert">
                    A simple light alert—check it out!
                  </div>
                  <div className="alert alert-dark" role="alert">
                    A simple dark alert—check it out!
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-md-7 col-lg-4 m-auto">
                  <form className="my-4">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">ელ.ფოსტა</label>
                      <input type="email" className="form-control form-control-lg" id="email" placeholder="მიუთითეთ ელ.ფოსტა" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="password">პაროლი</label>
                      <input type="password" className="form-control form-control-lg" id="password" placeholder="მიუთითეთ პაროლი" />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="password-confirmation">გაიმეორეთ პაროლი</label>
                      <input type="password" className="form-control form-control-lg" id="password-confirmation" placeholder="მიუთითეთ პაროლი ხელმეორედ" />
                    </div>
                    <div className="border bg-dark-white border-dashed rounded px-4 pt-4  mb-4 mt-4">
                      <h6 className="text-uppercase text-success font-weight-bold">
                        მიუთითეთ referral-ი
                      </h6>
                      <p className="font-size-1 text-grey my-3">
                        თქვენ შეგიძლიათ მიუთითოთ Referral-ი - ანუ ვისი მეშვეობითაც
                        გაიგეთ ჩვენს შესახებ და გადაწყვიტეთ დარეგისტრირება
                      </p>
                      <div className="form-group">
                        <input type="text" className="form-control form-control-lg" id="referral" placeholder="მიუთითეთ Referral-ი" />
                        <small id="referralHelp" className="form-text text-muted mx-0 my-3">* Referral-ის მითითება სავალდებულო არაა</small>
                      </div>
                    </div>
                    <div className="form-group">
                      <span className="form-checkbox">
                        <span className="form-checkbox-input">
                          <input type="checkbox" className="form-control" id="exampleCheck1" />
                        </span>
                        <label className="form-checkbox-label" htmlFor="exampleCheck1">წავიკითხე და ვეთანხმები რეგისტრაციის წესებს და
                          პირობებს</label>
                      </span>
                    </div>
                    <button type="submit" className="btn btn-lg btn-block btn-warning text-uppercase">
                      რეგისტრაცია
                    </button>
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
