import Link from 'next/link';
import { Container } from './container';

const Navbar = () => {
  return (
    <nav className='py-4 border-b-2'>
      <Container className='flex justify-between items-center'>
        <div className='flex items-center '>
          <Link
            href='/'
            className='text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl'
          >
            <img
            className='h-[88px] w-[88px] rounded-[50%]  object-cover'
            src="./logo.jpg" alt="" />
          </Link>
        </div>
        <div className='flex'>
          <Link
            href='/'
            className='px-4 py-2 text-md sm:text-xl font-medium hover:font-bold'
          >

        الحصول على الاتجاهات

          </Link>
          <Link
            href='/blog'
            className='px-4 py-2 text-md sm:text-xl font-medium hover:font-bold'
          >
            الاتصال الآن
          </Link>
          {/* <Link
            href='/about'
            className='px-4 py-2 text-xl font-medium hover:font-bold'
          >
            About
          </Link> */}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;