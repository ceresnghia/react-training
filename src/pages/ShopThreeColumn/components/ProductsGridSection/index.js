import ProductGridCard from './ProductGridCard';

const ProductsGridSection = () => {
  return (
    <section id='productsGrid' className='mt-10 shop-tab-content active'>
      <div className='container'>
        <div className='product-grid__items flex flex-wrap -my-4 -mx-4'>
          <ProductGridCard />
          <ProductGridCard />
          <ProductGridCard />
          <ProductGridCard />
          <ProductGridCard />
          <ProductGridCard />
          <ProductGridCard />
          <ProductGridCard />
          <ProductGridCard />
          <ProductGridCard />
        </div>
      </div>
    </section>
  );
};

export default ProductsGridSection;
