import { useDispatch } from 'react-redux'
import { deleteArticle } from '../../redux/amazonSlice'
import { IArticle } from '../../type'
import './CheckoutProduct.css'

const CheckoutProduct = ({id,image,title,price,rating}:IArticle) => {
    const dispatch = useDispatch();
    const removeFromBasket=()=>{
        dispatch(deleteArticle({
            id:id
        }))
    }
  return (
        <div className="checkoutProduct">
            <img src={image} alt="" className='checkoutProduct__image'/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price"><strong>$ {price}</strong></p>
                <div className="product__rating">{Array(rating).fill(0).map((_, index) => (<p key={index}>⭐</p>))}</div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct