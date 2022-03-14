import ProductListCard from './ProductListCard';

const ProductsListSection = () => {
  return (
    <section id='productsList' className='mt-10 shop-tab-conten'>
      <div className='container'>
        <div className='product-list__items flex flex-wrap -mt-7'>
          <ProductListCard />
          <ProductListCard />
          <ProductListCard />
          <ProductListCard />
          <ProductListCard />
          <ProductListCard />
          <ProductListCard />
          <ProductListCard />
          <ProductListCard />
          <ProductListCard />
        </div>
      </div>
    </section>
  );
};

export default ProductsListSection;
