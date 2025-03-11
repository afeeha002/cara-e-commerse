import React from "react";
import Banner from "./Banner";
import Footer from "../Footer";
import FeaturedProducts from "../productpage/FeaturedProducts";
import Advertise from "./Advertise";
import { NavLink } from "react-router-dom";
import NewArrivals from "../productpage/NewArrivals";


const Firstpage = () => {
  return (
    <div className="container-fluid p-0 " style={{ overflowX: "hidden" }}>

      <div className="container mt-5">
        <div className="row align-items-center p-0">
          <div className="col-md-6 text-center mt-5">
            <img
              src="https://img.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-glasses-isolated_158538-8561.jpg?w=900&t=st=1711610793~exp=1711611393~hmac=9185bfe685e05a68189382483cd4b28f6d334951fa7098705b715200da74cca2"
              alt="fashion model"
              style={{
                width: "100%",
                maxWidth: "480px",
                height: "600px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="col-md-6 text-start me-6  ">
            <h6 style={{ color: "#6c757d" }}>Trade-in-offer</h6>
            <h1 style={{ fontWeight: "bold", color: "#000000" }}>
              Super value Deals <br />
              <span style={{ color: "#008374" }}>On all products</span>
            </h1>
            <p style={{ color: "blue" }}>Save more with coupons & up to 70% off!</p>
            <NavLink to="/product" className={({ isActive }) => isActive ? 'active' : ''}>
              <button
                className="btn rounded-pill px-4"
                onMouseOver={(e) => {
                  e.target.style.boxShadow = "0px 6px 15px rgba(39, 63, 214, 0.7)";
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                  e.target.style.boxShadow = "0px 4px 10px rgba(20, 22, 32, 0.5)";
                  e.target.style.transform = "scale(1)";
                }}
              >
                SHOP NOW
                <span style={{ marginLeft: "10px", fontSize: "20px", fontWeight: "bold" }}>→</span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <FeaturedProducts />
      <Banner />
      <NewArrivals />
      <Advertise />
      <Footer />


    </div>
  )
};
export default Firstpage;