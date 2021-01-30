import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/users/user.selectors';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.compoent';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

const Header = ({currentUser, hidden, dispatch}) => {
    return(
        <div className='header'>
            <Link className='logo-container' to='/'><Logo className='logo' /></Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP{console.log(currentUser)}</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                {
                    
                    currentUser?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                    
                }
                <CartIcon />
            </div>
            {
                hidden? null : <CartDropdown />
            }
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);