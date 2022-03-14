import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='py-6 lg:py-0'>
      <div className='container '>
        <div className='header flex items-center'>
          <div className='header-left__col w-6/12 lg:w-2/12'>
            <div className='header-logo'>
              <Link to='/shop-grid-col-3'>
                <img
                  src='assets/images/logo/logo.webp'
                  alt='logo'
                  loading='lazy'
                  width='125'
                  height='45'
                />
              </Link>
            </div>
          </div>
          <div className='header-middle__col hidden lg:flex flex-1 relative'>
            <nav className='header-nav'>
              <ul className='flex flex-wrap'>
                <li className='header-nav__item relative group'>
                  <Link
                    className='block py-10 xl:pr-6 md:pr-5 capitalize font-normal text-md text-primary hover:text-orange transition-all'
                    to='/shop-grid-col-3'
                  >
                    Home
                  </Link>
                  <ul className='submenu bg-white py-3 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10 min-w-max'>
                    <li className='my-3'>
                      <Link
                        className='text-dark font-normal text-base capitalize transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        Airpod
                      </Link>
                    </li>
                    <li className='my-3'>
                      <Link
                        className='text-dark font-normal text-base capitalize transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        Smartwatch
                      </Link>
                    </li>
                    <li className='my-3'>
                      <Link
                        className='text-dark font-normal text-base capitalize transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        Drone
                      </Link>
                    </li>
                    <li className='my-3'>
                      <Link
                        className='text-dark font-normal text-base capitalize transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        BackPack
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='header-nav__item group'>
                  <Link
                    className='block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all'
                    to='/shop-grid-col-3'
                  >
                    Shop
                  </Link>
                  <ul className='mega-menu flex flex-wrap bg-white py-5 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10'>
                    <li className='flex-auto px-4'>
                      <Link
                        className='font-normal text-base capitalize text-dark pb-5 border-b block border-solid border-gray-600 mb-6 tracking-wide transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        Shop Grid{' '}
                      </Link>
                      <ul className='pb-2'>
                        <li className='my-3'>
                          <Link
                            className='font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all'
                            to='/shop-grid-col-3'
                          >
                            Shop Grid 3 Column
                          </Link>
                        </li>
                        <li className='my-3'>
                          <Link
                            className='font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all'
                            to='/shop-grid-col-3'
                          >
                            Shop Grid 4 Column
                          </Link>
                        </li>
                        <li className='my-3'>
                          <Link
                            className='font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all'
                            to='/shop-grid-col-3'
                          >
                            Shop Grid Left Sidebar
                          </Link>
                        </li>
                        <li className='my-3'>
                          <Link
                            className='font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all'
                            to='/shop-grid-col-3'
                          >
                            shop Grid Right Sidebar
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className='flex-auto px-4'>
                      <Link
                        className='font-normal text-base capitalize text-dark pb-5 border-b block border-solid border-gray-600 mb-6 tracking-wide transition-all hover:text-orange'
                        to='shop-list.html'
                      >
                        shop list
                      </Link>
                      <ul className='pb-2'>
                        <li className='my-3'>
                          <Link
                            className='font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all'
                            to='/shop-grid-col-3'
                          >
                            Shop List
                          </Link>
                        </li>
                        <li className='my-3'>
                          <Link
                            className='font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all'
                            to='/shop-grid-col-3'
                          >
                            Shop List Left Sidebar
                          </Link>
                        </li>
                        <li className='my-3'>
                          <Link
                            className='font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all'
                            to='/shop-grid-col-3'
                          >
                            Shop List Right Sidebar
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className='flex-auto px-4'>
                      <Link
                        className='font-normal text-base capitalize text-dark pb-5 border-b block border-solid border-gray-600 mb-6 tracking-wide transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        Product Types
                      </Link>
                      <ul className='pb-2'>
                        <li className='my-3'>
                          <Link
                            className='font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all'
                            to='/shop-grid-col-3'
                          >
                            Shop Single
                          </Link>
                        </li>
                        <li className='my-3'>
                          <Link
                            className='font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all'
                            to='/shop-grid-col-3'
                          >
                            Shop Variable
                          </Link>
                        </li>
                        <li className='my-3'>
                          <Link
                            className='font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all'
                            to='/shop-grid-col-3'
                          >
                            Shop Affiliate
                          </Link>
                        </li>
                        <li className='my-3'>
                          <Link
                            className='font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all'
                            to='/shop-grid-col-3'
                          >
                            Shop Group
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className='overflow-hidden flex-auto mx-4'>
                      <Link to='/shop-grid-col-3'>
                        <img
                          className='transform hover:scale-105 transition-all w-full'
                          src='assets/images/mega-menu/megamenu.webp'
                          alt='Smartwatch'
                          width='1000'
                          height='120'
                        />
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='header-nav__item relative group'>
                  <Link
                    className='block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all'
                    to='/shop-grid-col-3'
                  >
                    Blog
                  </Link>
                  <ul className='submenu bg-white py-3 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10 min-w-max'>
                    <li className='my-3'>
                      <Link
                        className='text-dark font-normal text-base capitalize transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        Blog Grid 3 Column
                      </Link>
                    </li>
                    <li className='my-3'>
                      <Link
                        className='text-dark font-normal text-base capitalize transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        Blog Grid 2 Column
                      </Link>
                    </li>
                    <li className='my-3'>
                      <Link
                        className='text-dark font-normal text-base capitalize transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        Blog Grid Left Sidebar
                      </Link>
                    </li>
                    <li className='my-3'>
                      <Link
                        className='text-dark font-normal text-base capitalize transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        Blog Grid Right Sidebar
                      </Link>
                    </li>
                    <li className='my-3'>
                      <Link
                        className='text-dark font-normal text-base capitalize transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        Blog list
                      </Link>
                    </li>
                    <li className='my-3'>
                      <Link
                        className='text-dark font-normal text-base capitalize transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        Blog List Left Sidebar
                      </Link>
                    </li>
                    <li className='my-3'>
                      <Link
                        className='text-dark font-normal text-base capitalize transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        {' '}
                        Blog List Right Sideba
                      </Link>
                    </li>
                    <li className='my-3'>
                      <Link
                        className='text-dark font-normal text-base capitalize transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        {' '}
                        Blog details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='header-nav__item relative group'>
                  <Link
                    className='block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all'
                    to='/shop-grid-col-3'
                  >
                    Pages
                  </Link>
                  <ul className='submenu bg-white py-3 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10 min-w-max'>
                    <li className='my-3'>
                      <Link
                        className='text-dark font-normal text-base capitalize transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        About Page
                      </Link>
                    </li>
                    <li className='my-3'>
                      <Link
                        className='text-dark font-normal text-base capitalize transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        Cart Page
                      </Link>
                    </li>
                    <li className='my-3'>
                      <Link
                        className='text-dark font-normal text-base capitalize transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        Checkout Page
                      </Link>
                    </li>
                    <li className='my-3'>
                      <Link
                        className='text-dark font-normal text-base capitalize transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        Compare Page
                      </Link>
                    </li>
                    <li className='my-3'>
                      <Link
                        className='text-dark font-normal text-base capitalize transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        Login &amp; Register Page
                      </Link>
                    </li>
                    <li className='my-3'>
                      <Link
                        className='text-dark font-normal text-base capitalize transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        Account Page
                      </Link>
                    </li>
                    <li className='my-3'>
                      <Link
                        className='text-dark font-normal text-base capitalize transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        Wishlist Page
                      </Link>
                    </li>
                    <li className='my-3'>
                      <Link
                        className='text-dark font-normal text-base capitalize transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        Frequently Questions
                      </Link>
                    </li>
                    <li className='my-3'>
                      <Link
                        className='text-dark font-normal text-base capitalize transition-all hover:text-orange'
                        to='/shop-grid-col-3'
                      >
                        Error 404
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='header-nav__item'>
                  <Link
                    className='block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all'
                    to='/shop-grid-col-3'
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='header-right__col min-w-fit w-6/12 lg:w-2/12'>
            <ul className='flex items-center justify-end'>
              <li className='header-search ml-6 hidden lg:block'>
                <button className='search-toggle text-right text-primary text-md hover:text-orange transition-all'>
                  <i className='icon-magnifier'></i>
                </button>
              </li>
              <li className='ml-6'>
                <Link
                  to='/shop-grid-col-3'
                  className='text-primary text-md hover:text-orange transition-all relative'
                >
                  <span className='w-5 h-5 bg-dark text-white text-sm rounded-full font-normal flex flex-wrap items-center justify-center absolute -top-3 left-2 leading-none'>
                    4
                  </span>
                  <i className='icon-bag'></i>
                  <span className='text-base leading-none text-dark pl-1'>
                    $245
                  </span>
                </Link>
              </li>
              <li id='toggle-menu' className='ml-6 hidden lg:block'>
                <button className='text-primary text-md hover:text-orange transition-all toggle-menu'>
                  <i className='icon-settings'></i>
                </button>
              </li>
              <li className='ml-6 lg:hidden'>
                <Link
                  to='/shop-grid-col-3'
                  className='offcanvas-toggle text-primary text-md hover:text-orange transition-all'
                >
                  <i className='icon-menu'></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
