// import '../Services/Services.css';
import Navbar from "../navbar/Navbar";
import React, { Fragment } from "react";

const Checkout = () => {

  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <h2 className="text-center">Checkout</h2>
          <hr />
        </div>
        <div className="col-sm-8 text-center">
          <h3>Horseback Riding<strong> $50</strong></h3>
          <br />
          <h3>1 Dozen Eggs<strong> $2</strong></h3>
          <br />
          <h3>1 Campsite<strong> $35</strong></h3>
        </div>
        <div className="col-sm-4 text-center bg-grey">
          <div className="checkout-head">
            <h1>Summary</h1>
          </div>
          <h1 className="cart-summary-txt">Sub-total <strong> $87</strong></h1>
          <hr />
          <h1 className="cart-summary-txt">Discount<strong>$5</strong></h1>
          <hr />
          <h1 className="cart-summary-txt">Total<strong>$82</strong></h1>
          <button className="btn btn-lg checkout-btn">Check Out</button>
        </div>
      </div>
    </Fragment>
  )
}

export default Checkout;