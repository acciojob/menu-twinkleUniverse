/*import React,{useState} from 'react';
import Home from "./Home";
import DisplayMenu from './DisplayMenu';
import "../styles/App.css";


const App = () => {
  const [selection, setSelection] = useState(0);
 
  const data = [
    {
      id: 1,
      title: 'buttermilk pancakes',
      category: 'breakfast',
      price: 15.99,
      img: 'https://www.berries.com/blog/wp-content/uploads/2017/01/Heart-Toast.jpg',
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: 'diner double',
      category: 'lunch',
      price: 13.99,
      img: 'https://www.mistay.in/travel-blog/content/images/2020/05/Maharashtra-cuisine.jpg',
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: 'godzilla milkshake',
      category: 'shakes',
      price: 6.99,
      img: 'https://static.toiimg.com/photo/57990576.cms',
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: 'country delight',
      category: 'breakfast',
      price: 20.99,
      img: 'https://www.berries.com/blog/wp-content/uploads/2017/01/Heart-Toast.jpg',
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: 'egg attack',
      category: 'lunch',
      price: 22.99,
      img: 'https://www.mistay.in/travel-blog/content/images/2020/05/Maharashtra-cuisine.jpg',
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: 'oreo dream',
      category: 'shakes',
      price: 18.99,
      img:'https://static.toiimg.com/photo/57990576.cms',
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: 'bacon overflow',
      category: 'breakfast',
      price: 8.99,
      img: 'https://www.berries.com/blog/wp-content/uploads/2017/01/Heart-Toast.jpg',
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: 'american classic',
      category: 'lunch',
      price: 12.99,
      img: 'https://www.mistay.in/travel-blog/content/images/2020/05/Maharashtra-cuisine.jpg',
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: 'quarantine buddy',
      category: 'shakes',
      price: 16.99,
      img:'https://static.toiimg.com/photo/57990576.cms',
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

 

  return (

    <div>
      <Home setSelection={setSelection}/>
      <DisplayMenu data={data} selection={selection} />
    </div>

  );
}

export default App;*/



import React from "react";
import MenuPage from "./DisplayMenu";
import "../styles/App.css";

const App = () => {
  const Details = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img:
        "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img:
        "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img:
        "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img:
        "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img:
        "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img:
        "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img:
        "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img:
        "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img:
        "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_1280.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  return (
    <div id="heading">
      <h1>Our Menu</h1>
      <div id="underline"></div>
      <MenuPage Details={Details} />
    </div>
  );
};
export default App;
