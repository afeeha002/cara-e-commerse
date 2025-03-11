import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
  
      <div className="footer">
        <div className="newsletter">
          <div
            style={{ paddingLeft: "30px" }}
            className="newsText w-50 d-flex justify-content-center flex-column"
          >
            <h2>Sign up for Newsletters</h2>
            <h6 style={{ fontWeight: "300" }}>
              Get E-mail updates about out latest shop and{" "}
              <span style={{ color: "#ffbd27" }}>special offers</span>
            </h6>
          </div>
          <div className="newsMail w-50 d-flex justify-content-center align-items-center ">
            <input
              type="text"
              placeholder="Your emial address"
              style={{ borderRadius: "0px", height: "38px", width: "50%" }}
            />
            <button
              type="button"
              style={{ borderRadius: "0px" }}
              class="btn btn-success"
            >
              SignUp
            </button>
          </div>
        </div>
        <div className="aboutSection">
          <div className="aboutLeft">
            <div className="section1">
              <div className="flipLogo"></div>
              <h5>Contact</h5>
              <h6>
                <span>Address : </span> 80/A Sidheekhabadh, Kondotty,
                Malappuram.
              </h6>
              <h6>
                <span>Phone : </span>0483 8698620
              </h6>
              <h6>
                <span>Hours : </span>10 am To 6 pm
              </h6>
            </div>
            <div className="section2">
              <h5>About</h5>
              <h6>Aboout us</h6>
              <h6>Delivery Information</h6>
              <h6>Privacy Policy</h6>
              <h6>Terms & Conditions</h6>
              <h6>Contact Us</h6>
            </div>
          </div>
          <div className="aboutRight">
            <div className="section3">
              <h5>My Account</h5>
              <h6>Sign in</h6>
              <h6>View Cart</h6>
              <h6>My Wishlist</h6>
              <h6>Track My Order</h6>
              <h6>Help</h6>
            </div>
            <div className="section4">
              <h5>Install App</h5>
              <h6>From Apple Store or Google Play</h6>
              <div className="appleGoogle">
                <div className="appleStore"></div>
                <div className="playStore"></div>
              </div>
              <h6>Secured Payment Gateways</h6>
              <div className="gateway"></div>
            </div>
          </div>
        </div>
        <div className="copyRight w-100 d-flex justify-content-center align-items-center text-center">
          @2024, E-commerce Website - MyReact FirstApp
        </div>
      </div>

  )
}

export default Footer