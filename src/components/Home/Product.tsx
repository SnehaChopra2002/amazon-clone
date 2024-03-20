import "./Product.css";
import { useDispatch } from "react-redux";
import { addArticle } from "../../redux/amazonSlice";

interface Props {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
}

const Product = ({ id,title,image,price,rating }: Props) => {
  // const addToBasket =()=>{
  //   saveArticle(article)
  // }
  const dispatch = useDispatch();

  const addToBasket = () => {
    dispatch(
      addArticle({
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      })
    );
  };

  return (
    <div className="product">
      <p className="product__info">{title}</p>
      <p className="product__price">
        <small>$</small>
        <strong>{price.toString()}</strong>
      </p>
      <div className="product__rating">
        {Array(rating)
          .fill(0)
          .map((_, index) => (
            <p key={index}>⭐</p>
          ))}
      </div>

      <img className="" src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
