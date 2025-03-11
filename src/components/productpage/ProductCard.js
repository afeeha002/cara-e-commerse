import React,{useContext , useState} from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { CartContext } from '../cartpage/CartContext';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({ brand, name, price,  image }) => {
  const { id } = useParams();
  console.log("id is:", id)
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
   const{addToCart} = useContext(CartContext);

  const cardStyle = {
    width: '18rem',
    margin: '1rem',
    padding: '1rem',
    borderRadius: '15px',
    border: '1px solid #dee2e6',
    transition: 'all 0.3s ease',
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    cursor: 'pointer'
  };

  const hoverCardStyle = {
    ...cardStyle,
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
  };

  const imageStyle = {
    width: '100%',
    height: '280px',
    objectFit: 'cover',
    marginBottom: '1rem'
  };

  const brandStyle = {
    color: '#0d6efd',
    fontSize: '0.9rem',
    fontWeight: '500',
    marginBottom: '8px'
  };

  const nameStyle = {
    fontSize: '1.25rem',
    fontWeight: '500',
    marginBottom: '8px',
    color: '#212529'
  };

  const detailsContainerStyle = {
    position: 'relative' 
  };

  const ratingStyle = {
    display: 'flex',
    gap: '4px',
    marginBottom: '8px'  
  };

  const priceStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#212529'
  };

  const handleCardClick = (event) => {
    if (event.target.closest(".cart-button")) {
      event.stopPropagation(); 
      return;
    }
    if (!id) {
      console.error("Product ID is missing!");
      return;
    }
    navigate(`/product/${id}`);
  };
  


const handleCartClick = (event) => {
  event.stopPropagation();
  addToCart({ id, brand, name, price, image }); 
};



  return (
    <div onClick={handleCardClick} className='product-card'
      style={isHovered ? hoverCardStyle : cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={name} style={imageStyle} />
      <div style={detailsContainerStyle}>
        <div style={brandStyle}>{brand}</div>
        <div style={nameStyle}>{name}</div>
        <div style={ratingStyle}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="gold" color="gold" />
          ))}
        </div>
        <div style={priceStyle}>{price}/-</div>
         <button className='cart-button'
             onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
             onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
             onClick={handleCartClick}

            style={{
               backgroundColor: "transparent",
               color: "green",
               padding: "8px 12px",
               border: "2px solid green",
               borderRadius: "18px",
               position: "absolute",
               bottom: "10px",
               right: "10px",
               cursor: "pointer",
               transition: "all 0.3s ease",
         
       
             }}
           >
             <ShoppingCart
               size={20}
               className="cart-icon"
               style={{
                 transition: "transform 1.3s ease",
               }}
             />
             <style>
               {`
                 .cart-icon:hover {
                   transform: rotate(360deg);
                 }
               `}
             </style>
             
           </button>
      </div>
    </div>
  );
};

export default ProductCard