import { useEffect } from 'react';

function ShopThreeColumn() {
  useEffect(() => {
    document.title = 'Hello Tailwind';
  });

  return (
    <>
      {/* ----- Header start ----- */}
      <header className='py-6 lg:py-0'>
        <div className='container '>
          <div className='header flex items-center'>
            <div className='header-left__col w-6/12 lg:w-2/12'>
              <div className='header-logo'>
                <a href='#'>
                  <img
                    src='assets/images/logo/logo.webp'
                    alt='logo'
                    loading='lazy'
                    width='125'
                    height='45'
                  />
                </a>
              </div>
            </div>
            <div className='header-middle__col hidden lg:flex flex-1'>
              <nav className='header-nav'>
                <ul className='flex flex-wrap'>
                  <li className='header-nav__item'>
                    <a
                      className='block py-10 xl:pr-6 md:pr-5 capitalize font-normal text-md text-primary hover:text-orange transition-all'
                      href='#'
                    >
                      Home
                    </a>
                  </li>
                  <li className='header-nav__item'>
                    <a
                      className='block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all'
                      href='#'
                    >
                      Shop
                    </a>
                  </li>
                  <li className='header-nav__item'>
                    <a
                      className='block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all'
                      href='#'
                    >
                      Blog
                    </a>
                  </li>
                  <li className='header-nav__item'>
                    <a
                      className='block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all'
                      href='#'
                    >
                      Pages
                    </a>
                  </li>
                  <li className='header-nav__item'>
                    <a
                      className='block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all'
                      href='#'
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='header-right__col w-6/12 lg:w-3/12'>
              <ul className='flex items-center justify-end'>
                <li className='header-search ml-6 hidden lg:block'>
                  <button className='search-toggle text-right text-primary text-md hover:text-orange transition-all'>
                    <i className='icon-magnifier'></i>
                  </button>
                </li>
                <li className='ml-6'>
                  <a
                    href='#'
                    className='text-primary text-md hover:text-orange transition-all relative'
                  >
                    <span className='w-5 h-5 bg-dark text-white text-sm rounded-full font-normal flex flex-wrap items-center justify-center absolute -top-3 left-2 leading-none'>
                      4
                    </span>
                    <i className='icon-bag'></i>
                    <span className='text-base leading-none text-dark pl-1'>
                      $245
                    </span>
                  </a>
                </li>
                <li id='toggle-menu' className='ml-6 hidden lg:block'>
                  <button className='text-primary text-md hover:text-orange transition-all toggle-menu'>
                    <i className='icon-settings'></i>
                  </button>
                </li>
                <li className='ml-6 lg:hidden'>
                  <a
                    href='#'
                    className='offcanvas-toggle text-primary text-md hover:text-orange transition-all'
                  >
                    <i className='icon-menu'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* ----- Header end ----- */}
      {/* ----- Hero section start ----- */}
      <section id='hero-section' className='py-9 bg-gray-light min-h-full'>
        <div className='container'>
          <ul className='flex flex-wrap items-center justify-center'>
            <li className='w-auto mr-5'>
              <a
                href='#'
                className='text-dark font-medium text-base uppercase transition-all hover:text-orange relative before:w-5 before:h-1px before:empty before:absolute before:top-3 before:bg-dark before:transform before:rotate-115 before:-right-5'
              >
                Home
              </a>
            </li>
            <li className='w-auto text-dark font-medium text-base uppercase'>
              SHOP-GRID-3-COLUMN
            </li>
          </ul>
        </div>
      </section>
      {/* ----- Hero section end ----- */}
      {/* ----- Filter section start ----- */}
      <section id='filter' className='pt-24'>
        <div className='container'>
          <div className='flex flex-wrap justify-between items-center px-4'>
            <div className='filter-item flex flex-wrap'>
              <div className='shop-select flex items-center mr-12'>
                <label htmlFor='SortBy'>Sort by :</label>
                <select id='SortBy' className='px-2 bg-transparents'>
                  <option value='manual'>Featured</option>
                  <option value='best-selling'>Best Selling</option>
                  <option value='title-ascending'>Alphabetically, A-Z</option>
                  <option value='title-descending'>Alphabetically, Z-A</option>
                  <option value='price-ascending'>Price, low to high</option>
                  <option value='price-descending'>Price, high to low</option>
                  <option value='created-descending'>Date, new to old</option>
                  <option value='created-ascending'>Date, old to new</option>
                </select>
              </div>
              <p className='my-2 sm:my-0'>Showing 1 - 9 of 9 result</p>
            </div>
            <div className='filter-item'>
              <label htmlFor='NumShow' className='inline-block'>
                Show
              </label>{' '}
              :
              <select id='NumShow' className='bg-transparent'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
              </select>
            </div>
            <div className='filter-item'>
              <ul className='shop-tab-nav flex flex-wrap'>
                <li className='active'>
                  <a
                    href='#grid'
                    className='text-base hover:text-orange inline-block py-2 px-2'
                  >
                    <i className='icon-grid'></i>
                  </a>
                </li>
                <li>
                  <a
                    href='#list'
                    className='text-base hover:text-orange inline-block py-2 px-2 ml-5'
                  >
                    <i className='icon-menu'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ----- Filter section end ----- */}
      {/* ----- Products Grid section start ----- */}
      <section id='productsGrid' className='mt-10 shop-tab-content active'>
        <div className='container'>
          <div className='product-grid__items flex flex-wrap -my-4 -mx-4'>
            <div className='product-grid__item w-full md:w-1/2 lg:w-1/3 px-4 py-4'>
              <div className='product-card border border-solid border-gray-300 transition-all hover:shadow-product group relative'>
                <div className='card-top relative overflow-hidden'>
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
                    src='assets/images/products/drone/product1.webp'
                    alt='product image'
                    loading='lazy'
                    width='432'
                    height='480'
                  />
                  {/* ---- Card actions start ------- */}
                  <div className='card-actions-container absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                    <ul className='flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden'>
                      <li className='py-4 pl-7 md:py-5 md:pl-8'>
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle'
                        >
                          <i className='icon-magnifier'></i>
                        </a>
                      </li>
                      <li className='py-4 pl-7 md:py-5 md:pl-8'>
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange'
                        >
                          <i className='icon-heart'></i>
                        </a>
                      </li>
                      <li className='py-4 pl-7 md:py-5 md:pl-8'>
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange'
                        >
                          <i className='icon-refresh'></i>
                        </a>
                      </li>
                      <li className='py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8'>
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle'
                        >
                          <i className='icon-bag'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* ---- Card actions end ------- */}
                  {/* ---- Card color start ------- */}
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
                  {/* ---- Card color end ------- */}
                </div>
                <div className='card-bottom py-5 px-4'>
                  <h4>
                    <a
                      className='block text-base hover:text-orange transition-all'
                      href='#'
                    >
                      Batin crofessor pampden
                    </a>
                  </h4>
                  <h5 className='font-bold text-md leading-none text-orange mt-3'>
                    <del className='font-normal text-sm mr-1 inline-block'>
                      $110.00
                    </del>
                    $130.00
                  </h5>
                </div>
              </div>
            </div>
            <div className='product-grid__item w-full md:w-1/2 lg:w-1/3 px-4 py-4'>
              <div className='product-card border border-solid border-gray-300 transition-all hover:shadow-product group relative'>
                <div className='card-top relative overflow-hidden'>
                  <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3'>
                    Sale
                  </span>
                  <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3'>
                    -11%
                  </span>
                  <img
                    className='w-full h-full'
                    src='assets/images/products/drone/product1.webp'
                    alt='product image'
                    loading='lazy'
                    width='432'
                    height='480'
                  />
                  {/* ---- Card actions start ------- */}
                  <div className='card-actions-container absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                    <ul className='flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden'>
                      <li className='py-4 pl-7 md:py-5 md:pl-8'>
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle'
                        >
                          <i className='icon-magnifier'></i>
                        </a>
                      </li>
                      <li className='py-4 pl-7 md:py-5 md:pl-8'>
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange'
                        >
                          <i className='icon-heart'></i>
                        </a>
                      </li>
                      <li className='py-4 pl-7 md:py-5 md:pl-8'>
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange'
                        >
                          <i className='icon-refresh'></i>
                        </a>
                      </li>
                      <li className='py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8'>
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle'
                        >
                          <i className='icon-bag'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* ---- Card actions end ------- */}
                  {/* ---- Card color start ------- */}
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
                  {/* ---- Card color end ------- */}
                </div>
                <div className='card-bottom py-5 px-4'>
                  <h4>
                    <a
                      className='block text-base hover:text-orange transition-all'
                      href='#'
                    >
                      Batin crofessor pampden
                    </a>
                  </h4>
                  <h5 className='font-bold text-md leading-none text-orange mt-3'>
                    <del className='font-normal text-sm mr-1 inline-block'>
                      $110.00
                    </del>
                    $130.00
                  </h5>
                </div>
              </div>
            </div>
            <div className='product-grid__item w-full md:w-1/2 lg:w-1/3 px-4 py-4'>
              <div className='product-card border border-solid border-gray-300 transition-all hover:shadow-product group relative'>
                <div className='card-top relative overflow-hidden'>
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
                    src='assets/images/products/drone/product1.webp'
                    alt='product image'
                    loading='lazy'
                    width='432'
                    height='480'
                  />
                  {/* ---- Card actions start ------- */}
                  <div className='card-actions-container absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                    <ul className='flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden'>
                      <li className='py-4 pl-7 md:py-5 md:pl-8'>
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle'
                        >
                          <i className='icon-magnifier'></i>
                        </a>
                      </li>
                      <li className='py-4 pl-7 md:py-5 md:pl-8'>
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange'
                        >
                          <i className='icon-heart'></i>
                        </a>
                      </li>
                      <li className='py-4 pl-7 md:py-5 md:pl-8'>
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange'
                        >
                          <i className='icon-refresh'></i>
                        </a>
                      </li>
                      <li className='py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8'>
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle'
                        >
                          <i className='icon-bag'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* ---- Card actions end ------- */}
                  {/* ---- Card color start ------- */}
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
                  {/* ---- Card color end ------- */}
                </div>
                <div className='card-bottom py-5 px-4'>
                  <h4>
                    <a
                      className='block text-base hover:text-orange transition-all'
                      href='#'
                    >
                      Batin crofessor pampden
                    </a>
                  </h4>
                  <h5 className='font-bold text-md leading-none text-orange mt-3'>
                    <del className='font-normal text-sm mr-1 inline-block'>
                      $110.00
                    </del>
                    $130.00
                  </h5>
                </div>
              </div>
            </div>
            <div className='product-grid__item w-full md:w-1/2 lg:w-1/3 px-4 py-4'>
              <div className='product-card border border-solid border-gray-300 transition-all hover:shadow-product group relative'>
                <div className='card-top relative overflow-hidden'>
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
                    src='assets/images/products/drone/product1.webp'
                    alt='product image'
                    loading='lazy'
                    width='432'
                    height='480'
                  />
                  {/* ---- Card actions start ------- */}
                  <div className='card-actions-container absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                    <ul className='flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden'>
                      <li className='py-4 pl-7 md:py-5 md:pl-8'>
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle'
                        >
                          <i className='icon-magnifier'></i>
                        </a>
                      </li>
                      <li className='py-4 pl-7 md:py-5 md:pl-8'>
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange'
                        >
                          <i className='icon-heart'></i>
                        </a>
                      </li>
                      <li className='py-4 pl-7 md:py-5 md:pl-8'>
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange'
                        >
                          <i className='icon-refresh'></i>
                        </a>
                      </li>
                      <li className='py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8'>
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle'
                        >
                          <i className='icon-bag'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* ---- Card actions end ------- */}
                  {/* ---- Card color start ------- */}
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
                  {/* ---- Card color end ------- */}
                </div>
                <div className='card-bottom py-5 px-4'>
                  <h4>
                    <a
                      className='block text-base hover:text-orange transition-all'
                      href='#'
                    >
                      Batin crofessor pampden
                    </a>
                  </h4>
                  <h5 className='font-bold text-md leading-none text-orange mt-3'>
                    <del className='font-normal text-sm mr-1 inline-block'>
                      $110.00
                    </del>
                    $130.00
                  </h5>
                </div>
              </div>
            </div>
            <div className='product-grid__item w-full md:w-1/2 lg:w-1/3 px-4 py-4'>
              <div className='product-card border border-solid border-gray-300 transition-all hover:shadow-product group relative'>
                <div className='card-top relative overflow-hidden'>
                  <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3'>
                    Sale
                  </span>
                  <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3'>
                    -11%
                  </span>
                  <img
                    className='w-full h-full'
                    src='assets/images/products/drone/product1.webp'
                    alt='product image'
                    loading='lazy'
                    width='432'
                    height='480'
                  />
                  {/* ---- Card actions start ------- */}
                  <div className='card-actions-container absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                    <ul className='flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden'>
                      <li className='py-4 pl-7 md:py-5 md:pl-8'>
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle'
                        >
                          <i className='icon-magnifier'></i>
                        </a>
                      </li>
                      <li className='py-4 pl-7 md:py-5 md:pl-8'>
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange'
                        >
                          <i className='icon-heart'></i>
                        </a>
                      </li>
                      <li className='py-4 pl-7 md:py-5 md:pl-8'>
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange'
                        >
                          <i className='icon-refresh'></i>
                        </a>
                      </li>
                      <li className='py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8'>
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle'
                        >
                          <i className='icon-bag'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* ---- Card actions end ------- */}
                  {/* ---- Card color start ------- */}
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
                  {/* ---- Card color end ------- */}
                </div>
                <div className='card-bottom py-5 px-4'>
                  <h4>
                    <a
                      className='block text-base hover:text-orange transition-all'
                      href='#'
                    >
                      Batin crofessor pampden
                    </a>
                  </h4>
                  <h5 className='font-bold text-md leading-none text-orange mt-3'>
                    <del className='font-normal text-sm mr-1 inline-block'>
                      $110.00
                    </del>
                    $130.00
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----- Products Grid section end ----- */}
      {/* ----- Products List section start ----- */}
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
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4'
                        >
                          <i className='icon-magnifier-add'></i>
                        </a>
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
                    <a
                      href='#'
                      className='block text-md hover:text-orange transition-all mb-2'
                    >
                      Batin crofessor pampden
                    </a>
                  </h4>
                  <p className='text-sm'>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                  <h5 className='font-bold text-md leading-none text-orange my-4'>
                    <del className='font-normal text-sm mr-1 inline-block'>
                      $110.00
                    </del>{' '}
                    $130.00
                  </h5>
                  <ul className='flex items-center'>
                    <li className='mr-2'>
                      <a
                        href='#'
                        className='text-dark flex items-center justify-center text-md border border-solid border-dark hover:text-white  hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange'
                      >
                        <i class='icon-heart'></i>
                      </a>
                    </li>
                    <li className='mr-2'>
                      <a
                        href='#'
                        className='text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange'
                      >
                        <i className='icon-basket-loaded'></i>
                        <span className='text-sm ml-2'>Add to cart</span>
                      </a>
                    </li>
                    <li className='mr-2'>
                      <a
                        href='#'
                        className='flex items-center justify-center py-3 px-4 md:px-5 text-md leading-none text-dark border border-solid border-dark hover:text-white hover:bg-orange hover:border-orange transition-all'
                      >
                        <i class='icon-refresh'></i>
                      </a>
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
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4'
                        >
                          <i className='icon-magnifier-add'></i>
                        </a>
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
                    <a
                      href='#'
                      className='block text-md hover:text-orange transition-all mb-2'
                    >
                      Batin crofessor pampden
                    </a>
                  </h4>
                  <p className='text-sm'>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                  <h5 className='font-bold text-md leading-none text-orange my-4'>
                    <del className='font-normal text-sm mr-1 inline-block'>
                      $110.00
                    </del>{' '}
                    $130.00
                  </h5>
                  <ul className='flex items-center'>
                    <li className='mr-2'>
                      <a
                        href='#'
                        className='text-dark flex items-center justify-center text-md border border-solid border-dark hover:text-white  hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange'
                      >
                        <i class='icon-heart'></i>
                      </a>
                    </li>
                    <li className='mr-2'>
                      <a
                        href='#'
                        className='text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange'
                      >
                        <i className='icon-basket-loaded'></i>
                        <span className='text-sm ml-2'>Add to cart</span>
                      </a>
                    </li>
                    <li className='mr-2'>
                      <a
                        href='#'
                        className='flex items-center justify-center py-3 px-4 md:px-5 text-md leading-none text-dark border border-solid border-dark hover:text-white hover:bg-orange hover:border-orange transition-all'
                      >
                        <i class='icon-refresh'></i>
                      </a>
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
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4'
                        >
                          <i className='icon-magnifier-add'></i>
                        </a>
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
                    <a
                      href='#'
                      className='block text-md hover:text-orange transition-all mb-2'
                    >
                      Batin crofessor pampden
                    </a>
                  </h4>
                  <p className='text-sm'>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                  <h5 className='font-bold text-md leading-none text-orange my-4'>
                    <del className='font-normal text-sm mr-1 inline-block'>
                      $110.00
                    </del>{' '}
                    $130.00
                  </h5>
                  <ul className='flex items-center'>
                    <li className='mr-2'>
                      <a
                        href='#'
                        className='text-dark flex items-center justify-center text-md border border-solid border-dark hover:text-white  hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange'
                      >
                        <i class='icon-heart'></i>
                      </a>
                    </li>
                    <li className='mr-2'>
                      <a
                        href='#'
                        className='text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange'
                      >
                        <i className='icon-basket-loaded'></i>
                        <span className='text-sm ml-2'>Add to cart</span>
                      </a>
                    </li>
                    <li className='mr-2'>
                      <a
                        href='#'
                        className='flex items-center justify-center py-3 px-4 md:px-5 text-md leading-none text-dark border border-solid border-dark hover:text-white hover:bg-orange hover:border-orange transition-all'
                      >
                        <i class='icon-refresh'></i>
                      </a>
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
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4'
                        >
                          <i className='icon-magnifier-add'></i>
                        </a>
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
                    <a
                      href='#'
                      className='block text-md hover:text-orange transition-all mb-2'
                    >
                      Batin crofessor pampden
                    </a>
                  </h4>
                  <p className='text-sm'>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                  <h5 className='font-bold text-md leading-none text-orange my-4'>
                    <del className='font-normal text-sm mr-1 inline-block'>
                      $110.00
                    </del>{' '}
                    $130.00
                  </h5>
                  <ul className='flex items-center'>
                    <li className='mr-2'>
                      <a
                        href='#'
                        className='text-dark flex items-center justify-center text-md border border-solid border-dark hover:text-white  hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange'
                      >
                        <i class='icon-heart'></i>
                      </a>
                    </li>
                    <li className='mr-2'>
                      <a
                        href='#'
                        className='text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange'
                      >
                        <i className='icon-basket-loaded'></i>
                        <span className='text-sm ml-2'>Add to cart</span>
                      </a>
                    </li>
                    <li className='mr-2'>
                      <a
                        href='#'
                        className='flex items-center justify-center py-3 px-4 md:px-5 text-md leading-none text-dark border border-solid border-dark hover:text-white hover:bg-orange hover:border-orange transition-all'
                      >
                        <i class='icon-refresh'></i>
                      </a>
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
                        <a
                          href='#'
                          className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4'
                        >
                          <i className='icon-magnifier-add'></i>
                        </a>
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
                    <a
                      href='#'
                      className='block text-md hover:text-orange transition-all mb-2'
                    >
                      Batin crofessor pampden
                    </a>
                  </h4>
                  <p className='text-sm'>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                  <h5 className='font-bold text-md leading-none text-orange my-4'>
                    <del className='font-normal text-sm mr-1 inline-block'>
                      $110.00
                    </del>{' '}
                    $130.00
                  </h5>
                  <ul className='flex items-center'>
                    <li className='mr-2'>
                      <a
                        href='#'
                        className='text-dark flex items-center justify-center text-md border border-solid border-dark hover:text-white  hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange'
                      >
                        <i class='icon-heart'></i>
                      </a>
                    </li>
                    <li className='mr-2'>
                      <a
                        href='#'
                        className='text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange'
                      >
                        <i className='icon-basket-loaded'></i>
                        <span className='text-sm ml-2'>Add to cart</span>
                      </a>
                    </li>
                    <li className='mr-2'>
                      <a
                        href='#'
                        className='flex items-center justify-center py-3 px-4 md:px-5 text-md leading-none text-dark border border-solid border-dark hover:text-white hover:bg-orange hover:border-orange transition-all'
                      >
                        <i class='icon-refresh'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----- Products List section end ----- */}
      {/* ----- Pagination section start ----- */}
      <section id='pagination' className='mt-12 mb-24'>
        <div className='container'>
          <ul className='pagination-items flex flex-wrap items-center justify-center'>
            <li className='pagination-item px-2'>
              <a
                href='#'
                className='w-11 h-11 flex items-center justify-center text-orange leading-none bg-white shadow hover:bg-orange hover:text-white transition-all'
              >
                <i class='icon-arrow-left'></i>
              </a>
            </li>
            <li className='pagination-item px-2'>
              <a
                href='#'
                className='w-11 h-11 flex items-center justify-center  leading-none  shadow bg-orange text-white transition-all'
              >
                1
              </a>
            </li>
            <li className='pagination-item px-2'>
              <a
                href='#'
                className='w-11 h-11 flex items-center justify-center text-orange leading-none bg-white shadow hover:bg-orange hover:text-white transition-all'
              >
                2
              </a>
            </li>
            <li className='pagination-item px-2'>
              <a
                href='#'
                className='w-11 h-11 flex items-center justify-center text-orange leading-none bg-white shadow hover:bg-orange hover:text-white transition-all'
              >
                3
              </a>
            </li>
            <li className='pagination-item px-2'>
              <a
                href='#'
                className='w-11 h-11 flex items-center justify-center text-orange leading-none bg-white shadow hover:bg-orange hover:text-white transition-all'
              >
                <i class='icon-arrow-right'></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* ----- Pagination section end ----- */}
      {/* ----- Contact section start ----- */}
      <section id='contact' className='py-24 bg-gray-100'>
        <div className='container'>
          <div className='max-w-[600px] mx-auto text-center'>
            <a className='inline-block mb-11'>
              <img
                src='assets/images/logo/logo.webp'
                alt='brand logo'
                width='125'
                height='45'
              />
            </a>
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
              <a
                href='#'
                className='contact-icon flex items-center justify-center mx-3 leading-none text-lg text-dark hover:text-orange transition '
              >
                <i className='icon-social-facebook'></i>
              </a>
              <a
                href='#'
                className='contact-icon flex items-center justify-center mx-3 leading-none text-lg text-dark hover:text-orange transition '
              >
                <i className='icon-social-twitter'></i>
              </a>
              <a
                href='#'
                className='contact-icon flex items-center justify-center mx-3 leading-none text-lg text-dark hover:text-orange transition '
              >
                <i className='icon-social-instagram'></i>
              </a>
              <a
                href='#'
                className='contact-icon flex items-center justify-center mx-3 leading-none text-lg text-dark hover:text-orange transition '
              >
                <i className='icon-social-youtube'></i>
              </a>
              <a
                href='#'
                className='contact-icon flex items-center justify-center mx-3 leading-none text-lg text-dark hover:text-orange transition '
              >
                <i className='icon-social-dribbble'></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ----- Contact section end ----- */}
      {/* ----- Footer section start ----- */}
      <footer id='footer' className='py-8 bg-gray-500'>
        <div className='container'>
          <div className='flex flex-wrap md:flex-row-reverse items-center justify-center gap-4'>
            <div className='footer-image-container w-full md:w-1/2 text-center'>
              <img
                src='assets/images/logo/payment.webp'
                alt=''
                className='footer-image inline-block'
                width='286'
                height='23'
              />
            </div>
            <div className='footer-content flex-1 flex items-center justify-center md:jutify-start'>
              <p className='text-white flex flex-wrap items-center text-sm lg:text-base'>
                © 2022 Sinp. Made with{' '}
                <i className='icon-heart mx-2 text-orange'></i> by
                <a href='#' className='ml-1 transition hover:text-orange'>
                  Codecarnival
                </a>
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
