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
                href='index.html'
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
              <div className='shop-select flex mr-12'>
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
                    class='text-base hover:text-orange inline-block py-2 px-2'
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
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3'>
                    Sale
                  </span>
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3'>
                    -11%
                  </span>
                  <img
                    class='w-full h-full'
                    src='assets/images/products/drone/product1.webp'
                    alt='product image'
                    loading='lazy'
                    width='432'
                    height='480'
                  />
                  {/* ---- Card actions start ------- */}
                  <div className='card-actions-container absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                    <ul className='flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden'>
                      <li class='py-4 pl-7 md:py-5 md:pl-8'>
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
                          class='text-dark flex items-center justify-center text-md hover:text-orange'
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
                        <button
                          className='w-4 h-4 rounded-full bg-primary'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-indigo-600'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-dark'
                          aria-label='variants'
                        ></button>
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
                  <h5 class='font-bold text-md leading-none text-orange mt-3'>
                    <del class='font-normal text-sm mr-1 inline-block'>
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
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3'>
                    Sale
                  </span>
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3'>
                    -11%
                  </span>
                  <img
                    class='w-full h-full'
                    src='assets/images/products/drone/product1.webp'
                    alt='product image'
                    loading='lazy'
                    width='432'
                    height='480'
                  />
                  {/* ---- Card actions start ------- */}
                  <div className='card-actions-container absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                    <ul className='flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden'>
                      <li class='py-4 pl-7 md:py-5 md:pl-8'>
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
                          class='text-dark flex items-center justify-center text-md hover:text-orange'
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
                        <button
                          className='w-4 h-4 rounded-full bg-primary'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-indigo-600'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-dark'
                          aria-label='variants'
                        ></button>
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
                  <h5 class='font-bold text-md leading-none text-orange mt-3'>
                    <del class='font-normal text-sm mr-1 inline-block'>
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
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3'>
                    Sale
                  </span>
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3'>
                    -11%
                  </span>
                  <img
                    class='w-full h-full'
                    src='assets/images/products/drone/product1.webp'
                    alt='product image'
                    loading='lazy'
                    width='432'
                    height='480'
                  />
                  {/* ---- Card actions start ------- */}
                  <div className='card-actions-container absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                    <ul className='flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden'>
                      <li class='py-4 pl-7 md:py-5 md:pl-8'>
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
                          class='text-dark flex items-center justify-center text-md hover:text-orange'
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
                        <button
                          className='w-4 h-4 rounded-full bg-primary'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-indigo-600'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-dark'
                          aria-label='variants'
                        ></button>
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
                  <h5 class='font-bold text-md leading-none text-orange mt-3'>
                    <del class='font-normal text-sm mr-1 inline-block'>
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
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3'>
                    Sale
                  </span>
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3'>
                    -11%
                  </span>
                  <img
                    class='w-full h-full'
                    src='assets/images/products/drone/product1.webp'
                    alt='product image'
                    loading='lazy'
                    width='432'
                    height='480'
                  />
                  {/* ---- Card actions start ------- */}
                  <div className='card-actions-container absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                    <ul className='flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden'>
                      <li class='py-4 pl-7 md:py-5 md:pl-8'>
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
                          class='text-dark flex items-center justify-center text-md hover:text-orange'
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
                        <button
                          className='w-4 h-4 rounded-full bg-primary'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-indigo-600'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-dark'
                          aria-label='variants'
                        ></button>
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
                  <h5 class='font-bold text-md leading-none text-orange mt-3'>
                    <del class='font-normal text-sm mr-1 inline-block'>
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
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3'>
                    Sale
                  </span>
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3'>
                    -11%
                  </span>
                  <img
                    class='w-full h-full'
                    src='assets/images/products/drone/product1.webp'
                    alt='product image'
                    loading='lazy'
                    width='432'
                    height='480'
                  />
                  {/* ---- Card actions start ------- */}
                  <div className='card-actions-container absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                    <ul className='flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden'>
                      <li class='py-4 pl-7 md:py-5 md:pl-8'>
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
                          class='text-dark flex items-center justify-center text-md hover:text-orange'
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
                        <button
                          className='w-4 h-4 rounded-full bg-primary'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-indigo-600'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-dark'
                          aria-label='variants'
                        ></button>
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
                  <h5 class='font-bold text-md leading-none text-orange mt-3'>
                    <del class='font-normal text-sm mr-1 inline-block'>
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
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3'>
                    Sale
                  </span>
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3'>
                    -11%
                  </span>
                  <img
                    class='w-full h-full'
                    src='assets/images/products/drone/product1.webp'
                    alt='product image'
                    loading='lazy'
                    width='432'
                    height='480'
                  />
                  {/* ---- Card actions start ------- */}
                  <div className='card-actions-container absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                    <ul className='flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden'>
                      <li class='py-4 pl-7 md:py-5 md:pl-8'>
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
                          class='text-dark flex items-center justify-center text-md hover:text-orange'
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
                        <button
                          className='w-4 h-4 rounded-full bg-primary'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-indigo-600'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-dark'
                          aria-label='variants'
                        ></button>
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
                  <h5 class='font-bold text-md leading-none text-orange mt-3'>
                    <del class='font-normal text-sm mr-1 inline-block'>
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
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3'>
                    Sale
                  </span>
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3'>
                    -11%
                  </span>
                  <img
                    class='w-full h-full'
                    src='assets/images/products/drone/product1.webp'
                    alt='product image'
                    loading='lazy'
                    width='432'
                    height='480'
                  />
                  {/* ---- Card actions start ------- */}
                  <div className='card-actions-container absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                    <ul className='flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden'>
                      <li class='py-4 pl-7 md:py-5 md:pl-8'>
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
                          class='text-dark flex items-center justify-center text-md hover:text-orange'
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
                        <button
                          className='w-4 h-4 rounded-full bg-primary'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-indigo-600'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-dark'
                          aria-label='variants'
                        ></button>
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
                  <h5 class='font-bold text-md leading-none text-orange mt-3'>
                    <del class='font-normal text-sm mr-1 inline-block'>
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
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3'>
                    Sale
                  </span>
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3'>
                    -11%
                  </span>
                  <img
                    class='w-full h-full'
                    src='assets/images/products/drone/product1.webp'
                    alt='product image'
                    loading='lazy'
                    width='432'
                    height='480'
                  />
                  {/* ---- Card actions start ------- */}
                  <div className='card-actions-container absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                    <ul className='flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden'>
                      <li class='py-4 pl-7 md:py-5 md:pl-8'>
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
                          class='text-dark flex items-center justify-center text-md hover:text-orange'
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
                        <button
                          className='w-4 h-4 rounded-full bg-primary'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-indigo-600'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-dark'
                          aria-label='variants'
                        ></button>
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
                  <h5 class='font-bold text-md leading-none text-orange mt-3'>
                    <del class='font-normal text-sm mr-1 inline-block'>
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
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3'>
                    Sale
                  </span>
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3'>
                    -11%
                  </span>
                  <img
                    class='w-full h-full'
                    src='assets/images/products/drone/product1.webp'
                    alt='product image'
                    loading='lazy'
                    width='432'
                    height='480'
                  />
                  {/* ---- Card actions start ------- */}
                  <div className='card-actions-container absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                    <ul className='flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden'>
                      <li class='py-4 pl-7 md:py-5 md:pl-8'>
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
                          class='text-dark flex items-center justify-center text-md hover:text-orange'
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
                        <button
                          className='w-4 h-4 rounded-full bg-primary'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-indigo-600'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-dark'
                          aria-label='variants'
                        ></button>
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
                  <h5 class='font-bold text-md leading-none text-orange mt-3'>
                    <del class='font-normal text-sm mr-1 inline-block'>
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
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3'>
                    Sale
                  </span>
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3'>
                    -11%
                  </span>
                  <img
                    class='w-full h-full'
                    src='assets/images/products/drone/product1.webp'
                    alt='product image'
                    loading='lazy'
                    width='432'
                    height='480'
                  />
                  {/* ---- Card actions start ------- */}
                  <div className='card-actions-container absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                    <ul className='flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden'>
                      <li class='py-4 pl-7 md:py-5 md:pl-8'>
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
                          class='text-dark flex items-center justify-center text-md hover:text-orange'
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
                        <button
                          className='w-4 h-4 rounded-full bg-primary'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-indigo-600'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-dark'
                          aria-label='variants'
                        ></button>
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
                  <h5 class='font-bold text-md leading-none text-orange mt-3'>
                    <del class='font-normal text-sm mr-1 inline-block'>
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
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3'>
                    Sale
                  </span>
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3'>
                    -11%
                  </span>
                  <img
                    class='w-full h-full'
                    src='assets/images/products/drone/product1.webp'
                    alt='product image'
                    loading='lazy'
                    width='432'
                    height='480'
                  />
                  {/* ---- Card actions start ------- */}
                  <div className='card-actions-container absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                    <ul className='flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden'>
                      <li class='py-4 pl-7 md:py-5 md:pl-8'>
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
                          class='text-dark flex items-center justify-center text-md hover:text-orange'
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
                        <button
                          className='w-4 h-4 rounded-full bg-primary'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-indigo-600'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-dark'
                          aria-label='variants'
                        ></button>
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
                  <h5 class='font-bold text-md leading-none text-orange mt-3'>
                    <del class='font-normal text-sm mr-1 inline-block'>
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
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3'>
                    Sale
                  </span>
                  <span class='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3'>
                    -11%
                  </span>
                  <img
                    class='w-full h-full'
                    src='assets/images/products/drone/product1.webp'
                    alt='product image'
                    loading='lazy'
                    width='432'
                    height='480'
                  />
                  {/* ---- Card actions start ------- */}
                  <div className='card-actions-container absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
                    <ul className='flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden'>
                      <li class='py-4 pl-7 md:py-5 md:pl-8'>
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
                          class='text-dark flex items-center justify-center text-md hover:text-orange'
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
                        <button
                          className='w-4 h-4 rounded-full bg-primary'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-indigo-600'
                          aria-label='variants'
                        ></button>
                      </li>
                      <li className='mx-1 leading-none'>
                        <button
                          className='w-4 h-4 rounded-full bg-dark'
                          aria-label='variants'
                        ></button>
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
                  <h5 class='font-bold text-md leading-none text-orange mt-3'>
                    <del class='font-normal text-sm mr-1 inline-block'>
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
    </>
  );
}

export default ShopThreeColumn;
