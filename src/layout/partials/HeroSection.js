import { memo } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ pageName }) => {
  console.log('HeroSection rerender');
  return (
    <section id='hero-section' className='py-9 bg-gray-light min-h-full'>
      <div className='container'>
        <ul className='flex flex-wrap items-center justify-center'>
          <li className='w-auto mr-5'>
            <Link
              to='/'
              className='text-dark font-medium text-base uppercase transition-all hover:text-orange relative before:w-5 before:h-1px before:empty before:absolute before:top-3 before:bg-dark before:transform before:rotate-115 before:-right-5'
            >
              Home
            </Link>
          </li>
          <li className='w-auto text-dark font-medium text-base uppercase'>
            {pageName.toUpperCase()}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default memo(HeroSection);
