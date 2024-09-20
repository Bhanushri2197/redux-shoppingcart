import React from 'react';
import products from '../data/ProductData';
import ProductItem from '../component/ProductItems';

const Home = () => {
    return (
        <>
            <section id="home" className='mt-5'>
                <div className="container">
                    <div className="cartListBlok">
                        {
                            products.map((item) => (
                                <ProductItem key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;