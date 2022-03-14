import { memo } from 'react';
import { Link } from 'react-router-dom';

const PaginationSection = () => {
  console.log('PaginationSection rerender');
  return (
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
  );
};

export default memo(PaginationSection);
