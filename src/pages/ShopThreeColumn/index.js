import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FilterSection from './components/FilterSection';
import ProductGridSection from './components/ProductGridSection';
import ProductListSection from './components/ProductListSection';
import PaginationSection from './components/PaginationSection';
import ContactSection from './components/ContactSection';

function ShopThreeColumn() {
  const [isShowProductsGrid, setIsShowProductsGrid] = useState(true);
  const [email, setEmail] = useState('');

  useEffect(() => {
    document.title = 'Hello Tailwind';
  });

  const handleShowGridClick = () => {
    setIsShowProductsGrid(true);
  };

  const handleShowListClick = () => {
    setIsShowProductsGrid(false);
  };

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
    console.log('email', email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

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
      {isShowProductsGrid && <ProductGridSection />}
      {/* ----- Products Grid section end ----- */}

      {/* ----- Products List section start ----- */}
      {!isShowProductsGrid && <ProductListSection />}
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
      <footer id='footer' className='py-8 bg-gray-500'>
        <div className='container'>
          <div className='flex flex-wrap items-center justify-center gap-4 md:flex-row-reverse'>
            <div className='footer-image-container w-full md:w-1/2 text-center md:text-right'>
              <img
                src='assets/images/logo/payment.webp'
                alt=''
                className='footer-image inline-block'
                width='286'
                height='23'
              />
            </div>
            <div className='footer-content flex-1 flex items-center justify-center md:justify-start'>
              <p className='text-white flex flex-wrap items-center text-sm lg:text-base'>
                © 2022 Sinp. Made with{' '}
                <i className='icon-heart mx-2 text-orange'></i> by
                <Link
                  to='/shop-grid-col-3'
                  className='ml-1 transition hover:text-orange'
                >
                  Codecarnival
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* ----- Footer section end ----- */}
    </>
  );
}

export default ShopThreeColumn;
