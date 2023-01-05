import React, { useContext } from 'react';
import { Context } from '../Root/Root';
import Category from './Category';

const Shop = () => {
    const categories = useContext(Context)
    // console.log(categories);
    return (
        <div className='lg:m-5'>
            <h2 className='text-2xl font-semibold text-center my-5'>This is shop</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    categories.map(c=> <Category key={c.idCategory} c={c}></Category>)
                }
            </div>
        </div>
    );
};

export default Shop;