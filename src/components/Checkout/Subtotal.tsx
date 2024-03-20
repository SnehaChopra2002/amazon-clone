import { useSelector } from "react-redux"
import "./Subtotal.css"
import { ArticleState } from "../../type"

const Subtotal = () => {
  const products = useSelector((state:ArticleState)=>state.articles)
  const totalPrice=products.reduce((sum,prod)=>sum+prod.price,0)
  return (
    <div className="subtotal">
        <>
            <p>
            Subtotal ({products.length} items): <strong>$ {totalPrice}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" />This order contains a gift
            </small>

            <button>Proceed to Checkout</button>
        </>
    </div>
  )
}

export default Subtotal