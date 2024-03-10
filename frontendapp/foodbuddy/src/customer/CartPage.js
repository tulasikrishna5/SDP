import React from 'react';
import classes from './cartPage.module.css';
import { useCart } from './useCart';
import Title from './Title';
import { Link } from 'react-router-dom';
import Price from './Price';

export default function CartPage() {
  const { cart, removeFromCart, changeQuantity } = useCart();
  return (
    <div>
      <Title title="Cart Page" margin="1.5rem 0 0 2.5rem" />

      {cart && cart.items.length > 0 && (
        <div className={classes.container}>
          <ul className={classes.list}>
            {cart.items.map(item => (
              <li key={item.food.id}>
                <div>
                  <img src={`/foods/${item.food.imageUrl}`} alt={item.food.name} />
                </div>
                <div>
                  <Link to={`/food/${item.food.id}`}>{item.food.name}</Link>
                </div>

                <div>
                  <select
                    value={item.quantity}
                    onChange={e => changeQuantity(item, Number(e.target.value))}
                  >
                    {[...Array(10).keys()].map((_, index) => (
                      <option key={index + 1}>{index + 1}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Price price={item.price} />
                </div>

                <div>
                  <button
                    className={classes.remove_button}
                    onClick={() => removeFromCart(item.food.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className={classes.checkout}>
            <div>
              <div className={classes.foods_count}>{cart.totalCount}</div>
              <div className={classes.total_price}>
                <Price price={cart.totalPrice} />
              </div>
            </div>

            <Link to="/checkout">Proceed To Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
}
