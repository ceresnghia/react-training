import { Link } from 'react-router-dom';
import { formatMoney } from '../../../../utils/formatMoney';

const ProductGridCard = ({ product }) => {
  return (
    <div className='product-grid__item w-full md:w-1/2 lg:w-1/3 px-4 py-4'>
      <div className='product-card border border-solid border-gray-300 transition-all hover:shadow-product group relative'>
        <div className='card-top relative overflow-hidden'>
          <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3'>
            {product.isNew && 'New'}
          </span>
          <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3'>
            {product.isSale && 'Sale'}
          </span>
          <span className='font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3'>
            {product.isSale && `-${product.saleAmount}%`}
          </span>
          <img
            className='w-full h-full'
            src={product.img}
            alt='product image'
            loading='lazy'
            width='432'
            height='480'
          />
          {/* ---- Card actions start ------- */}
          <div className='card-actions-container absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10'>
            <ul className='flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden'>
              <li className='py-4 pl-7 md:py-5 md:pl-8'>
                <Link
                  to='/shop-grid-col-3'
                  className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle'
                >
                  <i className='icon-magnifier'></i>
                </Link>
              </li>
              <li className='py-4 pl-7 md:py-5 md:pl-8'>
                <Link
                  to='/shop-grid-col-3'
                  className='text-dark flex items-center justify-center text-md hover:text-orange'
                >
                  <i className='icon-heart'></i>
                </Link>
              </li>
              <li className='py-4 pl-7 md:py-5 md:pl-8'>
                <Link
                  to='/shop-grid-col-3'
                  className='text-dark flex items-center justify-center text-md hover:text-orange'
                >
                  <i className='icon-refresh'></i>
                </Link>
              </li>
              <li className='py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8'>
                <Link
                  to='/shop-grid-col-3'
                  className='text-dark flex items-center justify-center text-md hover:text-orange modal-toggle'
                >
                  <i className='icon-bag'></i>
                </Link>
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
            <Link
              className='block text-base hover:text-orange transition-all'
              to='/shop-grid-col-3'
            >
              Batin crofessor pampden
            </Link>
          </h4>
          <h5 className='font-bold text-md leading-none text-orange mt-3'>
            <del className='font-normal text-sm mr-1 inline-block'>
              {formatMoney(product.price)}
            </del>
            {formatMoney(product.salePrice)}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ProductGridCard;
