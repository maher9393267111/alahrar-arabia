import React from 'react'

export default function oursubs() {
  return (
    <div className=" my-12">

<div className='text-center text-[40px]  transition-all mb-[55px]  duration-300  cursor-pointer  hover:font-bold'>
    <h1>
        فروعنا
    </h1>
</div>



{/* -------list---- */}

<div className=' container mx-2 sm:mx-12'>



<ol className=' list-decimal container'>

<li>


<div className='flex text-[6px] flex-wrap items-center gap-2  sm:gap-6 '>
<p className='font-semibold text-md sm:text-xl'>الفرع الرئيسيي</p>
<p className=''>شركة الأحرار العربية - حي الأعلام -  شارع البدالة - مجمع الملعب</p>

<p className=' flex gap-1 sm:gap-2 items-center'>
    <img className=' w-2 h-2 sm:w-8 sm:h-8 object-cover' src="https://www.svgrepo.com/show/134581/whatsapp.svg" alt="" />
    <span>0770500077</span>
</p>


</div>

</li>

</ol>










</div>



    </div>
  )
}
