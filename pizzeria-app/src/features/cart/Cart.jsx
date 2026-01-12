/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import {useDispatch, useSelector} from "react-redux";
import { clearCart, getCart } from './cartSlice';
import { getUsername } from '../user/userSlice';


function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector(getUsername);

  const dispath = useDispatch();
  console.log(cart);
  if(!cart.length) return <EmptyCart />

  return (
    <div className='py-3 px-4'>
      <LinkButton to="/menu" >&larr; Back to menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, {username}</h2>

    <ul className='divide-y divide-stone-200 border-b mt-3'>
      {cart.map(item=> <CartItem item={item} key={item.pizzaId}/>)}
    </ul>

      <div className='mt-6 space-x-2'>
        <Button to='/order/new' type="primary">Order pizzas</Button>
        <Button type="secondary" onClick={() => dispath(clearCart())}>Clear cart</Button>

        
      </div>
    </div>
  );
}

export default Cart;
