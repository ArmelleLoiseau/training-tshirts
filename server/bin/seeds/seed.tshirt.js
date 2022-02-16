require("dotenv").config();
require("./../../config/mongoDB.config");
const tshirtModel = require("./../../models/tshirt.model");

const tshirts = [
  {
    name: "While alive",
    price: 20,
    picture:
      "https://ae01.alicdn.com/kf/H3c52791bd1924c4c842e68faa8f0aa38h/Time-Alive-t-shirt-avec-programmeur-en-direct-Code-Eat-Sleep-Design-de-lettres-Geek-codeur.jpg",
    brand: "Coding shirts",
    color: "black",
  },
  {
    name: "If tired",
    price: 18,
    picture:
      "https://tinkersphere.com/5542-thickbox_default/if-not-tired-keep-coding-else-coffee-code-t-shirt.jpg",
    brand: "Keep coding",
    color: "pink",
  },
  {
    name: "99 bugs",
    price: 25,
    picture:
      "https://ih1.redbubble.net/image.177481765.3301/ssrco,slim_fit_t_shirt,womens,322e3f:696a94a5d4,front,square_product,600x600.u3.jpg",
    brand: "Patch it up",
    color: "blue",
  },
  {
    name: "Matrix",
    price: 23,
    picture:
      "https://ih1.redbubble.net/image.13286086.1337/ssrco,slim_fit_t_shirt,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000-bg,f8f8f8.u1.jpg",
    brand: "Wachowskis",
    color: "green",
  },
  {
    name: "new Coffee",
    price: 27,
    picture:
      "https://res.cloudinary.com/teepublic/image/private/s--_K3lZnoL--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_442/c_crop,g_north_west,h_626,w_470,x_-14,y_-112/g_north_west,u_upload:v1462829024:production:blanks:a59x1cgomgu5lprfjlmi,x_-409,y_-437/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1478638728/production/designs/801120_1.jpg",
    brand: "coffee",
    color: "white",
  },
  {
    name: "Code Mode",
    price: 15,
    picture:
      "https://merchshop.in/wp-content/uploads/2019/06/code-mode-on-t-shirt-golden-yellow.jpg",
    brand: "On",
    color: "yellow",
  },
  {
    name: "Curly braces",
    price: 16,
    picture:
      "https://s3-eu-west-1.amazonaws.com/images.linnlive.com/d4cf250f63918acf8e5d11b6bfddb6ba/07f0af2b-a995-452c-a171-2500ea678465.jpg",
    brand: "Symbols",
    color: "greeen",
  },
  {
    name: "I write code",
    price: 16,
    picture:
      "https://i.pinimg.com/originals/ca/c6/41/cac641407a4cbd7df2e12410bb1eff1e.jpg",
    brand: "programmer",
    color: "grey",
  },
  {
    name: "Choose your weapon",
    price: 20,
    picture:
      "https://ae01.alicdn.com/kf/Hf7e6334b36a44a57a58b8a202eeffae8M/Men-Programmer-Programming-T-Shirts-Code-Python-Binary-Html-Cotton-Clothes-Vintage-Short-Sleeve-Tee-Shirt.jpg_Q90.jpg_.webp",
    brand: "programmer",
    color: "black",
  },
];

(async function insertTshirts() {
  try {
    await tshirtModel.deleteMany(); // empty the album db collection

    const inserted = await tshirtModel.insertMany(tshirts); // insert docs in db
    console.log(`seed tshirts done : ${inserted.length} documents inserted !`);
    process.exit();
  } catch (err) {
    console.error(err);
  }
})();
