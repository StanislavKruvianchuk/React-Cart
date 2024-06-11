import './style.scss'
import priceFormatter from '../../utils/priceFormatter';

const CartFooter = ({ total }) => {
    const { count, price } = total;
    return ( 
        <footer className="cart-footer">
            <div className="cart-footer__count">{count} items</div>
            <div className="cart-footer__price">${priceFormatter.format(price)}</div>
        </footer>
     );
}
 
export default CartFooter;