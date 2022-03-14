import { memo } from 'react';

const FilterSection = ({
  isShowProductsGrid,
  onShowGridClick,
  onShowListClick
}) => {
  console.log('FilterSection rerender');
  return (
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
              <li className={isShowProductsGrid ? 'active' : ''}>
                <button
                  onClick={onShowGridClick}
                  className='text-base hover:text-orange inline-block py-2 px-2'
                >
                  <i className='icon-grid'></i>
                </button>
              </li>
              <li className={!isShowProductsGrid ? 'active' : ''}>
                <button
                  onClick={onShowListClick}
                  className='text-base hover:text-orange inline-block py-2 px-2 ml-5'
                >
                  <i className='icon-menu'></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(FilterSection);
