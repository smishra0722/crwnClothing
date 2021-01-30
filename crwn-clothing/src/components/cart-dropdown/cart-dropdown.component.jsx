import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import {createStructuredSelector} from 'reselect';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button.component';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (<div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length?cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>)):
                <span className='empty-message'>No Items</span>
            }
        </div>
        <CustomButton onClick={() => {dispatch(toggleCartHidden()); history.push('/checkout');}}>GO TO CHECKOUT</CustomButton>
    </div>)
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
}); 
export default withRouter(connect(mapStateToProps)(CartDropdown));