import React from 'react'

export default function Footer() {
  return (
    <div className=" mb-12 mt-[55px] md:mt-[100px]">

<div className='text-center text-[40px] sm:text-[52px]  transition-all mb-[55px]  duration-300  cursor-pointer  hover:font-bold'>

<h1 className=''>
الاتصال بنا
</h1>

<hr className ='text-center w-1/2 m-auto mt-2' />


</div>


{/* ---contact--- */}

<div className='my-12 text-center'>
<div className='flex flex-col   md:!flex-row gap-4  w-1/2 m-auto   justify-around '>

<div className=' mb-6 md:mb-0'>
    <p className='text-xl md:text-2xl font-semibold cursor-pointer'>
رقم الاتصال
    </p>

<div>
    <button className='bg-[#5AB889] p-3 font-semibold hover:bg-[#00B889]   my-4 rounded-xl text-2xl'>الاتصال الآن</button>

</div>

<div>
    <p dir='lft'
     className=' text-xl md:text-2xl '>
    05319913648
    </p>
</div>

</div>

<div className='text-xl md:text-2xl font-semibold cursor-pointer'>
    <p>
العنوان
    </p>



    <div>
    <button className='bg-[#5AB889] p-3 font-semibold hover:bg-[#00B889]   my-4 rounded-xl text-xl md:text-2xl'>

<a href="https://www.google.com/maps/place/%D8%B4%D8%B1%D9%83%D8%A9+%D8%A7%D9%84%D8%A7%D8%AD%D8%B1%D8%A7%D8%B1+%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9+AL-AHRAR+EXC%E2%80%AD/@41.0099031,28.9471323,17z/data=!3m1!4b1!4m6!3m5!1s0x14caba28d55e0171:0xcdb3c64334db17a7!8m2!3d41.0099031!4d28.9471323!16s%2Fg%2F11gbx9wddh?entry=ttu">



    ‏‫الحصول على الاتجاهات
    </a>

    </button>

</div>


</div>


</div>


</div>



{/* ----map---- */}

<div className='text-center'>

<div className='map-canvas'>



<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.7016418460867!2d28.9471323!3d41.009903099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba28d55e0171%3A0xcdb3c64334db17a7!2z2LTYsdmD2Kkg2KfZhNin2K3Ysdin2LEg2KfZhNi52LHYqNmK2KkgQUwtQUhSQVIgRVhD!5e0!3m2!1sen!2str!4v1686584964615!5m2!1sen!2str" 

// width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
loading="lazy" referrerpolicy="no-referrer-when-downgrade"

></iframe>


</div>


</div>




    </div>
  )
}
