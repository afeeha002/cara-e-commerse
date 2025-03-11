import React from 'react'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

 const AllProducts = () => {
    const productStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 1rem'
    };

    const productgrid= {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px', 
    };

    // const productItem = {
    //   flex: '1 1 calc(25% - 20px)', // 25% width for 4 items in a row
    //   maxWidth: 'calc(25% - 20px)', // Ensures it doesn't grow too large
    //   boxSizing: 'border-box',
    // };

const elements =[
    {
        brand: 'RAYMOND',
        name: 'Dyno White HM',
        price: '1290',
        image: '/assets/tshirt1.jpg',
        rating: 5,
        id:1
      },
      {
          brand: 'BLACK BERRYS',
          name: 'Diamond Blue HM',
          price: '290',
          image: '/assets/tshirt2.jpg',
          rating: 5,
          id:2
        },
        {
          brand: 'LOUISE',
          name: 'Demo Grey Slim',
          price: '390',
          image: '/assets/tshirt3.jpg',
          rating: 5,
          id:3
        },
        {
          brand: 'LOUISE',
          name: 'Demo Grey Slim',
          price: '390',
          image: '/assets/tshirt4.jpg',
          rating: 5,
          id:4
        },
    
        {
          brand: 'LOUISE',
          name: 'Black Hoodie',
          price: '1200',
          image: '/assets/hoodie1.jpg',
          rating: 5,
          id:5
        },
        {
          brand: 'LOUISE',
          name: 'Silver Hoodie',
          price: '1190',
          image: '/assets/hoodie2.jpg',
          rating: 5,
          id:6
        },
        {
          brand: 'LOUISE',
          name: 'Deep Blue Hoodie',
          price: '990',
          image: '/assets/hoodie3.jpg',
          rating: 5,
          id:7
        
        },
        {
          brand: 'LOUISE',
          name: 'Nebula Red Hoodie',
          price: '1790',
          image: '/assets/hoodie4.jpg',
          rating: 5,
          id:8
        },
        {
            brand: 'LOUISE',
            name: 'Classic Hoodie',
            price: '1790',
            image: '/assets/hoodie5.jpg',
            rating: 5,
            id:9
          },
          {
            brand: "ARROW",
            name: 'Gray white HM',
            price: '390',
            image:'/assets/shirt3.jpg' ,
            rating: 5,
            id:10
        },
        {
            brand: "ALLENSOLLY",
            name: 'Red Beach HM',
            price: '490',
            image:'/assets/shirt4.jpg' ,
            rating: 5,
            id:11
        },
        {
            brand: "TOMMY HILFIGHER",
            name: 'Blue Beach HM',
            price: '490',
            image:'/assets/shirt5.jpg' ,
            rating: 5,
            id:12
        },
        {
            brand: "ALLENSOLLY",
            name: 'Black white HM',
            price: '590',
            image:'/assets/shirt6.jpg' ,
            rating: 5,
            id:13
        },
        {
            brand: "RAYMOND",
            name: 'Cream white Line',
            price: '990',
            image:'/assets/shirt7.jpg' ,
            rating: 5,
            id:14
        },
        {
            brand: "LOISE PHILIPPE",
            name: 'White Single HM',
            price: '790',
            image:'/assets/shirt8.jpg' ,
            rating: 5,
            id:15
        },
        {
            brand: "ARROW",
            name: 'Sea Violet HM',
            price: '490',
            image:'/assets/shirt9.jpg',
            rating: 5,
            id:16
        },
        {
            brand: "BLACK BERRYS",
            name: 'Light Blue Single',
            price: '490',
            image :'/assets/shirt10.jpg',
            rating: 5,
            id:17
        },
        {
            brand: "PETER LEGEND",
            name: 'Ocean Blue HM',
            price: '990',
            image:'/assets/shirt11.jpg' ,
            rating: 5,
            id:18
        },
        {
            brand: "PETER LEGEND",
            name: 'Dynamic Pink HM',
            price: '890',
            image:'/assets/shirt12.jpg' ,
            rating: 5,
            id:19
        },
        {
            brand: "LOISE PHILIPPE",
            name: 'Sharp Blue Line',
            price: '1290',
            image:'/assets/shirt13.jpg' ,
            rating: 5,
            id:20
        }

]

  return (
    <div style={productStyle}>
         <div style={productgrid}>
            {elements.map((element) => (
                <Link style={{ textDecoration: 'none' }}to={`/product/${element.id}`}>
                  <ProductCard {...element} key={element.id} />
                </Link>
            ))}
        </div>
    </div>

  )
}

export default AllProducts