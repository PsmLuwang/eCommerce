// banner
let autoScrollImgList = [
    'banner/img1.png',
    'banner/img2.jpg',
    'banner/img3.jpg',
    'banner/img4.png',
    'banner/img5.jpg',
]
// catagories
let catagory = [
    'All',
    'Traditional',
    'Shirt',
    'Pant',
    'Shoe',
    'Glass',
    'Watch',
    'Sport'
]
// products
let products = [
    {
        id : 12345,
        catagory : 'Shirt',
        name : 'Print Shirt 01',
        price : '399',
        description : 'Summer Colour Shirt',
        varient : [
            {
                display : 'show',
                src : 'a1.jpg',
                colour : 'Green',
                icon : 'fa-regular fa-heart',
            },
            {
                display : 'show',
                src : 'a2.jpg',
                colour : 'Red',
                icon : 'fa-regular fa-heart',
            },
            {
                display : 'hide',
                src : 'a3.jpg',
                colour : 'White',
                icon : 'fa-regular fa-heart',
            },
            {
                display : 'hide',
                src : 'a4.jpg',
                colour : 'Light Green',
                icon : 'fa-regular fa-heart',
            },
            {
                display : 'show',
                src : 'a5.jpg',
                colour : 'Brown',
                icon : 'fa-solid fa-heart',
            },
            {
                display : 'hide',
                src : 'a6.jpg',
                colour : 'Pink',
                icon : 'fa-solid fa-heart',
            }
        ]
    },
    {
        id : 12346,
        catagory : 'Shirt',
        name : 'Print Shirt 02',
        price : '300',
        description : 'Summer Shirt 2',
        varient : [
            {
                display : 'show',
                src : 'b1.jpg',
                colour : 'White',
                icon : 'fa-solid fa-heart',
            }
        ]
    },
    {
        id : 12347,
        catagory : 'Shirt',
        name : 'Print Shirt 03',
        price : '350',
        description : 'Summer Shirt 3',
        varient : [
            {
                display : 'show',
                src : 'c1.jpg',
                colour : 'Black White',
                icon : 'fa-regular fa-heart',
            }
        ]
    },
    {
        id : 12348,
        catagory : 'Shirt',
        name : 'Print Shirt 04',
        price : '380',
        description : 'Summer Shirt 4',
        varient : [
            {
                display : 'show',
                src : 'd1.jpg',
                colour : 'Light Brown',
                icon : 'fa-regular fa-heart',
            },
            {
                display : 'hide',
                src : 'd2.jpg',
                colour : 'White',
                icon : 'fa-regular fa-heart',
            }
        ]
    },
    {
        id : 12349,
        catagory : 'Shirt',
        name : 'Print Shirt 05',
        price : '299',
        description : 'Summer Shirt 5',
        varient : [
            {
                display : 'show',
                src : 'e1.jpg',
                colour : 'Dark Blue',
                icon : 'fa-regular fa-heart',
            },
            {
                display : 'show',
                src : 'e2.jpg',
                colour : 'Black',
                icon : 'fa-regular fa-heart',
            }
        ]
    },
    {
        id : 12350,
        catagory : 'Shirt',
        name : 'Figure Shirt',
        price : '450',
        description : 'Best for formal suit combination',
        varient : [
            {
                display : 'hide',
                src : 'f1.jpg',
                colour : 'Red',
                icon : 'fa-regular fa-heart',
            },
            {
                display : 'hide',
                src : 'f2.jpg',
                colour : 'Clay',
                icon : 'fa-regular fa-heart',
            },
            {
                display : 'hide',
                src : 'f3.jpg',
                colour : 'Green',
                icon : 'fa-regular fa-heart',
            },
            {
                display : 'show',
                src : 'f4.jpg',
                colour : 'Navy Green',
                icon : 'fa-regular fa-heart',
            },
            {
                display : 'hide',
                src : 'f5.jpg',
                colour : 'Sky Blue',
                icon : 'fa-regular fa-heart',
            },
            {
                display : 'show',
                src : 'f6.jpg',
                colour : 'White',
                icon : 'fa-regular fa-heart',
            }
        ]
    },
    {
        id : 12351,
        catagory : 'Shirt',
        name : 'Man Shirt',
        price : '400',
        description : 'Casual use for men',
        varient : [
            {
                display : 'hide',
                src : 'g1.jpg',
                colour : 'Black White',
                icon : 'fa-regular fa-heart',
            },
            {
                display : 'show',
                src : 'g2.jpg',
                colour : 'Pink',
                icon : 'fa-regular fa-heart',
            },
            {
                display : 'hide',
                src : 'g3.jpg',
                colour : 'Yellow',
                icon : 'fa-regular fa-heart',
            },
            {
                display : 'hide',
                src : 'g4.jpg',
                colour : 'Purple',
                icon : 'fa-regular fa-heart',
            },
            {
                display : 'hide',
                src : 'g5.jpg',
                colour : 'Sky Blue',
                icon : 'fa-regular fa-heart',
            },
        ]
    },






    {
        id : 12352,
        catagory : 'Pant',
        name : 'Jeans',
        price : '899',
        description : 'Good quality',
        varient : [
            {
                display : 'show',
                src : 'p1.jpeg',
                colour : 'Light Gray',
                icon : 'fa-regular fa-heart',
            },
        ]
    },
    {
        id : 12353,
        catagory : 'Pant',
        name : 'Men Tapered Fit',
        price : '699',
        description : 'Good attractive pant',
        varient : [
            {
                display : 'hide',
                src : 'q1.jpeg',
                colour : 'Blue',
                icon : 'fa-regular fa-heart',
            },
            {
                display : 'show',
                src : 'q2.jpeg',
                colour : 'Purple',
                icon : 'fa-regular fa-heart',
            },
            {
                display : 'show',
                src : 'q3.jpeg',
                colour : 'Light Blue',
                icon : 'fa-regular fa-heart',
            },
        ]
    },
    {
        id : 12354,
        catagory : 'Pant',
        name : 'Cargo Pant',
        price : '800',
        description : 'New trending',
        varient : [
            {
                display : 'show',
                src : 'r1.jpeg',
                colour : 'Dark Black',
                icon : 'fa-regular fa-heart',
            },
        ]
    },
    {
        id : 12355,
        catagory : 'Pant',
        name : 'Large Jeans',
        price : '900',
        description : 'Young styling dress',
        varient : [
            {
                display : 'hide',
                src : 's1.jpeg',
                colour : 'Sky Blue',
                icon : 'fa-regular fa-heart',
            },
            {
                display : 'show',
                src : 's2.jpeg',
                colour : 'Dark Blue',
                icon : 'fa-regular fa-heart',
            },
            {
                display : 'hide',
                src : 's3.jpeg',
                colour : 'Black',
                icon : 'fa-regular fa-heart',
            },
        ]
    },
    {
        id : 12355,
        catagory : 'Pant',
        name : 'Korean style jeans',
        price : '1200',
        description : 'Good quality products',
        varient : [
            {
                display : 'show',
                src : 't1.jpeg',
                colour : 'Light Gray',
                icon : 'fa-regular fa-heart',
            },
            {
                display : 'hide',
                src : 't2.jpeg',
                colour : 'Blue',
                icon : 'fa-regular fa-heart',
            },
            {
                display : 'show',
                src : 't3.jpeg',
                colour : 'Black',
                icon : 'fa-regular fa-heart',
            },
        ]
    },
];