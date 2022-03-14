import { memo } from 'react';
import ProductGridCard from './ProductGridCard';

const ProductsGridSection = ({ products }) => {
  console.log('ProductGridSection rerender');
  return (
    <section id='productsGrid' className='mt-10 shop-tab-content active'>
      <div className='container'>
        <div className='product-grid__items flex flex-wrap -my-4 -mx-4'>
          {products.map((product) => (
            <ProductGridCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ProductsGridSection);
