import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, removeItem, incrementItem, decrementItem } from '../store/slice/CartSlice';


const Cart = () => {

    const { isCartOpen, cartItems } = useSelector((state) => state.cart);


    const dispatch = useDispatch();


    const handleCloseCart = (close) => {
        dispatch(toggleCart(close));
    };


    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId));
    };


    const handleIncrement = (itemId) => {
        dispatch(incrementItem(itemId));
    };

    const handleDecrement = (itemId) => {
        dispatch(decrementItem(itemId));
    };

    useEffect(() => {
        const docBody = document.body;

        isCartOpen ? (
            docBody.classList.add('overflow_hide')
        ) : (
            docBody.classList.remove('overflow_hide')
        );

    }, [isCartOpen]);



    const cartQuantity = cartItems.length;

    const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);


    return (
        <>
            {
                 isCartOpen && (
                    <div id="cart" className={`cartContainer cartSidebar ${isCartOpen  ? 'active' : ''}`}>
                        <div className="cart_content h-100">
                            <div className="cart_head">
                                <h2 className='text-center'>Cart <small>({cartQuantity})</small></h2>
                                <button
                                    title="Close"
                                    className="closeBtnToggle"
                                    onClick={() => handleCloseCart(false)}
                                >
                                    X
                                </button>
                            </div>

                            <div className="itemsWrapper">
                                <div className="cartItems">
                                {
                                    cartQuantity === 0 ? (
                                        <h2 className='text-center'>Cart is empty</h2>
                                    ) : (
                                        cartItems.map(item => {
                                            const { id, images, title, price,rating, quantity ,category,description} = item;
                                            const itemTotal = price * quantity;
                                             return (
                                                <>
                                                  <div className='addedcartItems'key={id}>
                                                <div className="d-flex">
                                                  <div className="imgBlock">
                                                    <img className='w-100'  src={images} alt="product-img" />
                                                  </div>
                                                  <div className="additemDetailBlock w-100 d-flex justify-content-between">
                                                    <div className="itemsDetail">
                                                      <div className='titleText'>{title}</div>
                                                      <div className="rating">&#9733; {rating}</div>
                                                      <div className='categoryText'>Category : {category}</div>
                                                      <p className="description">{description}</p>
                                                    </div>
                                                    <div className="priceBlock d-flex flex-column align-items-center justify-content-between">
                                                      <div className="priceDetail">
                                                        <div className="d-flex align-items-center quantityBlock">
                                                          <button className="btn dec" onClick={() => handleDecrement(id)}>-</button>
                                                          <span className="quantity">{quantity}</span>
                                                          <button className="btn btnInc" onClick={() => handleIncrement(id)}>+</button>
                                                        </div>
                                                      </div>
                                                      <div className="price">$ {itemTotal.toLocaleString()}</div>
                                                      <button className=" btn btnRemove" onClick={() => handleRemove(id)}>Remove</button>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                                </>
                                              
                                            );
                                        })
                                    )
                                }
                                </div>
                             
                            </div>

                                <div className="totalPrice h3 text-end p-3">Total: $ {cartTotal.toLocaleString()}</div>
                            
                        </div>
                    </div>
                 )
            }
        </>
    );
};

export default Cart;