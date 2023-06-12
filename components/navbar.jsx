import Link from 'next/link';
import { Container } from './container';
import { whatsapp } from '../data/links';

const Navbar = () => {
  return (
    <nav className='py-4 border-b-2 fixed top-0 left-0 right-0  bg-[#003900] '>
      <Container className='flex justify-between items-center'>
        <div className='flex items-center '>
          <Link
            href='/'
            className='text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl'
          >
            <img
            className='md:h-[88px] h-[55px] w-[55px] md:w-[88px] rounded-[50%]  object-cover'
            src="./logo.jpg" alt="" />
          </Link>
        </div>
        <div className='flex'>
          <Link
            href='https://www.google.com/maps/place/%D8%B4%D8%B1%D9%83%D8%A9+%D8%A7%D9%84%D8%A7%D8%AD%D8%B1%D8%A7%D8%B1+%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9+AL-AHRAR+EXC%E2%80%AD/@41.0099031,28.9471323,17z/data=!3m1!4b1!4m6!3m5!1s0x14caba28d55e0171:0xcdb3c64334db17a7!8m2!3d41.0099031!4d28.9471323!16s%2Fg%2F11gbx9wddh?entry=ttu'
            className='px-4 py-2 items-center flex gap-1 text-[10px] sm:text-xl font-medium hover:font-bold'
          >


<span>
  <img className='w-8 h-8 object-cover' src="https://www.svgrepo.com/show/452221/google-maps.svg" alt="" />
</span>


<p className=' '>

الحصول على الاتجاهات
</p>


          </Link>
          <Link
            href='https://wa.me/905319913648'
            className='px-4 flex items-center gap-1 py-2 text-[10px] sm:text-xl font-medium hover:font-bold'
          >

<span>
<svg viewBox="0 0 1024.00 1024.00" class="icon w-[40px] h-[40px]" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#964a4a" stroke="#964a4a" stroke-width="0.01024"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M834.133333 149.333333h-78.933333C473.6 153.6 151.466667 514.133333 149.333333 755.2v78.933333c0 21.333333 17.066667 40.533333 40.533334 40.533334l160-2.133334c21.333333 0 40.533333-19.2 40.533333-40.533333l4.266667-174.933333-100.266667-85.333334c0-55.466667 224-279.466667 281.6-281.6l91.733333 100.266667 168.533334-4.266667c21.333333 0 40.533333-19.2 40.533333-40.533333L874.666667 189.866667c0-23.466667-17.066667-40.533333-40.533334-40.533334z" fill="#f5f5f5"></path></g></svg>

</span>


<p >
تواصل واتس اب
</p>
 


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