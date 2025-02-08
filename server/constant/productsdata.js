const products = [
    { 
        id:"products1",
        url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        }, 
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off', 
        tagline: 'Deal of the day' 
    },
    { 
        id:"products2",
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        description: 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
        discount: 'From 99+5% Off', 
        tagline: 'Pestige, Nova & more' 
    },
    { 
         id:"products3",
        url: 'https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70', 
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        }, 
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: 'Upto 70% Off', 
        tagline: 'Deal of the Day' 
    },
    { 
         id:"products4",
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70', 
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        }, 
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now', 
        tagline: 'Best Seller' 
    },
    { 
         id:"products5",
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70', 
        title: {
            shortTitle: 'Trimmers, Dryers & more',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        }, 
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: '',
        discount: 'From ₹499', 
        tagline: 'Kubra, Nova & more' 
    },
     
        { 
             id:"products6",
            url: 'https://m.media-amazon.com/images/I/81tHOIXhseL.jpg',
            detailUrl: 'https://m.media-amazon.com/images/I/81tHOIXhseL.jpg', 
            title: {
                shortTitle: 'REALME 12 Pro 5G',
                longTitle: 'REALME 12 Pro 5G (Submarine Blue, 12GB RAM, 256GB Storage)'
            }, 
            price: {
                mrp: 29989,
                cost: 41124,
                discount: '40%'
            },
            description: '(Submarine Blue, 12GB RAM, 256GB Storage) Upto 24GB(12+12) Dynamic RAM | Snapdragon 6 Gen 1 Processor | 50 MP OIS | 32 MP 2X Flagship Telephoto Camera | 120 Hz Curved Vision',
            discount: 'From ₹4499', 
            tagline: 'REALME 12 Pro 5G (Submarine Blue, 12GB RAM, 256GB Storage)' 
        }
        ,
        { 
             id:"products7",
            url: 'https://m.media-amazon.com/images/I/512boAL7vuL._SY879_.jpg',
            detailUrl: 'https://m.media-amazon.com/images/I/512boAL7vuL._SY879_.jpg', 
            title: {
                shortTitle: 'LAMBOO Men ',
                longTitle: 'Printed Lining Print Cotton Lycra Slim Fit Cut Away Collar Casual Shirt'
            }, 
            price: {
                mrp: 439,
                cost: 899,
                discount: '40%'
            },
            description: 'Printed Lining Print Cotton Lycra Slim Fit Cut Away Collar Casual Shirt',
            discount: 'From ₹199', 
            tagline: 'Printed Lining Print Cotton Lycra Slim Fit Cut Away Collar Casual Shirt' 
        },
        { 
                id:"products8",
               url: 'https://m.media-amazon.com/images/I/41sMtOdJdUL.jpg', 
               detailUrl: 'https://m.media-amazon.com/images/I/41sMtOdJdUL.jpg', 
               title: {
                   shortTitle: 'Kashis CreationsFloral Print Rayon Kurta for Women',
                   longTitle: '| Regular Fit Top | Stylish Top for Girls | Top for Office | Kurti for Women | Black |'
               }, 
               price: {
                   mrp: 310,
                   cost: 166,
                   discount: '50%'
               },
               description: 'If you are looking for : women top for women White top women crop top women top stylish crop top women women stylish top crop top women women stylish top women s top women western top sleeveless top women women top dress 3/4th sleeve top women jaipuri women top floral top office top then we are here for you.'
            ,
               discount: 'Upto 70% Off', 
               tagline: 'Deal of the Day' 
            }
];

module.exports = products;
