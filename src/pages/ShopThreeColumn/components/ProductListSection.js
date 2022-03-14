import { Link } from 'react-router-dom';

const ProductListSection = () => {
  return (
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
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
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
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
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
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
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
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
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
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
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
  );
};

export default ProductListSection;
