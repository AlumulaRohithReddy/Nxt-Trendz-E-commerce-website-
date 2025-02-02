import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })
      const l = cartList.length
      return (
        <div className="container">
          <h1 className="head">
            Order Total:<span className="main">Rs {total}/-</span>
          </h1>
          <p className="para">{l} Items in cart</p>
          <button className="check" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
