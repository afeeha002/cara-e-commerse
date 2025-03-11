import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';


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
    gap: '4rem'
  };

  const products = [
    {
      brand: 'RAYMOND',
      name: 'Dyno White HM',
      price: '1290',
      image: '/assets/tshirt1.jpg',
      rating: 5,
      id: 1,
      category: 'Men Shirt',
      discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'

  },
  {
      brand: 'BLACK BERRYS',
      name: 'Diamond Blue HM',
      price: '290',
      image: '/assets/tshirt2.jpg',
      rating: 5,
      id: 2,
      category: 'Men Shirt',
      discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
  },
  {
      brand: 'LOUISE',
      name: 'Demo Grey Slim',
      price: '390',
      image: '/assets/tshirt3.jpg',
      rating: 5,
      id: 3,
      category: 'Men Shirt',
      discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
  },
  {
      brand: 'LOUISE',
      name: 'Demo Grey Slim',
      price: '390',
      image: '/assets/tshirt4.jpg',
      rating: 5,
      id: 4,
      category: 'Men Shirt',
      discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
  },

  {
      brand: 'LOUISE',
      name: 'Black Hoodie',
      price: '1200',
      image: '/assets/hoodie1.jpg',
      rating: 5,
      id: 5,
      category: 'Men Shirt',
      discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
  },
  {
      brand: 'LOUISE',
      name: 'Silver Hoodie',
      price: '1190',
      image: '/assets/hoodie2.jpg',
      rating: 5,
      id: 6, category: 'Men Shirt',
      discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
  },
  {
      brand: 'LOUISE',
      name: 'Deep Blue Hoodie',
      price: '990',
      image: '/assets/hoodie3.jpg',
      rating: 5,
      id: 7, category: 'Men Shirt',
      discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'

  },
  {
      brand: 'LOUISE',
      name: 'Nebula Red Hoodie',
      price: '1790',
      image: '/assets/hoodie4.jpg',
      rating: 5,
      id: 8, category: 'Men Shirt',
      discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
  },
  {
      brand: 'LOUISE',
      name: 'Classic Hoodie',
      price: '1790',
      image: '/assets/hoodie5.jpg',
      rating: 5,
      id: 9, category: 'Men Shirt',
      discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
  },
  ];
  console.log("All Products:", products.map(Product=> Product.id));


  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Featured Products</h2>
        <p style={subtitleStyle}>Summer Collection New Modern Design</p>
      </div>
      <div style={gridStyle}>
      {products?.length > 0 ? (
                    products.map((product) => (
                        <Link style={{ textDecoration: 'none' }}  to={`/product/${product.id}`}>
                            <ProductCard {...product} key={product.id} />
                         </Link>
                    ))
                ) : (
                    <p>No products available.</p>
                )}
      </div>
    </div>
  );
};

export default FeaturedProducts;