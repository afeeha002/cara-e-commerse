const productData = [
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
    {
        brand: "ARROW",
        name: 'Gray white HM',
        price: '390',
        image: '/assets/shirt3.jpg',
        rating: 5,
        id: 10, category: 'Men Shirt',
        discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
    },
    {
        brand: "ALLENSOLLY",
        name: 'Red Beach HM',
        price: '490',
        image: '/assets/shirt4.jpg',
        rating: 5,
        id: 11, category: 'Men Shirt',
        discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
    },
    {
        brand: "TOMMY HILFIGHER",
        name: 'Blue Beach HM',
        price: '490',
        image: '/assets/shirt5.jpg',
        rating: 5,
        id: 12, category: 'Men Shirt',
        discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
    },
    {
        brand: "ALLENSOLLY",
        name: 'Black white HM',
        price: '590',
        image: '/assets/shirt6.jpg',
        rating: 5,
        id: 13, category: 'Men Shirt',
        discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
    },
    {
        brand: "RAYMOND",
        name: 'Cream white Line',
        price: '990',
        image: '/assets/shirt7.jpg',
        rating: 5,
        id: 14, category: 'Men Shirt',
        discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
    },
    {
        brand: "LOISE PHILIPPE",
        name: 'White Single HM',
        price: '790',
        image: '/assets/shirt8.jpg',
        rating: 5,
        id: 15, category: 'Men Shirt',
        discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
    },
    {
        brand: "ARROW",
        name: 'Sea Violet HM',
        price: '490',
        image: '/assets/shirt9.jpg',
        rating: 5,
        id: 16, category: 'Men Shirt',
        discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
    },
    {
        brand: "BLACK BERRYS",
        name: 'Light Blue Single',
        price: '490',
        image: '/assets/shirt10.jpg',
        rating: 5,
        id: 17, category: 'Men Shirt',
        discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
    },
    {
        brand: "PETER LEGEND",
        name: 'Ocean Blue HM',
        price: '990',
        image: '/assets/shirt11.jpg',
        rating: 5,
        id: 18, category: 'Men Shirt',
        discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
    },
    {
        brand: "PETER LEGEND",
        name: 'Dynamic Pink HM',
        price: '890',
        image: '/assets/shirt12.jpg',
        rating: 5,
        id: 19, category: 'Men Shirt',
        discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
    },
    {
        brand: "LOISE PHILIPPE",
        name: 'Sharp Blue Line',
        price: '1290',
        image: '/assets/shirt13.jpg',
        rating: 5,
        id: 20, category: 'Men Shirt',
        discription: 'Indulge in effortless sophistication with our Shirt, a timeless essential that seamlessly blends comfort and style. Crafted from premium, breathable fabric, this shirt is designed to keep you feeling cool and confident all day long.Our commitment to quality shines through in every stitch. Made from premium materials and expert craftsmanship, our shirt promises durability and long-lasting wear, ensuring it remains a staple piece in your collection for years to come.'
    }
];

export default productData;
