import React from 'react'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
    const arrivalStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 1rem'
    };

    const arrivalHeader = {
        textAlign: 'center',
        marginBottom: '2rem'
    };

    const arrivalTitle = {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem'
    };

    const arrivalSubtitle = {
        color: '#6c757d',
        marginBottom: '2rem'
    };

    const arrivalGrid = {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '4rem'
        };

    const items = [
        {
            brand: "ARROW",
            name: 'Gray white HM',
            price: '390',
            image: '/assets/shirt3.jpg',
            rating: 5,
            id: 1, category: 'Men Shirt',
            discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
        },
        {
            brand: "ALLENSOLLY",
            name: 'Red Beach HM',
            price: '490',
            image: '/assets/shirt4.jpg',
            rating: 5,
            id: 2, category: 'Men Shirt',
            discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
        },
        {
            brand: "TOMMY HILFIGHER",
            name: 'Blue Beach HM',
            price: '490',
            image: '/assets/shirt5.jpg',
            rating: 5,
            id: 3, category: 'Men Shirt',
            discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
        },
        {
            brand: "ALLENSOLLY",
            name: 'Black white HM',
            price: '590',
            image: '/assets/shirt6.jpg',
            rating: 5,
            id: 4, category: 'Men Shirt',
            discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
        },
        {
            brand: "RAYMOND",
            name: 'Cream white Line',
            price: '990',
            image: '/assets/shirt7.jpg',
            rating: 5,
            id: 5, category: 'Men Shirt',
            discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
        },
        {
            brand: "LOISE PHILIPPE",
            name: 'White Single HM',
            price: '790',
            image: '/assets/shirt8.jpg',
            rating: 5,
            id: 6, category: 'Men Shirt',
            discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
        },
        {
            brand: "ARROW",
            name: 'Sea Violet HM',
            price: '490',
            image: '/assets/shirt9.jpg',
            rating: 5,
            id: 7, category: 'Men Shirt',
            discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
        },
        {
            brand: "BLACK BERRYS",
            name: 'Light Blue Single',
            price: '490',
            image: '/assets/shirt10.jpg',
            rating: 5,
            id: 8, category: 'Men Shirt',
            discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
        },
        {
            brand: "PETER LEGEND",
            name: 'Ocean Blue HM',
            price: '990',
            image: '/assets/shirt11.jpg',
            rating: 5,
            id: 9, category: 'Men Shirt',
            discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
        },
        {
            brand: "PETER LEGEND",
            name: 'Dynamic Pink HM',
            price: '890',
            image: '/assets/shirt12.jpg',
            rating: 5,
            id: 10, category: 'Men Shirt',
            discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
        },
        {
            brand: "LOISE PHILIPPE",
            name: 'Sharp Blue Line',
            price: '1290',
            image: '/assets/shirt13.jpg',
            rating: 5,
            id: 11, category: 'Men Shirt',
            discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
        }

    ]
console.log("All IDs:", items.map(item => item.id));

    return (
        <div style={arrivalStyle}>
            <div style={arrivalHeader}>
                <h2 style={arrivalTitle}>New Arrivals</h2>
                <p style={arrivalSubtitle}>Summer Collection New Modern Design</p>
            </div>
            <div style={arrivalGrid}>
                {items?.length > 0 ? (
                    items.map((item) => (
                        <Link style={{ textDecoration: 'none' }}  to={`/product/${item.id}`}>
                            <ProductCard {...item} key={item.id} />
                        </Link>
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    )
}

export default NewArrivals