import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productData from "./productpage/productData";
import { CartContext } from "./cartpage/CartContext";
import "./singlepage.css";

export default function SinglePage() {
  const { id } = useParams();
  const { cart, toggleCartItem } = useContext(CartContext);
  const [singleProduct, setSingleProduct] = useState();
  const [loading ,setLoading] = useState(true);
  const [color, setColor] = useState("none");
 console.log()
  useEffect(() => {
    const productId = Number(id);
    if (!isNaN(productId) && productId > 0) {
      const foundProduct = productData.find((product) => product.id === productId);
      setSingleProduct(foundProduct || null);
    } else {
      setSingleProduct(null);
    }
    setLoading(false);
  }, [id]);

  function changeColor() {
    setColor(color === "none" ? "red" : "none");
  }

  return (
    <div className="containerDetails">
      <div className="leftSide">
        <div className="catogory1">
          Category / <span>{singleProduct?.category}</span>
        </div>
        <div className="header1">{singleProduct?.name}</div>
        <div className="count1">
          <div className="rating1">Rating : {singleProduct?.rating}</div>
          <div className="sale1">Sold Count : {singleProduct?.price * 2}</div>
        </div>
        <div className="details1">{singleProduct?.discription}</div>
        <div className="colorBtn">
          {/* Check if product exists in cart to show correct button text */}
          <button onClick={() => toggleCartItem(singleProduct)} className="addCartBtn">
            {cart.some((item) => item.id === singleProduct?.id) ? "Remove Cart" : "Add to Cart"}
          </button>

          <div className="radioBtn">
            {singleProduct?.colors?.map((color, index) => (
              <button key={index} style={{ backgroundColor: color }}></button>
            ))}
          </div>
        </div>
        <div className="justText">
          Free 3-5 days shipping . Tool-free assembly . 30-day trial
        </div>
        <div className="whishList">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" onClick={changeColor}>
            <path fill={color} stroke="red" d="m7 12.45l-5.52-5c-3-3 1.41-8.76 5.52-4.1c4.11-4.66 8.5 1.12 5.52 4.1Z" />
          </svg>
          Add to Wishlist
        </div>
      </div>

      <div className="rightSide">
        <img src={singleProduct?.image} alt="i" className="photo1" />
      </div>
    </div>
  );
}
