import "./Checkout.css";
import bg from "../../images/Untitled design.png";
import Subtotal from "./Subtotal";
import { useSelector } from "react-redux";
import { ArticleState } from "../../type";
import CheckoutProduct from "./CheckoutProduct";
import { RootState } from "../../redux/store";

const Checkout = () => {
  const products=useSelector((state:ArticleState)=>state.articles)
  const user=useSelector((state:RootState)=>state.user.currentUser)
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={bg} alt="" className="checkout__ad" />
        <div>
          <h3>Hello, {user?user.email:'Guest'}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          
            {products.map((prod)=>(
              <CheckoutProduct key={prod.id} id={prod.id} title={prod.title} price={prod.price} image={prod.image} rating={prod.rating}/>
            ))}
          
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
