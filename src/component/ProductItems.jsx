import React , { useState }  from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slice/CartSlice';


const ProductItem  = (props) => {
  
    const { images, rating, title, price } = props;

    const [isAdded, setIsAdded] = useState(false);


    const dispatch = useDispatch();

    const handleAddToCart = () => {

        const item = { ...props };
        dispatch(addItem(item));

        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
        }, 3000);
    };

  return (
    <div className='cardItems'>
      <div className="imgBlock">
        <img src={images} alt="product-img" />
      </div>
      <div className="itemsDetailBlock">
        <div className='d-flex align-items-center justify-content-center flex-column'>
          <div className='titleText text-center'>{title}</div>
          <div className='price'>$ {price.toLocaleString()}</div>
        </div>
        <button className="btn addToCartBtn" onClick={handleAddToCart}>
                {isAdded ? 'Added' : 'Add to cart'}
        </button>
        <div className="rating">&#9733; {rating}</div>
      </div>
    </div>
  );
}
export default ProductItem;
