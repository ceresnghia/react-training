import ProductListCard from './ProductListCard';

const ProductsListSection = ({ products }) => {
  return (
    <section id='productsList' className='mt-10 shop-tab-conten'>
      <div className='container'>
        <div className='product-list__items flex flex-wrap -mt-7'>
          {products.map((product) => {
            return <ProductListCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsListSection;
