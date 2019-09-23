// @flow strict-local
// Auto Generated, Don't Modify Manually

import Footer from 'jsx_of_html/partials/Footer'
import Header from 'jsx_of_html/partials/Header'
import React from 'react'

export default function Donate (_: {||}): React$Node {
  return (
    <>
      <Header />
      <div className='bg-gradient-green overflow-hidden'>
        <div className='container'>
          {/* Start of head */}
          <div className='text-center py-4 py-sm-6'>
            <h5 className='text-white text-uppercase font-weight-bold font-size-5'>
              გახდი პარტნიორი
            </h5>
            <p className='text-white font-size-3 mb-0'>
              დააფინანსე გირჩი, მიიღე შესაბამისი რაოდენობის GeD-ები და მოხვდი
              ლიდერბორდში
            </p>
          </div>
          {/* End of head */}
          {/* Start of card */}
          <div className='card mb-4 mb-sm-8'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-12 col-lg-6'>
                  <div className='px-md-8  px-lg-4 px-xl-8 py-3  py-2 py-md-3  py-xl-4'>
                    <ul className='nav nav-tabs nav-justified' id='myTab' role='tablist'>
                      <li className='nav-item'>
                        <a className='nav-link active text-uppercase py-3' id='single-donation-tab' data-toggle='tab' href='#' role='tab' aria-controls='single-donation' aria-selected='true'>ერთჯერადი</a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link text-uppercase py-3' id='multiple-donation-tab' data-toggle='tab' href='#' role='tab' aria-controls='multiple-donation' aria-selected='false'>მრავალჯერადი</a>
                      </li>
                    </ul>
                    <div className='tab-content' id='myTabContent'>
                      <div className='tab-pane fade show active' id='single-donation' role='tabpanel' aria-labelledby='single-donation-tab'>
                        <form action>
                          <p className='d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-center justify-content-md-between my-2 my-sm-4'>
                            <img src='./images/payment-methods/tbc-logo-ka-ge.svg' alt='' className='mt-2 mt-sm-0 mr-3 mr-sm-0' height={17} />
                            <img src='./images/payment-methods/bog-geo-horizontal.png' alt='' className='mt-2 mt-sm-0 mr-3 mr-sm-0' height={17} />
                            <img src='./images/payment-methods/liberty-geo.svg' alt='' className='mt-2 mt-sm-0 mr-3 mr-sm-0' height={12} />
                            <img src='./images/payment-methods/visa.png' alt='' className='mt-2 mt-sm-0 mr-3 mr-sm-0' height={12} />
                            <img src='./images/payment-methods/mc.svg' alt='' className='mt-2 mt-sm-0 mr-3 mr-sm-0' height={17} />
                          </p>
                          <hr className='border-dashed border-secondary' />
                          <div className='d-flex flex-wrap flex-sm-nowrap'>
                            <div className='form-group w-100 w-md-50 pr-sm-2'>
                              <label className='form-label' htmlFor='amount'>თანხა</label>
                              <input type='number' className='form-control form-control-lg' id='amount' placeholder='მიუთითეთ თანხა' />
                            </div>
                            <div className='form-group w-100 w-md-50'>
                              <label className='form-label'>თქვენ ჩაგერიცხებათ</label>
                              <div className='text-success font-size-5 d-flex pl-3 pt-2'>
                                <i className='icon-ged' />
                                <span className='ml-1'>15 000</span>
                              </div>
                            </div>
                          </div>
                          <div className='form-group'>
                            <label className='form-label' htmlFor='description'>დაფინანსების მიზანი</label>
                            <div className='form-control form-control-lg'>
                              <select name='description' id='description'>
                                <option value>აირჩიეთ</option>
                                <option value={1}>მიზანი 1</option>
                                <option value={2}>მიზანი 2</option>
                              </select>
                            </div>
                          </div>
                          <button type='submit' className='btn btn-lg btn-block btn-warning text-uppercase mt-4'>
                            დაფინანსება
                          </button>
                        </form>
                      </div>
                      <div className='tab-pane fade' id='multiple-donation' role='tabpanel' aria-labelledby='multiple-donation-tab'>
                        <form action>
                          <p className='d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-center justify-content-md-between my-2 my-sm-4'>
                            <img src='./images/payment-methods/tbc-logo-ka-ge.svg' alt='' className='mt-2 mt-sm-0 mr-3 mr-sm-0' height={17} />
                            <img src='./images/payment-methods/bog-geo-horizontal.png' alt='' className='mt-2 mt-sm-0 mr-3 mr-sm-0' height={17} />
                            <img src='./images/payment-methods/liberty-geo.svg' alt='' className='mt-2 mt-sm-0 mr-3 mr-sm-0' height={12} />
                            <img src='./images/payment-methods/visa.png' alt='' className='mt-2 mt-sm-0 mr-3 mr-sm-0' height={12} />
                            <img src='./images/payment-methods/mc.svg' alt='' className='mt-2 mt-sm-0 mr-3 mr-sm-0' height={17} />
                          </p>
                          <hr className='border-dashed border-secondary' />
                          <div className='d-flex flex-wrap flex-sm-nowrap'>
                            <div className='form-group form-group w-100 w-md-50 pr-sm-2'>
                              <label className='form-label' htmlFor='amount'>თანხა</label>
                              <input type='number' className='form-control form-control-lg' id='amount' placeholder='მიუთითეთ თანხა' />
                            </div>
                            <div className='form-group w-100 w-md-50'>
                              <label className='form-label'>თქვენ ჩაგერიცხებათ</label>
                              <div className='text-success font-size-5 d-flex pl-3 pt-2'>
                                <i className='icon-ged' />
                                <span className='ml-1'>15 000</span>
                              </div>
                            </div>
                          </div>
                          <div className='d-flex flex-wrap flex-sm-nowrap'>
                            <div className='form-group w-100 w-md-50 pr-sm-2'>
                              <label className='form-label' htmlFor='period'>პერიოდულობა</label>
                              <div className='form-control form-control-lg'>
                                <select name='period' id='period'>
                                  <option value>აირჩიეთ</option>
                                  <option value={3}>3 თვე</option>
                                  <option value={2}>6 თვე</option>
                                </select>
                              </div>
                            </div>
                            <div className='form-group w-100 w-md-50  pl-sm-2'>
                              <label className='form-label' id='date'>გადახდის თარიღი</label>
                              <input type='number' className='form-control form-control-lg' id='date' placeholder='თარიღი' />
                            </div>
                          </div>
                          <div className='form-group'>
                            <label className='form-label' htmlFor='description'>დაფინანსების მიზანი</label>
                            <div className='form-control form-control-lg'>
                              <select name='description' id='description'>
                                <option value>აირჩიეთ</option>
                                <option value={1}>მიზანი 1</option>
                                <option value={2}>მიზანი 2</option>
                              </select>
                            </div>
                          </div>
                          <button type='submit' className='btn btn-lg btn-block btn-warning text-uppercase mt-4'>
                            დაფინანსება
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-12 col-lg-6'>
                  <div className='px-md-8 px-lg-3 px-xl-5 py-2 py-md-3  py-xl-4'>
                    <h6 className='text-uppercase text-success font-weight-bold my-3'>
                      მიიღე თანხის შესაბამისი GeD-ები
                    </h6>
                    <p className='font-size-2 text-grey'>
                      ყოველი შემოწირულობის გაკეთების დროს, სისტემა შესაბამის
                      ლარებს გადააკონვერტირებს იმ დღით არსებული კურსით დოლარში და
                      მიღებულ რიცხვი თქვენ დაგერიცხებათ როგორც GeD-ს.
                    </p>
                    <h6 className='text-uppercase text-success font-weight-bold mt-4 mb-3'>
                      განსაზღვრე შემოწირულობის მიზანი
                    </h6>
                    <p className='font-size-2 text-grey'>
                      ეს არააუცილებელი ველია, თუმცა, თქვენ გაქვთ შესაძლებლობა, რომ
                      წინასწარ შექმნილი სიიდან აირჩიოთ სად წავიდეს თქვენს მიერ
                      შემოწირული თანხა (“თარგმანების პროექტისთვის”, “სკოლისთვის”,
                      “ლეგალიზაციის კამპანიისთვის” და ა.შ.)
                    </p>
                    <h6 className='text-uppercase text-success font-weight-bold mt-4 mb-3'>
                      შექმენი ავტომატური გადარიცხვა
                    </h6>
                    <p className='font-size-2 text-grey'>
                      პირველ ჯერზე, თქვენ შეგყავთ თქვენი საბანკო ბარათის
                      მონაცემები, ხოლო შემდეგ, შევსებული ფორმის მიხედვით, სისტემა
                      ავტომატურად აკეთებს ტრანზაქციებს შესაბამისი თანხის და
                      პერიოდულობის გათვალისწინებით. მაგალითად ყოველ თვე 50 ლარი.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of card */}
        </div>
      </div>
      <Footer />
    </>
  )
}
