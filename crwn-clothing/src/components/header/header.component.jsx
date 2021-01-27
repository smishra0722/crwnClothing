import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
const Header = ({currentUserr}) => {
    return(
        <div className='header'>
            <Link className='logo-container' to='/'><Logo className='logo' /></Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP{console.log(currentUserr)}</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                {
                    
                    currentUserr?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                    
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    currentUserr: state.user.currentUser
});

export default connect(mapStateToProps)(Header);