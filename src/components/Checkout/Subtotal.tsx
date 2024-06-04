import { useSelector } from "react-redux"
import "./Subtotal.css"
import { ArticleState } from "../../type"
import { useHistory } from "react-router-dom"

const Subtotal = () => {
  const products = useSelector((state:ArticleState)=>state.articles)
  const totalPrice=products.reduce((sum,prod)=>sum+prod.price,0)
  const history = useHistory();
  const handleButtonClick = () => {
    history.push("/payments");
  };
  
  return (
    <div className="subtotal">
        <>
            <p>
            Subtotal ({products.length} items): <strong>$ {totalPrice}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" />This order contains a gift
            </small>

            <button onClick={handleButtonClick}>Proceed to Checkout</button>
        </>
    </div>
  )
}

export default Subtotal