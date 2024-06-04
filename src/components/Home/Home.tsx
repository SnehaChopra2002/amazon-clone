import "./Home.css";
import bg from "../../images/Amazon-bg.jpg";
import Product from "./Product";
import { IArticle } from "../../type";
import bookImage from "../../images/sh.jpg"
import gadgetImage from "../../images/gadget.jpg"
import apparelImage from "../../images/apparel.jpg"
import homeAccessoryImage from "../../images/home acc.jpeg"
import headphoneImage from "..//../images/headphone.jpg"
import sweaterImage from "../../images/sweater.jpg"

const articles: IArticle[] = [
  {
    id: 1,
    title: "Book for Readers",
    image: bookImage,
    // description: "Dive into the world of fiction with this compelling novel that keeps you glued to the pages till the very end. Perfect for fans of mystery and drama.",
    price: 15,
    rating: 4,
  },
  {
    id: 2,
    title: "Smart Gadget Pro",
    image: gadgetImage,
    // description: "Experience the latest in technology with our new Smart Gadget Pro, featuring advanced sensors and a stunning HD display.",
    price: 250,
    rating: 5,
  },
  {
    id: 3,
    title: "Stylish Jeans",
    image: apparelImage,
    // description: "Comfort meets style in these perfectly tailored jeans, made from premium fabric to give you the best fit.",
    price: 60,
    rating: 4,
  },
  {
    id: 4,
    title: "Decorative Vase",
    image: homeAccessoryImage,
    // description: "Enhance your home decor with our beautifully crafted vase, perfect for any contemporary or traditional setting.",
    price: 35,
    rating: 5,
  },
  // Add more products here
  {
    id: 5,
    title: "Wireless Headset",
    image: headphoneImage,
    // description: "Immerse yourself in your favorite music with our wireless headphones. Enjoy crystal-clear sound and long battery life.",
    price: 80,
    rating: 4,
  },
  {
    id: 6,
    title: "Cozy Sweater",
    image: sweaterImage,
    // description: "Stay warm and stylish with our cozy sweater, perfect for chilly days and evenings.",
    price: 45,
    rating: 4,
  },

  // Add more articles as needed
];

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={bg} alt="" />
        {articles.map((article) => (
          <div className="home__row" key={article.id}>
            <Product
              id={article.id}
              title={article.title}
              image={article.image}
              price={article.price}
              rating={article.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
