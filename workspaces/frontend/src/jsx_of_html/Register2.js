// @flow strict-local
// Auto Generated, Don't Modify Manually

import Footer from 'jsx_of_html/partials/Footer'
import Header from 'jsx_of_html/partials/Header'
import React from 'react'

export default function Register2 (_: {||}): React$Node {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='my-3 my-sm-4'>
          <div className='card'>
            <div className='card-body overflow-hidden p-3 py-md-4 px-md-4'>
              <div className='row'>
                <div className='col-xs-12 col-md-8 col-lg-6 m-auto'>
                  <h5 className='card-title text-center text-success font-weight-bold text-uppercase'>
                    რეგისტრაცია
                  </h5>
                  <h6 className='card-subtitle text-center mb-5'>
                    აირჩიეთ პოლიტიკოსი, მიუთითეთ თქვენი წონის რამდენი %-ით უჭერთ
                    მას მხარს და მიიღე მონაწილეობა პარტიული სიის ჩამოყალიბებაში.
                  </h6>
                  {/* Start of success message */}
                  {/* <div class="text-center">
                <span class="icon rounded bg-light text-success mb-2">
                  <i class="icon-checked"></i>
                </span>
                <h5
                  class="card-title  text-success font-weight-bold text-uppercase mb-0"
                >
                  გიორგი ბერიძე
                </h5>
                <h6 class="card-subtitle  mb-5">
                  წარმატებით დარეგისტრირდა
                </h6>
              </div> */}
                  {/* End of success message */}
                </div>
              </div>
              <hr className='my-0 mx-n5' />
              <div className='row'>
                <div className='col-xs-12 col-md-7 col-lg-4 m-auto'>
                  <form className='my-4'>
                    <div className='form-group'>
                      <label className='form-label' htmlFor='id-number'>პირადი ნომერი</label>
                      <input type='number' className='form-control form-control-lg' id='id-number' placeholder='მიუთითეთ პირადი ნომერი' />
                    </div>
                    <div className='form-group'>
                      <label className='form-label' htmlFor='fist-name'>სახელი</label>
                      <input type='text' className='form-control form-control-lg' id='first-name' placeholder='მიუთითეთ სახელი' />
                    </div>
                    <div className='form-group'>
                      <label className='form-label' htmlFor='last-name'>გვარი</label>
                      <input type='text' className='form-control form-control-lg' id='last-name' placeholder='მიუთითეთ გვარი' />
                    </div>
                    <div className='form-group'>
                      <label className='form-label' htmlFor='birth-date'>დაბადების თარიღი</label>
                      <input type='date' className='form-control form-control-lg' id='birth-date' placeholder='მიუთითეთ დაბადების თარიღი' />
                    </div>
                    <div className='form-group'>
                      <label className='form-label' htmlFor='phone-number'>მობილური</label>
                      <input type='text' className='form-control form-control-lg' id='phone-number' placeholder='მიუთითეთ მობილური' />
                    </div>
                    <div className='form-group'>
                      <label className='form-label' htmlFor='email'>ელ.ფოსტა</label>
                      <input type='email' className='form-control form-control-lg' id='email' placeholder='მიუთითეთ ელ.ფოსტა' />
                    </div>
                    <div className='form-group'>
                      <label className='form-label' htmlFor='ged'>GeD-ების რაოდენობა</label>
                      <input type='number' className='form-control form-control-lg' id='ged' placeholder='მიუთითეთ GeD-ების რაოდენობა' />
                    </div>
                    <button type='submit' className='btn btn-lg btn-block btn-warning text-uppercase mt-4'>
                      რეგისტრაცია
                    </button>
                    <hr className='mx-0 my-4 my-sm-5 mx-sm-n5' />
                    <a href='#' className='btn btn-lg  d-none d-sm-block btn-block btn-success text-uppercase'>
                      დარეგისტრირებულთა სია
                    </a>
                    <a href='#' className='btn btn-md d-block d-sm-none btn-block btn-success text-uppercase'>
                      დარეგისტრირებულთა სია
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
