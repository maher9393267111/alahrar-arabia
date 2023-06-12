import React from 'react'

export default function Services() {
  return (
    <div className='my-12'>

<div className="text-center text-[40px]  transition-all mb-[55px]  duration-300  cursor-pointer  hover:font-bold'">
    <h1>
        خدماتنا
    </h1>
    <hr className ='text-center w-1/2 m-auto mt-2 ' />
</div>




{/* images grid--- */}

<div>

<div className=' grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>


<div>
    <img className='rounded-[10%] sm:!h-[310px] object-cover hover:shadow-black hover:shadow-lg transition-all duration-200' src="/service-1.jpg" alt="" />
</div>


<div>
    <img className='rounded-[10%] sm:!h-[310px] object-conver hover:shadow-black hover:shadow-lg transition-all duration-200' src="/service-2.jpg" alt="" />
</div>

<div>
    <img className='rounded-[10%] sm:!h-[310px] object-cover hover:shadow-black hover:shadow-lg transition-all duration-200' src="/service-3.jpg" alt="" />
</div>

<div>
    <img className='rounded-[10%] sm:!h-[310px] object-cover hover:shadow-black hover:shadow-lg transition-all duration-200' src="/service-4.jpg" alt="" />
</div>


</div>



</div>


    </div>
  )
}
