import { useState, useEffect } from 'react';

import HeroSection from '../../layout/partials/HeroSection';
import FilterSection from './components/FilterSection';
import ProductsGridSection from './components/ProductsGridSection';
import ProductsListSection from './components/ProductsListSection';
import PaginationSection from './components/PaginationSection';

import data from '../../data/productsData';

function ShopThreeColumn() {
  const [isShowProductsGrid, setIsShowProductsGrid] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = 'Hello Tailwind';
  });

  useEffect(() => {
    setProducts(data.products);
  }, []);

  const handleShowGridClick = () => {
    setIsShowProductsGrid(true);
  };

  const handleShowListClick = () => {
    setIsShowProductsGrid(false);
  };

  return (
    <>
      {/* ----- Hero section start ----- */}
      <HeroSection pageName={'SHOP-GRID-3-COLUMN'} />
      {/* ----- Hero section end ----- */}

      {/* ----- Filter section start ----- */}
      <FilterSection
        isShowProductsGrid={isShowProductsGrid}
        onShowGridClick={handleShowGridClick}
        onShowListClick={handleShowListClick}
      />
      {/* ----- Filter section end ----- */}

      {/* ----- Products Grid section start ----- */}
      {isShowProductsGrid && <ProductsGridSection products={products} />}
      {/* ----- Products Grid section end ----- */}

      {/* ----- Products List section start ----- */}
      {!isShowProductsGrid && <ProductsListSection products={products} />}
      {/* ----- Products List section end ----- */}

      {/* ----- Pagination section start ----- */}
      <PaginationSection />
      {/* ----- Pagination section end ----- */}
    </>
  );
}

export default ShopThreeColumn;
