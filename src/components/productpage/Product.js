import React from 'react'
import './product.css'
import AllProducts from './AllProducts'

const Product = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/assets/b16.jpg" style={{ height: "400px", backgroundSize: "cover", backgroundPosition: "center" }} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h2 style={{ color: "black" }}>buy 1 get <span style={{ color: "red" }}>1 free</span></h2>
                            <p style={{ color: "black" }}>The best classic dress is on sale</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/b17.jpg" style={{ height: "400px", backgroundSize: "cover", backgroundPosition: "center" }} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <p style={{ color: "black" }}>crazy deals</p>
                            <h2 style={{ color: "black" }}>#stayhome</h2>
                            <p style={{ color: "black" }}>Save more with coupons & up to <span style={{ color: "red" }}>70% off!</span></p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/b18.jpg" style={{ height: "400px", backgroundSize: "cover", backgroundPosition: "center" }} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h2 style={{ color: "black" }}>SEASONAL SALE</h2>
                            <p style={{ color: "red" }}>Winter Collection -50% OFF</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <AllProducts />
        </div>
    )
}

export default Product