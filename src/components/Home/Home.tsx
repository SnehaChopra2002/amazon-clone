import "./Home.css";
import bg from "../../images/Amazon-bg.jpg";
import Product from "./Product";
import image from "../../images/sh.jpg";
import { IArticle } from "../../type";
const article1: IArticle = {
  id: 1,
  title: "The book for readers",
  image: image,
  price: 10,
  rating: 4,
};

// interface Props{
//   saveArticle:(article:IArticle|any)=>void
// }

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={bg} alt="" />
        <div className="home__row">
          {/* <Product article={article1} saveArticle={saveArticle}/>
          <Product article={article1} saveArticle={saveArticle}/> */}
          <Product id={Math.random()} title={article1.title} image={article1.image} price={article1.price} rating={article1.rating}/>
          <Product id={Math.random()} title={article1.title} image={article1.image} price={article1.price} rating={article1.rating}/>

        </div>

        <div className="home__row">
          {/* <Product article={article1} saveArticle={saveArticle}/>
          <Product article={article1} saveArticle={saveArticle}/>
          <Product article={article1} saveArticle={saveArticle}/> */}
          <Product id={Math.random()} title={article1.title} image={article1.image} price={article1.price} rating={article1.rating}/>
          <Product id={Math.random()} title={article1.title} image={article1.image} price={article1.price} rating={article1.rating}/>
          <Product id={Math.random()} title={article1.title} image={article1.image} price={article1.price} rating={article1.rating}/>

        </div>

        <div className="home__row">
          {/* <Product article={article1} saveArticle={saveArticle}/> */}
          <Product id={Math.random()} title={article1.title} image={article1.image} price={article1.price} rating={article1.rating}/>

        </div>
      </div>
    </div>
  );
};

export default Home;
