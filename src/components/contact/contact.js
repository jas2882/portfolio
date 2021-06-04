// import '../Contact/Contact.css';
import React, {Fragment} from "react";
import Navbar from "../navbar/Navbar";

const Contact = () => {


  return (
    <>
      <div className="container-fluid text-center contact-wrapper">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">Email</label>
            <input type="submit" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <div id="container">
          <div id="part1">
            <div className="row header" id="companyInfo"><a id="sitelink" href="#">Equine Harmony Ranch</a>
              <p id="title"><strong>Learn to ride</strong></p>
              <p id="detail">This would be an amazing spot for a quote... just saying.</p>
            </div>

            <div className="row-2 row">

              <div className="footer-card centerize col-4" id="explore">
                <p id="txt1">Explore</p>
                <a className="link" href="#">Home</a>
                <a className="link" href="#">About</a>
                <a className="link" href="#">Snippet</a>
                <a className="link" href="#">Careers</a>
              </div>


              <div className="img-fluid footer-card logo col-4" id="visit">
              </div>


              <div className="footer-card col-4" id="subscribe">
                <p id="txt4">Subscribe to US</p>
                <form><input id="email" type="email" placeholder="Email"/>
                  <a className="waves-effect waves-light btn">Subscribe</a>
                  <p id="txt5">Connect With US</p>
                  <i className="fas fa-facebook-square social fa-2x"/>
                  <i className="fas fa-linkedin social fa-2x"/>
                  <i className="fas fa-twitter-square social fa-2x"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;