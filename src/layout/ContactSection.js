import { Link } from 'react-router-dom';

const ContactSection = ({ email, onEmailInputChange, onFormSubmit }) => {
  console.log('ContactSection rerender');
  return (
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.aliqua. Ut
            enim ad minim. Lorem ipsum dolor sit amet.
          </p>
          <form
            action=''
            id='contact-form'
            className='relative text-center md:max-w-xl mx-auto mb-10'
            onSubmit={onFormSubmit}
          >
            <input
              type='email'
              id='mail-input'
              name='email'
              value={email}
              onChange={onEmailInputChange}
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
  );
};

export default ContactSection;
