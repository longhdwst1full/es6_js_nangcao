const iteam_array = [{
    image: './images/imageHome/image 26.png',
    id: 1,
    name: "Big and Juicy Wagyu Beef Cheeseburger",
    price: 30,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    category: 1
},
{
    id: 2,
    name: "Fresh Lime Roasted Salmon",
    price: 10,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",

    category: 1,
    image: './images/imageHome/image 26 (1).png',

},
{
    image: './images/imageHome/image 26 (2).png',
    id: 3,
    name: "The Best Easy One Pot Chicken and Rice",
    price: 20,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",

    category: 3
},
{
    image: './images/imageHome/image 26 (3).png',
    id: 4,
    name: "Fresh and Healthy Mixed Mayonnaise ",
    price: 50,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",

    category: 4
},
{
    image: './images/imageHome/image 26 (4).png',
    id: 5,
    name: "The Creamiest Creamy Chicken",
    price: 60,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",

    category: 5
},
{
    image: './images/imageHome/image 26 (5).png',
    id: 6,
    name: "Fruity Pancake with Orange & Blueberry",
    price: 15,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    image: "./images/imageHome/image 26 (5).png",
    category: 6
}

];

let ListCategory = [
    {
        id: 1,
        image: "./images/imageHome/image 25.png",
        name: "Breakfast"
    },
    {
        id: 2,
        image: "./images/imageHome/image 20.png",
        name: "Vegan"
    },
    {
        id: 3,
        image: "./images/imageHome/image 21.png",
        name: "Meat"
    },
    {
        id: 4,
        image: "./images/imageHome/image 22.png",
        name: "Dessert"
    },
    {
        id: 5,
        image: "./images/imageHome/image 23.png",
        name: "Lunch"
    },
    {
        id: 6,
        image: "./images/imageHome/image 24.png",
        name: "Chocolate"
    }
];

 const menu =[ {
    
    name:'home',
    path: '/',
 },
 {
    name:'about',
    path: '/about',
 },
 {
    name:'product',
    path: '/product',
 }

]
import Navigo from "navigo"

export const router = new Navigo("/", { linksSelector: "a", hash: true });

export const render = (content, container) => {
    if (typeof content === "string") {

        container.innerHTML = content
    }
    else {
        container.innerHTML = content()
    }
}

export {
    ListCategory,
    iteam_array,
    menu
}