import React from "react";
import "./about.css";
import Footer from "../Footer";


export default function About() {
  return (
    <div style={{ marginTop: "60px" }} className="aboutContainer">
      <div className="KnowUs">
        <h1 style={{ fontSize: "calc(1.375rem + 1.5vw)", fontWeight: "400" }}>
          #KnowUs
        </h1>
        <h6
          style={{ fontSize: "1.2rem", fontWeight: "300", textAlign: "center" }}
        >
          Modern Basics. Radical Transparency
        </h6>
      </div>
      <div className="weAreContainer">
        <div className="imageBox">
          <img
            src="https://www.noiise.com/wp-content/uploads/2023/11/definition-ecommerce.jpg.webp"
            alt=""
          />
        </div>
        <div className="textBox">
          <h1
            style={{ fontSize: "clamp(25px, 2.4vw, 35px)", fontWeight: "600" }}
          >
            Who We Are?
          </h1>
          <p
            style={{ fontSize: "clamp(14px, 1.5vw, 18px)", fontWeight: "400" }}
          >
            An e-commerce website is one that allows people to buy and sell
            physical goods, services, and digital products over the internet
            rather than at a brick-and-mortar location. Through an e-commerce
            website, a business can process orders, accept payments, manage
            shipping and logistics, and provide customer service.Create stunning
            images with as much or as little control as you like thanks to a
            choice of Basix and Creative modes.
          </p>
        </div>
      </div>
      <div className="locationContainer">
        <div className="adressBox">
          <h6>GET IN TOUCH</h6>
          <h2>Visit one of our agency today</h2>
          <h6>Head Office</h6>
          <p><i class="bi bi-map"> </i> 80/A Sidheekhabadh, Kondotty, Kerala.</p>
          <p><i class="bi bi-envelope-at"> </i> EuropianFashion@gmail.com</p>
          <p><i class="bi bi-telephone"> </i> +91 123456789</p>
          <p><i class="bi bi-clock"> </i> Monday to Saturday: 9.00am to 16.00pm</p>
        </div>
        <div className="locationBox">
          <div className="map">
            <iframe
              title="kondottyLocation"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7996.74250290075!2d75.96155205039868!3d11.146580468203826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64ee2471144f5%3A0x8692de4117c315d!2sKondotty%2C%20Kerala%20673638!5e0!3m2!1sen!2sin!4v1712170911127!5m2!1sen!2sin"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
