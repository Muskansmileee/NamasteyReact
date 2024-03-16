import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/contants";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    //read cart from appStore , to read use Selector
   const cartItems = useSelector((store) => {
       return store.cart.items;
   });
   //console.log(cartItems);
   
   const dispatch = useDispatch();
   const handelClearCart = () => {
     dispatch(clearCart());
   }

    return (
        <div className="cart-container">
          <h3 className="cart-heading">Cart</h3>
          <button className="clear-cart"
          onClick={handelClearCart}>Clear Cart</button>
          <div>
               { cartItems.map((cartItem) => (
                   <div className="flex" key={cartItem.card.info.id} data-testid="cartItems">
                    <div className="menu-body-item">
                        <span> {cartItem.card.info.name} </span>
                        <span>₹ {cartItem.card.info.price/100}</span>
                        <span className="menu-description"> {cartItem.card.info.description} </span>
                    </div>  
                   <div>
                     <img className="menu-img" src={CDN_URL + cartItem.card.info.imageId}/>
                   </div>  
               </div>  
               ))    
               }
          </div>
          { cartItems.length === 0 && (
            <h4 className="empty-cart-heading">Cart is Empty. Add Items to the cart.</h4>
          )}
        </div>
    )
}

export default Cart;
// we could reuse our itemlist component here , but since there were add button, I didnt used it and copy pasted the code.