import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../store/slice/CartSlice';


const Header = () => {

    const { cartItems } = useSelector((state) => state.cart);

    const dispatch = useDispatch();


    const handleOpenCart = (open) => {
        dispatch(toggleCart(open));
    };


    const cartQuantity = cartItems.length;


    return (
        <>
            <header id="header" className='headerNav'>
                <div className="container">
                <div className="container d-flex align-items-center justify-content-between">

                        <h4>Redux Shopping Cart</h4>
                        <div className="nav_menu">
                        <button className="btn btnCart" onClick={() => handleOpenCart(true)}>
                                Cart ( {cartQuantity} )
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;