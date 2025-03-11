import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import './maincart.css'

const Maincart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateCartQuantity } = useCart();

  // Estimated delivery date (3 days from now)
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 3);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-GB", options);

  const [totalPrice, setTotalPrice] = useState(0); 

  useEffect(() => {
    const total = cart.reduce((sum, item) => {
      const price = parseFloat(item.price) || 0;
      const quantity = item.quantity || 1;
      return sum + price * quantity;
    }, 0);
    setTotalPrice(total);
  }, [cart]);

  const goToProducts = () => {
    navigate("/product");
  };

  function truncateText(text, maxLength) {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > maxLength ? words.slice(0, maxLength).join(" ") + "..." : text;
  }

  return (
    <div className="maincartContainer">
      <div className="left">
        <div className="cartCount">
          Cart <span className="countGrey">{cart.length} items</span>
        </div>

        {cart.length === 0 ? (
          <div className="emptyCart">
            Cart is empty, Please Select a Product First!
            <button className="btn btn-success mt-3" onClick={goToProducts}>
              Go to Products
            </button>
          </div>
        ) : (
          cart.map((product, index) => {
            const truncatedParagraph = truncateText(product.description, 10);
            const price = parseFloat(product.price) || 0;
            const quantity = product.quantity || 1;

            return (
              <div key={index} className="card mb-3 shadow-sm">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid rounded-start"
                      style={{ height: "120px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-6 d-flex flex-column justify-content-center">
                    <div className="card-body">
                      <h6 className="card-title">{product.name}</h6>
                      <p className="card-text">{truncatedParagraph}</p>
                      <h6 className="text-success">&#8377; {price.toFixed(2)}</h6>

                      {/* Quantity Controls */}
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => updateCartQuantity(product.id, quantity - 1)}
                        disabled={quantity < 1}
                      >
                        -
                      </button>
                      <span className="mx-2">{quantity}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => updateCartQuantity(product.id, quantity + 1)}
                      >
                        +
                      </button>

                    </div>
                  </div>
                  <div className="col-md-3 d-flex align-items-center justify-content-center">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Right Section - Order Summary */}
      <div className="right">
        <div className="amountDisplay">
          <div className="summery">
            <h4>Order Summary</h4>
          </div>
          <div className="totalprice">
            <div>Price</div>
            <div>Rs {totalPrice?.toFixed(2) || "0.00"}</div>
          </div>
          <div className="discount">
            <div>Discount</div>
            <div>Rs {(totalPrice * 0.1).toFixed(2)}</div>
          </div>
          <div className="shipping">
            <div>Shipping</div>
            <div className="free">Free</div>
          </div>
          <div className="coupen">
            <div>Coupon Applied</div>
            <div>None</div>
          </div>
          <hr style={{ width: "100%" }} />
          <div className="totalamountShow">
            <div>Total Amount</div>
            <div className="amount">Rs {(totalPrice - totalPrice * 0.1).toFixed(2)}</div>
          </div>
          <div className="deliverydate">
            <div>Estimated Delivery by</div>
            <div className="dateDiv">{formattedDate}</div>
          </div>
          <div className="buttons">
            <Link to="address">
              <button className="addAdress">Add Address</button>
            </Link>
            <button className="buynowBtn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincart;
