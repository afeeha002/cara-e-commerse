import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const ProductCard = ({ brand, name, price,  image }) => {
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

  const buttonStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '1px solid #0d6efd',
    backgroundColor: 'transparent',
    color: '#0d6efd',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'start',
    cursor: 'pointer',
    padding: '8px',
    transition: 'all 0.2s ease',
    position: 'absolute',  
    top: '0',          
    right: '0',           
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
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
         <button
             onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
             onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
       
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



// const FeaturedProducts = () => {
//   const containerStyle = {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '3rem 1rem'
//   };

//   const headerStyle = {
//     textAlign: 'center',
//     marginBottom: '2rem'
//   };

//   const titleStyle = {
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     marginBottom: '0.5rem'
//   };

//   const subtitleStyle = {
//     color: '#6c757d',
//     marginBottom: '2rem'
//   };

//   const gridStyle = {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     gap: '1rem'
//   };

//   const products = [
//     {
//       brand: 'RAYMOND',
//       name: 'Dyno White HM',
//       price: '1290',
//       image: 'cara/public/assets/tshirt1.jpg',
//       rating: 5
//     },
//     {
//       brand: 'BLACK BERRYS',
//       name: 'Diamond Blue HM',
//       price: '290',
//       image: 'cara/public/assets/tshirt2.jpg',
//       rating: 5
//     },
//     {
//       brand: 'LOUISE',
//       name: 'Demo Grey Slim',
//       price: '390',
//       image: 'cara/public/assets/tshirt3.jpg',
//       rating: 5
//     },
//     {
//       brand: 'LOUISE',
//       name: 'Demo Grey Slim',
//       price: '390',
//       image: 'cara/public/assets/tshirt4.jpg',
//       rating: 5
//     },

//     {
//       brand: 'LOUISE',
//       name: 'Black Hoodie',
//       price: '1200',
//       image: 'cara/public/assets/hoodie1.jpg',
//       rating: 5
//     },
//     {
//       brand: 'LOUISE',
//       name: 'Silver Hoodie',
//       price: '1190',
//       image: 'cara/public/assets/hoodie2.jpg',
//       rating: 5
//     },
//     {
//       brand: 'LOUISE',
//       name: 'Deep Blue Hoodie',
//       price: '990',
//       image: 'cara/public/assets/hoodie3.jpg',
//       rating: 5
//     },
//     {
//       brand: 'LOUISE',
//       name: 'Nebula Red Hoodie',
//       price: '1790',
//       image: 'cara/public/assets/hoodie4.jpg',
//       rating: 5
//     },
//     {
//         brand: 'LOUISE',
//         name: 'Classic Hoodie',
//         price: '1790',
//         image: 'cara/public/assets/hoodie5.jpg',
//         rating: 5
//       }
//   ];
//   return (
//     <div style={containerStyle}>
//       <div style={headerStyle}>
//         <h2 style={titleStyle}>Featured Products</h2>
//         <p style={subtitleStyle}>Summer Collection New Modern Design</p>
//       </div>
//       <div style={gridStyle}>
//         {products.map((product) => (
//           <ProductCard key={product.name} {...product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedProducts;

import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '3rem 1rem'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '2rem'
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  };

  const subtitleStyle = {
    color: '#6c757d',
    marginBottom: '2rem'
  };

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem'
  };

  const products = [
    {
      brand: 'RAYMOND',
      name: 'Dyno White HM',
      price: '1290',
      image: 'cara/public/assets/tshirt1.jpg',
      rating: 5
    },
    {
        brand: 'BLACK BERRYS',
        name: 'Diamond Blue HM',
        price: '290',
        image: 'cara/public/assets/tshirt2.jpg',
        rating: 5
      },
      {
        brand: 'LOUISE',
        name: 'Demo Grey Slim',
        price: '390',
        image: 'cara/public/assets/tshirt3.jpg',
        rating: 5
      },
      {
        brand: 'LOUISE',
        name: 'Demo Grey Slim',
        price: '390',
        image: 'cara/public/assets/tshirt4.jpg',
        rating: 5
      },
  
      {
        brand: 'LOUISE',
        name: 'Black Hoodie',
        price: '1200',
        image: 'cara/public/assets/hoodie1.jpg',
        rating: 5
      },
      {
        brand: 'LOUISE',
        name: 'Silver Hoodie',
        price: '1190',
        image: 'cara/public/assets/hoodie2.jpg',
        rating: 5
      },
      {
        brand: 'LOUISE',
        name: 'Deep Blue Hoodie',
        price: '990',
        image: 'cara/public/assets/hoodie3.jpg',
        rating: 5
      },
      {
        brand: 'LOUISE',
        name: 'Nebula Red Hoodie',
        price: '1790',
        image: 'cara/public/assets/hoodie4.jpg',
        rating: 5
      },
      {
          brand: 'LOUISE',
          name: 'Classic Hoodie',
          price: '1790',
          image: 'cara/public/assets/hoodie5.jpg',
          rating: 5
        }
  ];

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Featured Products</h2>
        <p style={subtitleStyle}>Summer Collection New Modern Design</p>
      </div>
      <div style={gridStyle}>
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;