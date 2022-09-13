import "./cart.css"

const Cart = ({ cartItems , handleAddProduct, handleRemoveProduct, handleClearance, handleClearProduct}) => {
    console.log("cart ka maal", cartItems);
    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price , 0)
    return (
        <div className="cart-items">
            <div className="cart-items-header">Cart items</div>
            <div className="clear-cart">
                {cartItems.length>=1 && (
                    <button className="clear-button" onClick={()=>handleClearance()}>clear</button>
                )}
            </div>

            {cartItems.length === 0 && <div className="cart-items-empty">No items found</div>}
            <div className="cart-items-list">
                {
                    cartItems.map((item) => <div key={item.id} className="cart-item">
                    <div className="cart-item-card">
                        <img className="cart-item-image" src={item.image} alt={item.name}></img>
                        <div className="car-item-name">{item.name}</div>
                        </div>
                        <div className="cart-item-function">
                            <button className="cart-item-add" onClick={()=> handleAddProduct(item)}>+</button>
                            <button className="cart-item-remove" onClick={()=>handleRemoveProduct(item)}>-</button>
                            <button className="cart-item-clear" onClick={()=>handleClearProduct(item)}>X</button>
                        </div>
                        <div className="cart-item-price">
                            {item.quantity } *  ₹{item.price}
                        </div>
                    </div>
                    )}
            </div>
            <div className="cart-items-total-price-name">
                Total price
                <div className="cart-items-total-price"> 
                    ₹ {totalPrice}
                </div>
            </div>
        </div>
    )
}

export default Cart
