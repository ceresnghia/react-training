import { useState, useEffect } from 'react';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FilterSection from './components/FilterSection';
import ProductsGridSection from './components/ProductsGridSection';
import ProductsListSection from './components/ProductsListSection';
import PaginationSection from './components/PaginationSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

import data from '../../data/productsData';

function ShopThreeColumn() {
  const [isShowProductsGrid, setIsShowProductsGrid] = useState(true);
  const [email, setEmail] = useState('');
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

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
    console.log('Email Input Changed', email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!regexEmail.test(email)) {
      alert('Please enter a valid email address!');
      return;
    }

    alert('Form submitted!');
    console.log('Form submitted: ', email);
  };

  return (
    <>
      {/* ----- Header start ----- */}
      <Header />
      {/* ----- Header end ----- */}

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

      {/* ----- Contact section start ----- */}
      <ContactSection
        email={email}
        onEmailInputChange={handleEmailInputChange}
        onFormSubmit={handleFormSubmit}
      />
      {/* ----- Contact section end ----- */}

      {/* ----- Footer section start ----- */}
      <FooterSection />
      {/* ----- Footer section end ----- */}
    </>
  );
}

export default ShopThreeColumn;
