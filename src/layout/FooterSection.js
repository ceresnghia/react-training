import { memo } from 'react';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  console.log('FooterSection rerender');
  return (
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
  );
};

export default memo(FooterSection);
