import Navigo from "navigo"

const iteam_array = [{
    image: 'https://longhdwst1full.github.io/web_ban_hang/images/imageHome/image%2026.png',
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
    image: 'https://longhdwst1full.github.io/web_ban_hang/images/imageHome/image%2026%20(1).png',

},
{
    image: 'https://longhdwst1full.github.io/web_ban_hang/images/imageHome/image%2026%20(2).png',
    id: 3,
    name: "The Best Easy One Pot Chicken and Rice",
    price: 20,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",

    category: 3
},
{
    image: 'https://longhdwst1full.github.io/web_ban_hang/images/imageHome/image%2026%20(3).png',
    id: 4,
    name: "Fresh and Healthy Mixed Mayonnaise ",
    price: 50,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",

    category: 4
},
{
    image: 'https://longhdwst1full.github.io/web_ban_hang/images/imageHome/image%2026%20(4).png',
    id: 5,
    name: "The Creamiest Creamy Chicken",
    price: 60,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",

    category: 5
},
{
    image: 'https://longhdwst1full.github.io/web_ban_hang/images/imageHome/image%2026%20(5).png',
    id: 6,
    name: "Fruity Pancake with Orange & Blueberry",
    price: 15,
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    category: 6
}

];

let ListCategory = [
    {
        id: 1,
        image: "https://longhdwst1full.github.io/web_ban_hang/images/imageHome/image%2025.png",
        name: "Breakfast"
    },
    {
        id: 2,
        image: "https://longhdwst1full.github.io/web_ban_hang/images/imageHome/image%2020.png",
        name: "Vegan"
    },
    {
        id: 3,
        image: "https://longhdwst1full.github.io/web_ban_hang/images/imageHome/image%2021.png",
        name: "Meat"
    },
    {
        id: 4,
        image: "https://longhdwst1full.github.io/web_ban_hang/images/imageHome/image%2022.png",
        name: "Dessert"
    },
    {
        id: 5,
        image: "https://longhdwst1full.github.io/web_ban_hang/images/imageHome/image%2023.png",
        name: "Lunch"
    },
    {
        id: 6,
        image: "https://longhdwst1full.github.io/web_ban_hang/images/imageHome/image%2024.png",
        name: "Chocolate"
    }
];

const menus = [{
    name: 'Home',
    path: '/',
},
{
    name: ' Products',
    path: '/products',
},
{
    name: ' About Us',
    path: '/about',
},
{
    name: 'Contact Us',
    path: '/contact',
}

]

const router = new Navigo("/", { linksSelector: "a", hash: true });

const render = (content, container) => {
    if (typeof content === "string") {

        container.innerHTML = content
    }
    else {
        container.innerHTML = content()
    }
}

export {
    router, render,
    ListCategory,
    iteam_array,
    menus
}