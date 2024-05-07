import { isDraft } from '@reduxjs/toolkit';
import { attaBread, banner, biscuit, bread, bread2, cookies, cookies2, cookies3, kulcha, maggi, spices, spices1, spices2, spices3} from '../assets/'

export const imageCarousalData = [
    {
      id: "1",
      title: "Make up beauty needs",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=360/layout-engine/2023-03/beauty-WEB.jpg",
    },
    {
      id: "2",
      title: "Electronics & Appliance",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=360/layout-engine/2023-07/electronics-WEB.jpg",
    },
    {
      id: "3",
      title: "Pharmacy at your doorstep",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=360/layout-engine/2023-07/pharmacy-WEB.jpg",
    },
    {
      id: "4",
      title: "Rainy Season begins",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=360/layout-engine/2023-07/monsoon-WEB.jpg",
    },
  
  ];
  
export const storeByData = [
    {
      id: 1,
      title: "Local Store",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2023-07/BLR-Entry-point.png",
    },
    {
      id: 2,
      title: "Pet Store",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2023-04/health-store.png",
    },
    {
      id: 3,
      title: "Kids Store",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2023-04/stationery-store.jpg",
    },
    {
      id: 4,
      title: "Beauty Store",
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2023-04/Beauty-Store-store-1.png",
    },
    {
        id: 5,
        title: "Toy Store",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2023-07/BLR-Entry-point.png",
      },
      {
        id: 6,
        title: "Print Store",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2023-04/health-store.png",
      },
      {
        id: 7,
        title: "Health Store",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2023-04/stationery-store.jpg",
      },
      {
        id: 8,
        title: "Electronics Store",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2023-04/Beauty-Store-store-1.png",
      },
      {
        id: 9,
        title: "Gifting Store",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2023-07/BLR-Entry-point.png",
      },
      {
        id: 10,
        title: "Stationary Store",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2023-04/health-store.png",
      },
      {
        id: 11,
        title: "Pooja Store",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2023-04/stationery-store.jpg",
      },
      {
        id: 12,
        title: "Fruits Store",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2023-04/Beauty-Store-store-1.png",
      },
  ];

export const searchResult = [
    {
        id: '1',
        title: 'Healthy snacks',
        image: biscuit,
    },
    {
        id: '2',
        title: 'Little hearts',
        image: cookies,
    },
    {
        id: '3',
        title: 'Head & shoulder',
        image: cookies2,
    },
    {
        id: '4',
        title: 'Headphones',
        image: cookies3,
    },
    {
        id: '5',
        title: 'Healthy',
        image: maggi,
    },
]

export const categoriesList = [
    {
        id: '1',
        image: cookies3,
        title: 'Biscuits & Bakery',
        subCategories: [
            {
                id: '1',
                title: 'Cookies',
                image: cookies3,
                productList:[
                    {
                        id:"43",
                        parentId: null,
                        deliveryTime:'11 MINS',
                        name:'Creamica jeera lite',
                        photos:[cookies, cookies, cookies, cookies],
                        discountAvailable:true,
                        discountPrize :'76',
                        actualPrize:'120',
                        discountOff:'36%',
                        units:'500g',
                        companyName:'Creamica',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"44",
                        parentId: null,
                        deliveryTime:'8 MINS',
                        name:'Hide & Seek Chocolate Cookies',
                        photos:[cookies, cookies, cookies, cookies],
                        discountAvailable:true,
                        discountPrize :'28',
                        actualPrize:'30',
                        discountOff:'6%',
                        units:'100g',
                        companyName:'Parle',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"45",
                        parentId: null,
                        deliveryTime:'8 MINS',
                        name:'Britannia Good Day',
                        photos:[cookies, cookies, cookies, cookies],
                        discountAvailable:true,
                        discountPrize :'97',
                        actualPrize:'190',
                        discountOff:'48%',
                        units:'450g',
                        companyName:'Britannia',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"46",
                        parentId: null,
                        deliveryTime:'11 MINS',
                        name:'Britannia Good Day Cashew',
                        photos:[cookies, cookies, cookies, cookies],
                        discountAvailable:true,
                        discountPrize :'43',
                        actualPrize:'45',
                        discountOff:'5%',
                        units:'200g',
                        companyName:'Britannia',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"47",
                        parentId: null,
                        deliveryTime:'11 MINS',
                        name:'Cadburry Chocobakes',
                        photos:[cookies, cookies, cookies, cookies],
                        discountAvailable:true,
                        discountPrize :'64',
                        actualPrize:'80',
                        discountOff:'20%',
                        units:'167g',
                        companyName:'Cadburry',
                        optionsAvailable:true,
                        options:[
                            {
                                id:"47",
                                parentId: null,
                                name:'Cadburry Chocobakes',
                                photos:[cookies3, cookies3, cookies3, cookies3],
                                discountAvailable:true,
                                discountPrize :'64',
                                actualPrize:'80',
                                discountOff:'20%',
                                units:'167g',
                            },
                            {
                                id:"49",
                                parentId: '47',
                                name:'Cadburry Chocobakes',
                                photos:[cookies3, cookies3, cookies3, cookies3],
                                discountAvailable:true,
                                discountPrize :'127',
                                actualPrize:'160',
                                discountOff:'20%',
                                units:'12 x 167g',
                            },
                        ],
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"50",
                        parentId: null,
                        deliveryTime:'11 MINS',
                        name:'Sunfeast Mom\'s magic',
                        photos:[cookies, cookies, cookies, cookies],
                        discountAvailable:true,
                        discountPrize :'39',
                        actualPrize:'45',
                        discountOff:'13%',
                        units:'200g',
                        companyName:'Sunfeast',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"51",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'McVitie\'s Millet Almond Cookies',
                        photos:[cookies, cookies, cookies, cookies],
                        discountAvailable:true,
                        discountPrize :'40',
                        actualPrize:'50',
                        discountOff:'20%',
                        units:'73.6g',
                        companName:'McVitie',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                ]
            },
            {
                id: '2',
                title: 'Cream Biscuits',
                image: cookies3,
                productList:[
                {
                    id:"52",
                    parentId: null,
                    deliveryTime:'10 MINS',
                    name:'Super Coconut Cookies',
                    photos:[cookies3, cookies3, cookies3, cookies3],
                    discountAvailable:true,
                    discountPrize :'138',
                    actualPrize:'220',
                    discountOff:'37%',
                    units:'900g',
                    companName:'Creamica',
                    optionsAvailable:false,
                    productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                },
                {
                    id:"53",
                    parentId: null,
                    deliveryTime:'10 MINS',
                    name:'Jim Jam',
                    photos:[cookies3, cookies3, cookies3, cookies3],
                    discountAvailable:true,
                    discountPrize :'34',
                    actualPrize:'35',
                    discountOff:'1%',
                    units:'138g',
                    companName:'Britannia',
                    optionsAvailable:false,
                    productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                },
                {
                    id:"54",
                    parentId: null,
                    deliveryTime:'10 MINS',
                    name:'Britannia Milk Bikis',
                    photos:[cookies3, cookies3, cookies3, cookies3],
                    discountAvailable:true,
                    discountPrize :'45',
                    actualPrize:'50',
                    discountOff:'10%',
                    units:'200g',
                    companName:'Britannia',
                    optionsAvailable:false,
                    productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                },
                ]
            },
            {
                id: '3',
                title: 'Healthy & Digestive',
                image: cookies3,
                productList:[
                    {
                        id:"55",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Britannia Nutri Choice',
                        photos:[cookies2, cookies2, cookies2, cookies2],
                        discountAvailable:true,
                        discountPrize :'138',
                        actualPrize:'220',
                        discountOff:'37%',
                        units:'900g',
                        companName:'Creamica',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"56",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Mcvitie Oats Cookies',
                        photos:[cookies2, cookies2, cookies2, cookies2],
                        discountAvailable:true,
                        discountPrize :'34',
                        actualPrize:'35',
                        discountOff:'1%',
                        units:'138g',
                        companName:'Britannia',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"57",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Parle Platina Nutricrunch',
                        photos:[cookies2, cookies2, cookies2, cookies2],
                        discountAvailable:true,
                        discountPrize :'45',
                        actualPrize:'50',
                        discountOff:'10%',
                        units:'200g',
                        companName:'Britannia',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    ]
            },
            {
                id: '4',
                title: 'Sweet & Salty',
                image: cookies3,
                productList:[
                    {
                        id:"58",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Britannia 50 50',
                        photos:[cookies, cookies, cookies, cookies],
                        discountAvailable:true,
                        discountPrize :'138',
                        actualPrize:'220',
                        discountOff:'37%',
                        units:'900g',
                        companName:'Creamica',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"59",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Britannia Nice Time',
                        photos:[cookies, cookies, cookies, cookies],
                        discountAvailable:true,
                        discountPrize :'34',
                        actualPrize:'35',
                        discountOff:'1%',
                        units:'138g',
                        companName:'Britannia',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"60",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Britannia Little Hearts',
                        photos:[cookies, cookies, cookies, cookies],
                        discountAvailable:true,
                        discountPrize :'45',
                        actualPrize:'50',
                        discountOff:'10%',
                        units:'200g',
                        companName:'Britannia',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                ]
            },
            {
                id: '5',
                title: 'Glucose & Marie',
                image: cookies3,
                productList:[
                    {
                        id:"61",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Parle-G',
                        photos:[cookies3, cookies3, cookies3, cookies3],
                        discountAvailable:true,
                        discountPrize :'138',
                        actualPrize:'220',
                        discountOff:'37%',
                        units:'900g',
                        companName:'Creamica',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"62",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Parle Marie',
                        photos:[cookies3, cookies3, cookies3, cookies3],
                        discountAvailable:true,
                        discountPrize :'34',
                        actualPrize:'35',
                        discountOff:'1%',
                        units:'138g',
                        companName:'Britannia',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"63",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Britannia Marie Gold',
                        photos:[cookies3, cookies3, cookies3, cookies3],
                        discountAvailable:true,
                        discountPrize :'45',
                        actualPrize:'50',
                        discountOff:'10%',
                        units:'200g',
                        companName:'Britannia',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                ]
            },
            {
                id: '6',
                title: 'Rusks & Wafers',
                image: cookies3,
                productList:[
                    {
                        id:"64",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Super Coconut Cookies',
                        photos:[cookies3, cookies3, cookies3, cookies3],
                        discountAvailable:true,
                        discountPrize :'138',
                        actualPrize:'220',
                        discountOff:'37%',
                        units:'900g',
                        companName:'Creamica',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"65",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Jim Jam',
                        photos:[cookies3, cookies3, cookies3, cookies3],
                        discountAvailable:true,
                        discountPrize :'34',
                        actualPrize:'35',
                        discountOff:'1%',
                        units:'138g',
                        companName:'Britannia',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"66",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Britannia Milk Bikis',
                        photos:[cookies3, cookies3, cookies3, cookies3],
                        discountAvailable:true,
                        discountPrize :'45',
                        actualPrize:'50',
                        discountOff:'10%',
                        units:'200g',
                        companName:'Britannia',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                ]
            },
            {
                id: '7',
                title: 'Cakes & Rolls',
                image: cookies3,
                productList:[
                    {
                        id:"67",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Super Coconut Cookies',
                        photos:[cookies3, cookies3, cookies3, cookies3],
                        discountAvailable:true,
                        discountPrize :'138',
                        actualPrize:'220',
                        discountOff:'37%',
                        units:'900g',
                        companName:'Creamica',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"68",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Jim Jam',
                        photos:[cookies3, cookies3, cookies3, cookies3],
                        discountAvailable:true,
                        discountPrize :'34',
                        actualPrize:'35',
                        discountOff:'1%',
                        units:'138g',
                        companName:'Britannia',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"69",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Britannia Milk Bikis',
                        photos:[cookies3, cookies3, cookies3, cookies3],
                        discountAvailable:true,
                        discountPrize :'45',
                        actualPrize:'50',
                        discountOff:'10%',
                        units:'200g',
                        companName:'Britannia',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                ]
            },
            {
                id: '8',
                title: 'Baking Ingredients',
                image: cookies3,
                productList:[
                    {
                        id:"70",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Super Coconut Cookies',
                        photos:[cookies3, cookies3, cookies3, cookies3],
                        discountAvailable:true,
                        discountPrize :'138',
                        actualPrize:'220',
                        discountOff:'37%',
                        units:'900g',
                        companName:'Creamica',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"71",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Jim Jam',
                        photos:[cookies3, cookies3, cookies3, cookies3],
                        discountAvailable:true,
                        discountPrize :'34',
                        actualPrize:'35',
                        discountOff:'1%',
                        units:'138g',
                        companName:'Britannia',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"72",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Britannia Milk Bikis',
                        photos:[cookies3, cookies3, cookies3, cookies3],
                        discountAvailable:true,
                        discountPrize :'45',
                        actualPrize:'50',
                        discountOff:'10%',
                        units:'200g',
                        companName:'Britannia',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                ]
            },
            {
                id: '9',
                title: 'Gourmet Bakery',
                image: cookies3,
                productList:[
                    {
                        id:"73",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Super Coconut Cookies',
                        photos:[cookies3, cookies3, cookies3, cookies3],
                        discountAvailable:true,
                        discountPrize :'138',
                        actualPrize:'220',
                        discountOff:'37%',
                        units:'900g',
                        companName:'Creamica',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"74",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Jim Jam',
                        photos:[cookies3, cookies3, cookies3, cookies3],
                        discountAvailable:true,
                        discountPrize :'34',
                        actualPrize:'35',
                        discountOff:'1%',
                        units:'138g',
                        companName:'Britannia',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"75",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Britannia Milk Bikis',
                        photos:[cookies3, cookies3, cookies3, cookies3],
                        discountAvailable:true,
                        discountPrize :'45',
                        actualPrize:'50',
                        discountOff:'10%',
                        units:'200g',
                        companName:'Britannia',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                ]
            },
            {
                id: '10',
                title: 'Biscuit Gift Pack',
                image: cookies3,
                productList:[
                    {
                        id:"76",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Super Coconut Cookies',
                        photos:[cookies3, cookies3, cookies3, cookies3],
                        discountAvailable:true,
                        discountPrize :'138',
                        actualPrize:'220',
                        discountOff:'37%',
                        units:'900g',
                        companName:'Creamica',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"77",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Jim Jam',
                        photos:[cookies3, cookies3, cookies3, cookies3],
                        discountAvailable:true,
                        discountPrize :'34',
                        actualPrize:'35',
                        discountOff:'1%',
                        units:'138g',
                        companName:'Britannia',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                    {
                        id:"78",
                        parentId: null,
                        deliveryTime:'10 MINS',
                        name:'Britannia Milk Bikis',
                        photos:[cookies3, cookies3, cookies3, cookies3],
                        discountAvailable:true,
                        discountPrize :'45',
                        actualPrize:'50',
                        discountOff:'10%',
                        units:'200g',
                        companName:'Britannia',
                        optionsAvailable:false,
                        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
                    },
                ]
            },
        ]
    },
    {
        id: '2',
        image: cookies3,
        title: 'Oil, Ghee & Masala',
        subCategories: [
            {
                id: '1',
                title: 'oil',
                image: biscuit,
                productList:[]
            },
            {
                id: '2',
                title: 'Desi Ghee',
                image: biscuit,
                productList:[]
            },
            {
                id: '3',
                title: 'Powdered Spices',
                image: biscuit,
                productList:[]
            },
            {
                id: '4',
                title: 'Salt, Sugar & Jaggery',
                image: biscuit,
                productList:[]
            },
            {
                id: '5',
                title: 'Whole Spices',
                image: biscuit,
                productList:[]
            },
        ]
    },
    {
        id: '3',
        image: cookies3,
        title: 'Kitchenware & Appliances',
        subCategories: [
            {
                id: '1',
                title: 'Dinning & Serveware',
                image: biscuit,
                productList:[]
            },
            {
                id: '2',
                title: 'Cookware',
                image: biscuit,
                productList:[]
            },
            {
                id: '3',
                title: 'Storage & Containers',
                image: biscuit,
                productList:[]
            },
            {
                id: '4',
                title: 'Kitchen Appliances',
                image: biscuit,
                productList:[]
            },
            {
                id: '5',
                title: 'Glasses & Mugs',
                image: biscuit,
                productList:[]
            },
        ]
    },
    {
        id: '4',
        image: cookies3,
        title: 'Sweets & Chocolates',
        subCategories: [
            {
                id: '1',
                title: 'Chocolates',
                image: cookies3,
                productList:[]
            },
            {
                id: '2',
                title: 'Candies & Gum',
                image: cookies3,
                productList:[]
            },
            {
                id: '3',
                title: 'India Sweets',
                image: cookies3,
                productList:[]
            },
            {
                id: '4',
                title: 'Syrups',
                image: cookies3,
                productList:[]
            },
            {
                id: '5',
                title: 'Energy Bars',
                image: cookies3,
                productList:[]
            },
        ]
    },
    {
        id: '5',
        image: cookies3,
        title: 'Bath & Body',
        subCategories: [
            {
                id: '1',
                title: 'Soaps',
                image: cookies,
                productList:[]
            },
            {
                id: '2',
                title: 'Shower Gels',
                image: cookies,
                productList:[]
            },
            {
                id: '3',
                title: 'Oral Care',
                image: cookies,
                productList:[]
            },
            {
                id: '4',
                title: 'Handwash',
                image: cookies,
                productList:[]
            },
            {
                id: '5',
                title: 'Shampoo',
                image: cookies,
                productList:[]
            },
        ]
    },
    {
        id: '6',
        image: cookies3,
        title: 'Electronics',
        subCategories: [
            {
                id: '1',
                title: 'Smart Watches',
                image: cookies,
                productList:[]
            },
            {
                id: '2',
                title: 'Earphones & Headsets',
                image: cookies,
                productList:[]
            },
            {
                id: '3',
                title: 'Speakers',
                image: cookies,
                productList:[]
            },
            {
                id: '4',
                title: 'Mobile & Computers',
                image: cookies,
                productList:[]
            },
            {
                id: '5',
                title: 'Batteries',
                image: cookies,
                productList:[]
            },
        ]
    },
    {
        id: '7',
        image: cookies3,
        title: 'Beauty & Cosmetics',
        subCategories: [
            {
                id: '1',
                title: 'Lipstick & Gloss',
                image: cookies,
                productList:[]
            },
            {
                id: '2',
                title: 'Cleasers & Toners',
                image: cookies,
                productList:[]
            },
            {
                id: '3',
                title: 'Foundation',
                image: cookies,
                productList:[]
            },
            {
                id: '4',
                title: 'Nail Paints',
                image: cookies,
                productList:[]
            },
            {
                id: '5',
                title: 'Blush & Primer',
                image: cookies,
                productList:[]
            },
        ]
    },
    {
        id: '8',
        image: cookies3,
        title: 'Stationary & Games',
        subCategories: [
            {
                id: '1',
                title: 'Notebooks',
                image: cookies,
                productList:[]
            },
            {
                id: '2',
                title: 'Pencils & Pens',
                image: cookies,
                productList:[]
            },
            {
                id: '3',
                title: 'Glue & Tape',
                image: cookies,
                productList:[]
            },
            {
                id: '4',
                title: 'Sports & GYm',
                image: cookies,
                productList:[]
            },
            {
                id: '5',
                title: 'Toys & Games',
                image: cookies,
                productList:[]
            },
        ]
    },
    {
        id: '9',
        image: cookies3,
        title: 'Atta, Rice & Dal',
        subCategories: [
            {
                id: '1',
                title: 'Atta',
                image: cookies,
                productList:[]
            },
            {
                id: '2',
                title: 'Rice',
                image: cookies,
                productList:[]
            },
            {
                id: '3',
                title: 'Dal',
                image: cookies,
                productList:[]
            },
            {
                id: '4',
                title: 'Besan, Sooji & Maida',
                image: cookies,
                productList:[]
            },
            {
                id: '5',
                title: 'Organic',
                image: cookies,
                productList:[]
            },
        ]
    },
    {
        id: '10',
        image: cookies3,
        title: 'Vegetables & Fruits',
        subCategories: [
            {
                id: '1',
                title: 'Fresh Vegetables',
                image: cookies,
                productList:[]
            },
            {
                id: '2',
                title: 'Fresh Fruits',
                image: cookies,
                productList:[]
            },
            {
                id: '3',
                title: 'Exotics',
                image: cookies,
                productList:[]
            },
            {
                id: '4',
                title: 'Fronzen Veg',
                image: cookies,
                productList:[]
            },
            {
                id: '5',
                title: 'Seasonal',
                image: cookies,
                productList:[]
            },
        ]
    },
    {
        id: '11',
        image: cookies3,
        title: 'Dairy, Bread & Eggs',
        subCategories: [
            {
                id: '1',
                title: 'Milk',
                image: cookies,
                productList:[]
            },
            {
                id: '2',
                title: 'Eggs',
                image: cookies,
                productList:[]
            },
            {
                id: '3',
                title: 'Bread',
                image: cookies,
                productList:[]
            },
            {
                id: '4',
                title: 'Cheese & Butter',
                image: cookies,
                productList:[]
            },
            {
                id: '5',
                title: 'Paneer & Tofu',
                image: cookies,
                productList:[]
            },
        ]
        
    },
    {
        id: '12',
        image: cookies3,
        title: 'Drinks & Juice',
        subCategories: [
            {
                id: '1',
                title: 'Soft Drinks',
                image: cookies,
                productList:[]
            },
            {
                id: '2',
                title: 'Fruit Juices',
                image: cookies,
                productList:[]
            },
            {
                id: '3',
                title: 'Energy Drinks',
                image: cookies,
                productList:[]
            },
            {
                id: '4',
                title: 'Water & Ice cubes',
                image: cookies,
                productList:[]
            },
            {
                id: '5',
                title: 'Premium',
                image: cookies,
                productList:[]
            },
            {
                id: '6',
                title: 'Coconut Water',
                image: cookies,
                productList:[]
            },
        ]
        
    },
]

export const productList =[
    {
        id:"28",
        parentId: null,
        deliveryTime:'8 MINS',
        name:'Bonn High Fibre Brown Bread',
        photos:[bread2,bread2,bread2,bread2],
        discountAvailable:true,
        discountPrize :'45',
        actualPrize:'50',
        discountOff:'10%',
        units:'400g',
        companyName:'Bonn',
        optionsAvailable:true,
        options:[
            {
                id: '28',
                parentId: null,
                name:'Bonn High Fibre Brown Bread',
                photos:[bread2,bread2,bread2,bread2],
                discountAvailable:true,
                discountPrize :'45',
                actualPrize:'50',
                discountOff:'10%',
                units:'400g',
            },
            {
                id: '34',
                parentId: '28',
                name:'Bonn High Fibre Brown Bread',
                photos:[bread2,bread2,bread2,bread2],
                actualPrize:'50',
                units:'400g',
                discountAvailable:false,
            },
        ],
        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
    },
    {
        id:"29",
        parentId: null,
        deliveryTime:'10 MINS',
        name:'Bonn Atta Whole Wheat Bread',
        photos:[attaBread, attaBread, attaBread, attaBread ],
        discountAvailable:true,
        discountPrize :'40',
        actualPrize:'50',
        discountOff:'20%',
        units:'400g',
        companyName:'Bonn',
        optionsAvailable:true,
        options:[
            {
                id: '29',
                parentId: null,
                name:'Bonn Atta Whole Wheat Bread',
                photos:[attaBread, attaBread, attaBread, attaBread ],
                discountAvailable:true,
                discountPrize :'40',
                actualPrize:'50',
                discountOff:'20%',
                units:'400g',
            },
            {
                id: '36',
                parentId: '29',
                name:'Bonn Atta Whole Wheat Bread',
                photos:[attaBread, attaBread, attaBread, attaBread ],
                actualPrize:'50',
                units:'400g',
                discountAvailable:false,
            },
        ],
        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
    },
    {
        id:"30",
        parentId: null,
        deliveryTime:'8 MINS',
        name:'Bonn Premium Kulcha',
        photos:[kulcha, kulcha, kulcha, kulcha],
        discountAvailable:true,
        discountPrize :'38',
        actualPrize:'40',
        discountOff:'5%',
        units:'200g (4 pieces)',
        companyName:'Bonn',
        optionsAvailable:true,
        options:[
            {
                id: '30',
                parentId: null,
                name:'Bonn Premium Kulcha',
                photos:[kulcha, kulcha, kulcha, kulcha],
                discountAvailable:true,
                discountPrize :'38',
                actualPrize:'40',
                discountOff:'5%',
                units:'200g (4 pieces)',
            },
            {
                id: '38',
                parentId: '30',
                name:'Bonn Premium Kulcha',
                photos:[kulcha, kulcha, kulcha, kulcha],
                actualPrize:'40',
                units:'200g (4 pieces)',
                discountAvailable:false,
            },
        ],
        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
    },
    {
        id:"31",
        parentId: null,
        deliveryTime:'8 MINS',
        name:'Bonn Premium Kulcha',
        photos:[kulcha, kulcha, kulcha, kulcha],
        discountAvailable:true,
        discountPrize :'38',
        actualPrize:'40',
        discountOff:'5%',
        units:'200g (4 pieces)',
        companyName:'Bonn',
        optionsAvailable:true,
        options:[
            {
                id: '31',
                parentId: null,
                name:'Bonn Premium Kulcha',
                photos:[kulcha, kulcha, kulcha, kulcha],
                discountAvailable:true,
                discountPrize :'38',
                actualPrize:'40',
                discountOff:'5%',
                units:'200g (4 pieces)',
            },
            {
                id: '40',
                parentId: '31',
                name:'Bonn Premium Kulcha',
                photos:[kulcha, kulcha, kulcha, kulcha],
                actualPrize:'40',
                units:'200g (4 pieces)',
                discountAvailable:false,
            },
        ],
        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
    },
    {
        id:"32",
        parentId: null,
        deliveryTime:'8 MINS',
        name:'Bonn Premium Kulcha',
        photos:[kulcha, kulcha, kulcha, kulcha],
        discountAvailable:true,
        discountPrize :'38',
        actualPrize:'40',
        discountOff:'5%',
        units:'200g (4 pieces)',
        companyName:'Bonn',
        optionsAvailable:true,
        options:[
            {
                id: '32',
                parentId: null,
                name:'Bonn Premium Kulcha',
                photos:[kulcha, kulcha, kulcha, kulcha],
                discountAvailable:true,
                discountPrize :'38',
                actualPrize:'40',
                discountOff:'5%',
                units:'200g (4 pieces)',
            },
            {
                id: '42',
                parentId: '32',
                name:'Bonn Premium Kulcha',
                photos:[kulcha, kulcha, kulcha, kulcha],
                actualPrize:'40',
                units:'200g (4 pieces)',
                discountAvailable:false,
            },
        ],
        productDetail:"Bonn Group is the best and popular bread brand in India.We have all types of bread products available at affordable prices for our customers."
    },

];


export const bestsellersList =[
    {
        id :"1",
        name:'Noodles',
        products:[
            {
                id:"1",
                parentId: null,
                name:'Maggi 2 - Minute Instant Noodles',
                deliveryTime:'8 MINS',
                discountAvailable:true,
                discountPrize :'27',
                actualPrize:'30',
                discountOff:'10%',
                units:'100g',
                companyName:'Nestle',
                optionsAvailable:false,
                photos:[
                    maggi,maggi,maggi,maggi
                 ],
                productDetail:"Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings. Just boil the water, add the tastemaker and noodles and your maggi is ready within 2 to 3 minutes."
            },
            {
                id:"2",
                parentId: null,
                name:'Maggi Cuppa Masal Cup Noodles',
                deliveryTime:'8 MINS',
                discountAvailable:true,
                discountPrize :'27',
                actualPrize:'30',
                discountOff:'10%',
                units:'100g',
                companyName:'Nestle',
                optionsAvailable:false,
                photos:[
                    maggi,maggi,maggi,maggi
                 ],
                productDetail:"Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings. Just boil the water, add the tastemaker and noodles and your maggi is ready within 2 to 3 minutes."
            },
            {
                id:"3",
                parentId: null,
                name:'Maggi Masala 2 Minute Instant Noodles - Pack of 2',
                deliveryTime:'12 MINS',
                discountAvailable:true,
                discountPrize :'111',
                actualPrize:'112',
                discountOff:'1%',
                units:'2 x 140 gm',
                companyName:'Nestle',
                optionsAvailable:false,
                photos:[
                    maggi,maggi,maggi,maggi
                 ],
                productDetail:"Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings. Just boil the water, add the tastemaker and noodles and your maggi is ready within 2 to 3 minutes."
            },
            {
                id:"4",
                parentId: null,
                name:'Maggi Masala 2 Minute Instant Noodles - Pack of 4',
                deliveryTime:'10 MINS',
                discountAvailable:true,
                discountPrize :'135',
                actualPrize:'150',
                discountOff:'10%',
                units:'4 x 140 gm',
                companyName:'Nestle',
                optionsAvailable:false,
                photos:[
                    maggi,maggi,maggi,maggi
                 ],
                productDetail:"Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings. Just boil the water, add the tastemaker and noodles and your maggi is ready within 2 to 3 minutes."
            },
            {
                id:"5",
                parentId: null,
                name:'Maggi Masala 2 Minute Instant Noodles - Pack of 2',
                deliveryTime:'10 MINS',
                discountAvailable:true,
                discountPrize :'135',
                actualPrize:'150',
                discountOff:'10%',
                units:'2 x 140 gm',
                companyName:'Nestle',
                optionsAvailable:false,
                photos:[
                    maggi,maggi,maggi,maggi
                 ],
                productDetail:"Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings. Just boil the water, add the tastemaker and noodles and your maggi is ready within 2 to 3 minutes."
            },
            {
                id:"6",
                parentId: null,
                name:'Maggi Masala 2 Minute Instant Noodles - Pack of 4',
                deliveryTime:'10 MINS',
                discountAvailable:true,
                discountPrize :'135',
                actualPrize:'150',
                discountOff:'10%',
                units:'4 x 140 gm',
                companyName:'Nestle',
                optionsAvailable:false,
                photos:[
                    maggi,maggi,maggi,maggi
                 ],
                productDetail:"Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings. Just boil the water, add the tastemaker and noodles and your maggi is ready within 2 to 3 minutes."
            },
        ]
    },
    {
        id :"2",
        name:'Whole Spices & Masala',
        products:[
            {
                id:"7",
                parentId: null,
                name:'Everest Turmeric Powder/Haldi',
                deliveryTime:'8 MINS',
                discountAvailable:true,
                discountPrize :'34',
                actualPrize:'40',
                discountOff:'15%',
                units:'100g',
                companyName:'Everest',
                optionsAvailable:true,
                photos:[
                    spices,spices1,spices2,spices3
                 ],
                options:[
                    {
                        id: "7",
                        parentId: null,
                        name:'Everest Turmeric Powder/Haldi',
                        photos:[spices,spices1,spices2,spices3],
                        discountAvailable:true,
                        discountPrize :'34',
                        actualPrize:'40',
                        discountOff:'15%',
                        units:'100g',
                    },
                    {
                        id:"9",
                        parentId:"7",
                        name:'Everest Turmeric Powder/Haldi',
                        photos:[spices,spices1,spices2,spices3],
                        actualPrize:'76',
                        units:'200g',
                        discountAvailable:false,
                    },
                ],
                productDetail:"Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings. Just boil the water, add the tastemaker and noodles and your maggi is ready within 2 to 3 minutes."
            },
            {
                id:"10",
                parentId: null,
                name:'Maggi Cuppa Masal Cup Noodles',
                deliveryTime:'8 MINS',
                discountAvailable:true,
                discountPrize :'27',
                actualPrize:'30',
                discountOff:'10%',
                units:'100g',
                companyName:'Nestle',
                optionsAvailable:false,
                photos:[
                    maggi,maggi,maggi,maggi
                 ],
                productDetail:"Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings. Just boil the water, add the tastemaker and noodles and your maggi is ready within 2 to 3 minutes."
            },
            {
                id:"11",
                parentId: null,
                name:'Maggi Masala 2 Minute Instant Noodles - Pack of 2',
                deliveryTime:'12 MINS',
                discountAvailable:true,
                discountPrize :'111',
                actualPrize:'112',
                discountOff:'1%',
                units:'2 x 140 gm',
                companyName:'Nestle',
                optionsAvailable:false,
                photos:[
                    maggi,maggi,maggi,maggi
                 ],
                productDetail:"Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings. Just boil the water, add the tastemaker and noodles and your maggi is ready within 2 to 3 minutes."
            },
            {
                id:"12",
                parentId: null,
                name:'Maggi Masala 2 Minute Instant Noodles - Pack of 4',
                deliveryTime:'10 MINS',
                discountAvailable:true,
                discountPrize :'135',
                actualPrize:'150',
                discountOff:'10%',
                units:'4 x 140 gm',
                companyName:'Nestle',
                optionsAvailable:false,
                photos:[
                    maggi,maggi,maggi,maggi
                 ],
                productDetail:"Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings. Just boil the water, add the tastemaker and noodles and your maggi is ready within 2 to 3 minutes."
            },
            {
                id:"13",
                parentId: null,
                name:'Maggi Masala 2 Minute Instant Noodles - Pack of 2',
                deliveryTime:'10 MINS',
                discountAvailable:true,
                discountPrize :'135',
                actualPrize:'150',
                discountOff:'10%',
                units:'2 x 140 gm',
                companyName:'Nestle',
                optionsAvailable:false,
                photos:[
                    maggi,maggi,maggi,maggi
                 ],
                productDetail:"Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings. Just boil the water, add the tastemaker and noodles and your maggi is ready within 2 to 3 minutes."
            },
            {
                id:"14",
                parentId: null,
                name:'Maggi Masala 2 Minute Instant Noodles - Pack of 4',
                deliveryTime:'10 MINS',
                discountAvailable:true,
                discountPrize :'135',
                actualPrize:'150',
                discountOff:'10%',
                units:'4 x 140 gm',
                companyName:'Nestle',
                optionsAvailable:false,
                photos:[
                    maggi,maggi,maggi,maggi
                 ],
                productDetail:"Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings. Just boil the water, add the tastemaker and noodles and your maggi is ready within 2 to 3 minutes."
            },
        ]
    },
    {
        id :"3",
        name:'Cookies',
        products:[
            {
                id:"15",
                parentId: null,
                name:'Batter Chatter Atta Cookies',
                deliveryTime:'8 MINS',
                discountAvailable:true,
                discountPrize :'69',
                actualPrize:'130',
                discountOff:'50%',
                units:'200g',
                companyName:'Batters',
                optionsAvailable:false,
                photos:[
                   cookies, cookies, cookies, cookies
                ],
                productDetail:"A cookie (American English) or biscuit (British English) is a baked snack or dessert that is typically small, flat, and sweet."
            },
            {
                id:"16",
                parentId: null,
                name:'Batter Chatter Atta Cookies',
                deliveryTime:'8 MINS',
                discountAvailable:true,
                discountPrize :'69',
                actualPrize:'130',
                discountOff:'50%',
                units:'200g',
                companyName:'Batters',
                optionsAvailable:false,
                photos:[
                   cookies, cookies, cookies, cookies
                ],
                productDetail:"A cookie (American English) or biscuit (British English) is a baked snack or dessert that is typically small, flat, and sweet."
            },
            {
                id:"17",
                parentId: null,
                name:'Batter Chatter Atta Cookies',
                deliveryTime:'8 MINS',
                discountAvailable:true,
                discountPrize :'69',
                actualPrize:'130',
                discountOff:'50%',
                units:'200g',
                companyName:'Batters',
                optionsAvailable:false,
                photos:[
                   cookies, cookies, cookies, cookies
                ],
                productDetail:"A cookie (American English) or biscuit (British English) is a baked snack or dessert that is typically small, flat, and sweet."
            },
            {
                id:"18",
                parentId: null,
                name:'Batter Chatter Atta Cookies',
                deliveryTime:'8 MINS',
                discountAvailable:false,
                discountPrize :'',
                actualPrize:'130',
                discountOff:'50%',
                units:'200g',
                companyName:'Batters',
                optionsAvailable:false,

                photos:[
                   cookies, cookies, cookies, cookies
                ],
                productDetail:"A cookie (American English) or biscuit (British English) is a baked snack or dessert that is typically small, flat, and sweet."
            },
            {
                id:"19",
                parentId: null,
                name:'Batter Chatter Atta Cookies',
                deliveryTime:'8 MINS',
                discountAvailable:true,
                discountPrize :'69',
                actualPrize:'130',
                discountOff:'50%',
                units:'200g',
                companyName:'Batters',
                optionsAvailable:false,
                photos:[
                   cookies, cookies, cookies, cookies
                ],
                productDetail:"A cookie (American English) or biscuit (British English) is a baked snack or dessert that is typically small, flat, and sweet."
            },
        ]

    },
    {
        id :"4",
        name:'Noodles',
        products:[
            {
                id:"20",
                parentId: null,
                name:'Maggi 2 - Minute Instant Noodles',
                deliveryTime:'8 MINS',
                discountAvailable:true,
                discountPrize :'27',
                actualPrize:'30',
                discountOff:'10%',
                units:'100g',
                companyName:'Nestle',
                optionsAvailable:false,
                photos:[
                    maggi,maggi,maggi,maggi
                 ],
                productDetail:"Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings. Just boil the water, add the tastemaker and noodles and your maggi is ready within 2 to 3 minutes."
            },
            {
                id:"21",
                parentId: null,
                name:'Maggi Cuppa Masal Cup Noodles',
                deliveryTime:'8 MINS',
                discountAvailable:true,
                discountPrize :'27',
                actualPrize:'30',
                discountOff:'10%',
                units:'100g',
                companyName:'Nestle',
                optionsAvailable:false,
                photos:[
                    maggi,maggi,maggi,maggi
                 ],
                productDetail:"Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings. Just boil the water, add the tastemaker and noodles and your maggi is ready within 2 to 3 minutes."
            },
            {
                id:"22",
                parentId: null,
                name:'Maggi Masala 2 Minute Instant Noodles - Pack of 2',
                deliveryTime:'12 MINS',
                discountAvailable:true,
                discountPrize :'111',
                actualPrize:'112',
                discountOff:'1%',
                units:'2 x 140 gm',
                companyName:'Nestle',
                optionsAvailable:false,
                photos:[
                    maggi,maggi,maggi,maggi
                 ],
                productDetail:"Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings. Just boil the water, add the tastemaker and noodles and your maggi is ready within 2 to 3 minutes."
            },
            {
                id:"23",
                parentId: null,
                name:'Maggi Masala 2 Minute Instant Noodles - Pack of 4',
                deliveryTime:'10 MINS',
                discountAvailable:true,
                discountPrize :'135',
                actualPrize:'150',
                discountOff:'10%',
                units:'4 x 140 gm',
                companyName:'Nestle',
                optionsAvailable:false,
                photos:[
                    maggi,maggi,maggi,maggi
                 ],
                productDetail:"Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings. Just boil the water, add the tastemaker and noodles and your maggi is ready within 2 to 3 minutes."
            },
            {
                id:"24",
                parentId: null,
                name:'Maggi Masala 2 Minute Instant Noodles - Pack of 2',
                deliveryTime:'10 MINS',
                discountAvailable:true,
                discountPrize :'135',
                actualPrize:'150',
                discountOff:'10%',
                units:'2 x 140 gm',
                companyName:'Nestle',
                optionsAvailable:false,
                photos:[
                    maggi,maggi,maggi,maggi
                 ],
                productDetail:"Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings. Just boil the water, add the tastemaker and noodles and your maggi is ready within 2 to 3 minutes."
            },
            {
                id:"25",
                parentId: null,
                name:'Maggi Masala 2 Minute Instant Noodles - Pack of 4',
                deliveryTime:'10 MINS',
                discountAvailable:true,
                discountPrize :'135',
                actualPrize:'150',
                discountOff:'10%',
                units:'4 x 140 gm',
                companyName:'Nestle',
                optionsAvailable:false,
                photos:[
                    maggi,maggi,maggi,maggi
                 ],
                productDetail:"Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings. Just boil the water, add the tastemaker and noodles and your maggi is ready within 2 to 3 minutes."
            },
            {
                id:"26",
                parentId: null,
                name:'Maggi Masala 2 Minute Instant Noodles - Pack of 4',
                deliveryTime:'10 MINS',
                discountAvailable:true,
                discountPrize :'135',
                actualPrize:'150',
                discountOff:'10%',
                units:'4 x 140 gm',
                companyName:'Nestle',
                optionsAvailable:false,
                photos:[
                    maggi,maggi,maggi,maggi
                 ],
                productDetail:"Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings. Just boil the water, add the tastemaker and noodles and your maggi is ready within 2 to 3 minutes."
            },
            {
                id:"27",
                parentId: null,
                name:'Maggi Masala 2 Minute Instant Noodles - Pack of 4',
                deliveryTime:'10 MINS',
                discountAvailable:true,
                discountPrize :'135',
                actualPrize:'150',
                discountOff:'10%',
                units:'4 x 140 gm',
                companyName:'Nestle',
                optionsAvailable:false,
                photos:[
                    maggi,maggi,maggi,maggi
                 ],
                productDetail:"Maggi noodles are dried noodles fused with oil, and sold with a packet of flavorings. Just boil the water, add the tastemaker and noodles and your maggi is ready within 2 to 3 minutes."
            },
        ]
    },

]
