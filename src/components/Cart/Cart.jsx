import { useState } from 'react';
import CartFooter from '../CartFooter/CartFooter';
import CartHeader from '../CartHeader/CartHeader';
import Product from '../Product/Product';
import data from "./../../data"

const Cart = () => {
    const [cart, setCart] = useState(data);

    const deleteProduct = (id) => {
        console.log('Delete', id);
        setCart((cart) => cart.filter((product) => id !== product.id ))
    }

    const products = cart.map((product) => {
        return <Product product={product} key={product.id} deleteProduct={deleteProduct} />
    })

    console.log(cart)
    return ( 
        <section className="cart">

            <CartHeader />

            {products}

            <CartFooter />
            
        </section>
     );
}
 
export default Cart;