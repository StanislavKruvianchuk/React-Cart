import "./style.scss"

const CartHeader = () => {
    return ( 
        <header className="cart-header">
            <div className="cart-header__title">Item</div>
            <div className="cart-header__count">Quantity</div>
            <div className="cart-header__cost">Cost</div>
        </header>
     );
}
 
export default CartHeader;