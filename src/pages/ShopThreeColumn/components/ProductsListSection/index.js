import ProductListCard from './ProductListCard';
import data from '../../../../data/productsData';

const ProductsListSection = () => {
  console.log('data', data);
  return (
    <section id='productsList' className='mt-10 shop-tab-conten'>
      <div className='container'>
        <div className='product-list__items flex flex-wrap -mt-7'>
          {data.products.map((product) => {
            return <ProductListCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsListSection;
