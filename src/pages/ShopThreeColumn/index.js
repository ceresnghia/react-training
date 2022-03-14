import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FilterSection from './components/FilterSection';
import ProductGridSection from './components/ProductGridSection';

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
      {!isShowProductsGrid && (
        <section id='productsList' className='mt-10 shop-tab-conten'>
          <div className='container'>
            <div className='product-list__items flex flex-wrap -mt-7'>
              <div className='product-list__item w-full mt-7'>
                <div className='product-card flex flex-wrap flex-col md:flex-row border border-solid border-gray-300 transition-all hover:shadow-product group relative'>
                  <div className='product-card__avatar md:w-1/3 relative overflow-hidden'>
                    <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3'>
                      New
                    </span>
                    <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3'>
                      Sale
                    </span>
                    <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3'>
                      -11%
                    </span>
                    <img
                      className='w-full h-full'
                      src='assets/images/products/drone/product2.webp'
                      alt='product image'
                      width='432'
                      height='480'
                    ></img>

                    {/* ----- Cart action start ----- */}
                    <div className='absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                      <ul className='flex items-center justify-center bg-white shadow opacity-0 invisible transform translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear'>
                        <li>
                          <Link
                            to='/shop-grid-col-3'
                            className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4'
                          >
                            <i className='icon-magnifier-add'></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* ----- Cart action end ----- */}
                    {/* ----- Cart variants start ----- */}
                    <div className='p-2 bg-gray-200 shadow absolute left-2 right-2 -bottom-40 group-hover:bottom-2 z-20 transition-all duration-500 ease-linear'>
                      <ul className='flex flex-wrap items-center justify-center mb-3'>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>sm</button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>l</button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>m</button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>xl</button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>xxl</button>
                        </li>
                      </ul>
                      <ul className='flex flex-wrap items-center justify-center'>
                        <li className='mx-1 leading-none'>
                          <button
                            className='w-4 h-4 rounded-full bg-orange'
                            aria-label='colors'
                          ></button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='w-4 h-4 rounded-full bg-primary'></button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='w-4 h-4 rounded-full bg-indigo-600'></button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='w-4 h-4 rounded-full bg-dark'></button>
                        </li>
                      </ul>
                    </div>
                    {/* ----- Cart variants end ----- */}
                  </div>
                  <div className='product-card__content flex-1 py-5 px-4'>
                    <h4>
                      <Link
                        to='/shop-grid-col-3'
                        className='block text-md hover:text-orange transition-all mb-2'
                      >
                        Batin crofessor pampden
                      </Link>
                    </h4>
                    <p className='text-sm'>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                    <h5 className='font-bold text-md leading-none text-orange my-4'>
                      <del className='font-normal text-sm mr-1 inline-block'>
                        $110.00
                      </del>{' '}
                      $130.00
                    </h5>
                    <ul className='flex items-center'>
                      <li className='mr-2'>
                        <Link
                          to='/shop-grid-col-3'
                          className='text-dark flex items-center justify-center text-md border border-solid border-dark hover:text-white  hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange'
                        >
                          <i className='icon-heart'></i>
                        </Link>
                      </li>
                      <li className='mr-2'>
                        <Link
                          to='/shop-grid-col-3'
                          className='text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange'
                        >
                          <i className='icon-basket-loaded'></i>
                          <span className='text-sm ml-2'>Add to cart</span>
                        </Link>
                      </li>
                      <li className='mr-2'>
                        <Link
                          to='/shop-grid-col-3'
                          className='flex items-center justify-center py-3 px-4 md:px-5 text-md leading-none text-dark border border-solid border-dark hover:text-white hover:bg-orange hover:border-orange transition-all'
                        >
                          <i className='icon-refresh'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='product-list__item w-full mt-7'>
                <div className='product-card flex flex-wrap flex-col md:flex-row border border-solid border-gray-300 transition-all hover:shadow-product group relative'>
                  <div className='product-card__avatar md:w-1/3 relative overflow-hidden'>
                    <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3'>
                      New
                    </span>
                    <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3'>
                      Sale
                    </span>
                    <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3'>
                      -11%
                    </span>
                    <img
                      className='w-full h-full'
                      src='assets/images/products/drone/product2.webp'
                      alt='product image'
                      width='432'
                      height='480'
                    ></img>

                    {/* ----- Cart action start ----- */}
                    <div className='absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                      <ul className='flex items-center justify-center bg-white shadow opacity-0 invisible transform translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear'>
                        <li>
                          <Link
                            to='/shop-grid-col-3'
                            className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4'
                          >
                            <i className='icon-magnifier-add'></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* ----- Cart action end ----- */}
                    {/* ----- Cart variants start ----- */}
                    <div className='p-2 bg-gray-200 shadow absolute left-2 right-2 -bottom-40 group-hover:bottom-2 z-20 transition-all duration-500 ease-linear'>
                      <ul className='flex flex-wrap items-center justify-center mb-3'>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>sm</button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>l</button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>m</button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>xl</button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>xxl</button>
                        </li>
                      </ul>
                      <ul className='flex flex-wrap items-center justify-center'>
                        <li className='mx-1 leading-none'>
                          <button
                            className='w-4 h-4 rounded-full bg-orange'
                            aria-label='colors'
                          ></button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='w-4 h-4 rounded-full bg-primary'></button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='w-4 h-4 rounded-full bg-indigo-600'></button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='w-4 h-4 rounded-full bg-dark'></button>
                        </li>
                      </ul>
                    </div>
                    {/* ----- Cart variants end ----- */}
                  </div>
                  <div className='product-card__content flex-1 py-5 px-4'>
                    <h4>
                      <Link
                        to='/shop-grid-col-3'
                        className='block text-md hover:text-orange transition-all mb-2'
                      >
                        Batin crofessor pampden
                      </Link>
                    </h4>
                    <p className='text-sm'>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                    <h5 className='font-bold text-md leading-none text-orange my-4'>
                      <del className='font-normal text-sm mr-1 inline-block'>
                        $110.00
                      </del>{' '}
                      $130.00
                    </h5>
                    <ul className='flex items-center'>
                      <li className='mr-2'>
                        <Link
                          to='/shop-grid-col-3'
                          className='text-dark flex items-center justify-center text-md border border-solid border-dark hover:text-white  hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange'
                        >
                          <i className='icon-heart'></i>
                        </Link>
                      </li>
                      <li className='mr-2'>
                        <Link
                          to='/shop-grid-col-3'
                          className='text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange'
                        >
                          <i className='icon-basket-loaded'></i>
                          <span className='text-sm ml-2'>Add to cart</span>
                        </Link>
                      </li>
                      <li className='mr-2'>
                        <Link
                          to='/shop-grid-col-3'
                          className='flex items-center justify-center py-3 px-4 md:px-5 text-md leading-none text-dark border border-solid border-dark hover:text-white hover:bg-orange hover:border-orange transition-all'
                        >
                          <i className='icon-refresh'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='product-list__item w-full mt-7'>
                <div className='product-card flex flex-wrap flex-col md:flex-row border border-solid border-gray-300 transition-all hover:shadow-product group relative'>
                  <div className='product-card__avatar md:w-1/3 relative overflow-hidden'>
                    <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3'>
                      New
                    </span>
                    <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3'>
                      Sale
                    </span>
                    <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3'>
                      -11%
                    </span>
                    <img
                      className='w-full h-full'
                      src='assets/images/products/drone/product2.webp'
                      alt='product image'
                      width='432'
                      height='480'
                    ></img>

                    {/* ----- Cart action start ----- */}
                    <div className='absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                      <ul className='flex items-center justify-center bg-white shadow opacity-0 invisible transform translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear'>
                        <li>
                          <Link
                            to='/shop-grid-col-3'
                            className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4'
                          >
                            <i className='icon-magnifier-add'></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* ----- Cart action end ----- */}
                    {/* ----- Cart variants start ----- */}
                    <div className='p-2 bg-gray-200 shadow absolute left-2 right-2 -bottom-40 group-hover:bottom-2 z-20 transition-all duration-500 ease-linear'>
                      <ul className='flex flex-wrap items-center justify-center mb-3'>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>sm</button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>l</button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>m</button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>xl</button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>xxl</button>
                        </li>
                      </ul>
                      <ul className='flex flex-wrap items-center justify-center'>
                        <li className='mx-1 leading-none'>
                          <button
                            className='w-4 h-4 rounded-full bg-orange'
                            aria-label='colors'
                          ></button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='w-4 h-4 rounded-full bg-primary'></button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='w-4 h-4 rounded-full bg-indigo-600'></button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='w-4 h-4 rounded-full bg-dark'></button>
                        </li>
                      </ul>
                    </div>
                    {/* ----- Cart variants end ----- */}
                  </div>
                  <div className='product-card__content flex-1 py-5 px-4'>
                    <h4>
                      <Link
                        to='/shop-grid-col-3'
                        className='block text-md hover:text-orange transition-all mb-2'
                      >
                        Batin crofessor pampden
                      </Link>
                    </h4>
                    <p className='text-sm'>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                    <h5 className='font-bold text-md leading-none text-orange my-4'>
                      <del className='font-normal text-sm mr-1 inline-block'>
                        $110.00
                      </del>{' '}
                      $130.00
                    </h5>
                    <ul className='flex items-center'>
                      <li className='mr-2'>
                        <Link
                          to='/shop-grid-col-3'
                          className='text-dark flex items-center justify-center text-md border border-solid border-dark hover:text-white  hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange'
                        >
                          <i className='icon-heart'></i>
                        </Link>
                      </li>
                      <li className='mr-2'>
                        <Link
                          to='/shop-grid-col-3'
                          className='text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange'
                        >
                          <i className='icon-basket-loaded'></i>
                          <span className='text-sm ml-2'>Add to cart</span>
                        </Link>
                      </li>
                      <li className='mr-2'>
                        <Link
                          to='/shop-grid-col-3'
                          className='flex items-center justify-center py-3 px-4 md:px-5 text-md leading-none text-dark border border-solid border-dark hover:text-white hover:bg-orange hover:border-orange transition-all'
                        >
                          <i className='icon-refresh'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='product-list__item w-full mt-7'>
                <div className='product-card flex flex-wrap flex-col md:flex-row border border-solid border-gray-300 transition-all hover:shadow-product group relative'>
                  <div className='product-card__avatar md:w-1/3 relative overflow-hidden'>
                    <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3'>
                      New
                    </span>
                    <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3'>
                      Sale
                    </span>
                    <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3'>
                      -11%
                    </span>
                    <img
                      className='w-full h-full'
                      src='assets/images/products/drone/product2.webp'
                      alt='product image'
                      width='432'
                      height='480'
                    ></img>

                    {/* ----- Cart action start ----- */}
                    <div className='absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                      <ul className='flex items-center justify-center bg-white shadow opacity-0 invisible transform translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear'>
                        <li>
                          <Link
                            to='/shop-grid-col-3'
                            className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4'
                          >
                            <i className='icon-magnifier-add'></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* ----- Cart action end ----- */}
                    {/* ----- Cart variants start ----- */}
                    <div className='p-2 bg-gray-200 shadow absolute left-2 right-2 -bottom-40 group-hover:bottom-2 z-20 transition-all duration-500 ease-linear'>
                      <ul className='flex flex-wrap items-center justify-center mb-3'>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>sm</button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>l</button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>m</button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>xl</button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>xxl</button>
                        </li>
                      </ul>
                      <ul className='flex flex-wrap items-center justify-center'>
                        <li className='mx-1 leading-none'>
                          <button
                            className='w-4 h-4 rounded-full bg-orange'
                            aria-label='colors'
                          ></button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='w-4 h-4 rounded-full bg-primary'></button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='w-4 h-4 rounded-full bg-indigo-600'></button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='w-4 h-4 rounded-full bg-dark'></button>
                        </li>
                      </ul>
                    </div>
                    {/* ----- Cart variants end ----- */}
                  </div>
                  <div className='product-card__content flex-1 py-5 px-4'>
                    <h4>
                      <Link
                        to='/shop-grid-col-3'
                        className='block text-md hover:text-orange transition-all mb-2'
                      >
                        Batin crofessor pampden
                      </Link>
                    </h4>
                    <p className='text-sm'>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                    <h5 className='font-bold text-md leading-none text-orange my-4'>
                      <del className='font-normal text-sm mr-1 inline-block'>
                        $110.00
                      </del>{' '}
                      $130.00
                    </h5>
                    <ul className='flex items-center'>
                      <li className='mr-2'>
                        <Link
                          to='/shop-grid-col-3'
                          className='text-dark flex items-center justify-center text-md border border-solid border-dark hover:text-white  hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange'
                        >
                          <i className='icon-heart'></i>
                        </Link>
                      </li>
                      <li className='mr-2'>
                        <Link
                          to='/shop-grid-col-3'
                          className='text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange'
                        >
                          <i className='icon-basket-loaded'></i>
                          <span className='text-sm ml-2'>Add to cart</span>
                        </Link>
                      </li>
                      <li className='mr-2'>
                        <Link
                          to='/shop-grid-col-3'
                          className='flex items-center justify-center py-3 px-4 md:px-5 text-md leading-none text-dark border border-solid border-dark hover:text-white hover:bg-orange hover:border-orange transition-all'
                        >
                          <i className='icon-refresh'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='product-list__item w-full mt-7'>
                <div className='product-card flex flex-wrap flex-col md:flex-row border border-solid border-gray-300 transition-all hover:shadow-product group relative'>
                  <div className='product-card__avatar md:w-1/3 relative overflow-hidden'>
                    <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3'>
                      New
                    </span>
                    <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3'>
                      Sale
                    </span>
                    <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3'>
                      -11%
                    </span>
                    <img
                      className='w-full h-full'
                      src='assets/images/products/drone/product2.webp'
                      alt='product image'
                      width='432'
                      height='480'
                    ></img>

                    {/* ----- Cart action start ----- */}
                    <div className='absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                      <ul className='flex items-center justify-center bg-white shadow opacity-0 invisible transform translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-linear'>
                        <li>
                          <Link
                            to='/shop-grid-col-3'
                            className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4'
                          >
                            <i className='icon-magnifier-add'></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* ----- Cart action end ----- */}
                    {/* ----- Cart variants start ----- */}
                    <div className='p-2 bg-gray-200 shadow absolute left-2 right-2 -bottom-40 group-hover:bottom-2 z-20 transition-all duration-500 ease-linear'>
                      <ul className='flex flex-wrap items-center justify-center mb-3'>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>sm</button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>l</button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>m</button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>xl</button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='text-sm'>xxl</button>
                        </li>
                      </ul>
                      <ul className='flex flex-wrap items-center justify-center'>
                        <li className='mx-1 leading-none'>
                          <button
                            className='w-4 h-4 rounded-full bg-orange'
                            aria-label='colors'
                          ></button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='w-4 h-4 rounded-full bg-primary'></button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='w-4 h-4 rounded-full bg-indigo-600'></button>
                        </li>
                        <li className='mx-1 leading-none'>
                          <button className='w-4 h-4 rounded-full bg-dark'></button>
                        </li>
                      </ul>
                    </div>
                    {/* ----- Cart variants end ----- */}
                  </div>
                  <div className='product-card__content flex-1 py-5 px-4'>
                    <h4>
                      <Link
                        to='/shop-grid-col-3'
                        className='block text-md hover:text-orange transition-all mb-2'
                      >
                        Batin crofessor pampden
                      </Link>
                    </h4>
                    <p className='text-sm'>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                    <h5 className='font-bold text-md leading-none text-orange my-4'>
                      <del className='font-normal text-sm mr-1 inline-block'>
                        $110.00
                      </del>{' '}
                      $130.00
                    </h5>
                    <ul className='flex items-center'>
                      <li className='mr-2'>
                        <Link
                          to='/shop-grid-col-3'
                          className='text-dark flex items-center justify-center text-md border border-solid border-dark hover:text-white  hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange'
                        >
                          <i className='icon-heart'></i>
                        </Link>
                      </li>
                      <li className='mr-2'>
                        <Link
                          to='/shop-grid-col-3'
                          className='text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange'
                        >
                          <i className='icon-basket-loaded'></i>
                          <span className='text-sm ml-2'>Add to cart</span>
                        </Link>
                      </li>
                      <li className='mr-2'>
                        <Link
                          to='/shop-grid-col-3'
                          className='flex items-center justify-center py-3 px-4 md:px-5 text-md leading-none text-dark border border-solid border-dark hover:text-white hover:bg-orange hover:border-orange transition-all'
                        >
                          <i className='icon-refresh'></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
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
