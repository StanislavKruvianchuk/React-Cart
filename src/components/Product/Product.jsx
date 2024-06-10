import './style.scss'
// import Count from '../Count/Count'
import ButtonDelete from '../ButtonDelete/ButtonDelete';

const Product = ({ product }) => {
    return ( 
        <section className="product">
            <div className="product__img"><img src={`./img/products/${product.img}`} alt={product.title} /></div>
            <div className="product__title">{product.title}</div>
            <div className="product__count">
                {/* <Count /> */}
            </div>
            <div className="product__price">${product.price}</div>
            <div className="product__controls">
                <ButtonDelete />
            </div>
        </section>
     );
}
 
export default Product;