import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FilterSection from './components/FilterSection';
import ProductGridSection from './components/ProductGridSection';
import ProductListSection from './components/ProductListSection';

function ShopThreeColumn() {
  const [isShowProductsGrid, setIsShowProductsGrid] = useState(true);

  useEffect(() => {
    document.title = 'Hello Tailwind';
  });

  const handleShowGridClick = () => {
    setIsShowProductsGrid(true);
  };

  const handleShowListClick = () => {
    setIsShowProductsGrid(false);
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
      <section id='pagination' className='mt-12 mb-24'>
        <div className='container'>
          <ul className='pagination-items flex flex-wrap items-center justify-center'>
            <li className='pagination-item px-2'>
              <Link
                to='/shop-grid-col-3'
                className='w-11 h-11 flex items-center justify-center text-orange leading-none bg-white shadow hover:bg-orange hover:text-white transition-all'
              >
                <i className='icon-arrow-left'></i>
              </Link>
            </li>
            <li className='pagination-item px-2'>
              <Link
                to='/shop-grid-col-3'
                className='w-11 h-11 flex items-center justify-center  leading-none  shadow bg-orange text-white transition-all'
              >
                1
              </Link>
            </li>
            <li className='pagination-item px-2'>
              <Link
                to='/shop-grid-col-3'
                className='w-11 h-11 flex items-center justify-center text-orange leading-none bg-white shadow hover:bg-orange hover:text-white transition-all'
              >
                2
              </Link>
            </li>
            <li className='pagination-item px-2'>
              <Link
                to='/shop-grid-col-3'
                className='w-11 h-11 flex items-center justify-center text-orange leading-none bg-white shadow hover:bg-orange hover:text-white transition-all'
              >
                3
              </Link>
            </li>
            <li className='pagination-item px-2'>
              <Link
                to='/shop-grid-col-3'
                className='w-11 h-11 flex items-center justify-center text-orange leading-none bg-white shadow hover:bg-orange hover:text-white transition-all'
              >
                <i className='icon-arrow-right'></i>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      {/* ----- Pagination section end ----- */}

      {/* ----- Contact section start ----- */}
      <section id='contact' className='py-24 bg-gray-100'>
        <div className='container'>
          <div className='max-w-[600px] mx-auto text-center'>
            <Link className='inline-block mb-11'>
              <img
                src='assets/images/logo/logo.webp'
                alt='brand logo'
                width='125'
                height='45'
              />
            </Link>
            <p className='text-sm sm:text-base mb-10'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.aliqua.
              Ut enim ad minim. Lorem ipsum dolor sit amet.
            </p>
            <form
              action=''
              id='contact-form'
              className='relative text-center md:max-w-xl mx-auto mb-10'
            >
              <input
                type='email'
                id='mail-input'
                name='email'
                placeholder='email@gmail.com'
                className='w-full h-14 sm:h-16 leading-none text-sm sm:text-base rounded-full border border-solid border-primary bg-transparent placeholder-primary placeholder-opacity-50 focus:outline-none py-1 pl-8 pr-14 sm:pr-36'
              />
              <button
                id='contact-form__submit'
                className='block sm:absolute w-full mt-3 sm:mt-0 sm:w-auto text-white capitalize font-medium leading-none text-sm lg:text-md bg-dark hover:bg-orange px-10 py-5 sm:px-3 sm:py-1 transition-all rounded-r-full rounded-l-full sm:rounded-l-none sm:top-0 sm:right-0 sm:h-full'
              >
                Subscribe
              </button>
            </form>
            <div className='contact-icons flex flex-wrap items-center justify-center'>
              <Link
                to='/shop-grid-col-3'
                className='contact-icon flex items-center justify-center mx-3 leading-none text-lg text-dark hover:text-orange transition '
              >
                <i className='icon-social-facebook'></i>
              </Link>
              <Link
                to='/shop-grid-col-3'
                className='contact-icon flex items-center justify-center mx-3 leading-none text-lg text-dark hover:text-orange transition '
              >
                <i className='icon-social-twitter'></i>
              </Link>
              <Link
                to='/shop-grid-col-3'
                className='contact-icon flex items-center justify-center mx-3 leading-none text-lg text-dark hover:text-orange transition '
              >
                <i className='icon-social-instagram'></i>
              </Link>
              <Link
                to='/shop-grid-col-3'
                className='contact-icon flex items-center justify-center mx-3 leading-none text-lg text-dark hover:text-orange transition '
              >
                <i className='icon-social-youtube'></i>
              </Link>
              <Link
                to='/shop-grid-col-3'
                className='contact-icon flex items-center justify-center mx-3 leading-none text-lg text-dark hover:text-orange transition '
              >
                <i className='icon-social-dribbble'></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
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
