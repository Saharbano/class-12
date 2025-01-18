// import React from 'react'

// const Hero = () => {
//   return (
//     <div>
//     <div className='w-full h-[829px] flex justify-around bg-[#043873]'>
//     <div className='w-[656px] h-[361px] gap-[60px] m-[92px]'>
//  <div className='w-[656px] h-[154px] mt-12'>
// <h1 className='text-[#FFFFFF] m-4 font-[inter] font-bold text-[64px] leading-[77.45px] tracking-[-2]'>Get More Done with whitepace</h1>
//    </div>
//    <br /> 
                                                                
//  <div className='w-[656px] h-[60px]'>
//   <p className='text-[#FFFFFF] font-[inter] font-normal text-[18px] leading-[28px] tracking-[2]'>Project management software that enables your teams to collaborate, plan, 
//    analyze and  manage everyday tasks</p>
//  </div>
//     </div>
//     <div className='w-[824px] h-[549px]  bg-[#C4DEFD] mt-[92px]'>
//  </div>
//   </div>
//    </div>


//   )
// }

// export default Hero


import React from 'react';

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col-reverse lg:flex-row justify-around items-center bg-[#043873]">
      {/* Text Section */}
      <div className="flex flex-col gap-6 px-6 py-8 lg:py-16 lg:px-12 lg:w-1/2">
        <h1 className="text-white font-bold text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] lg:text-[64px] lg:leading-[77.45px] tracking-tight">
          Get More Done with Whitepace
        </h1>
        <p className="text-white text-[16px] leading-[24px] md:text-[18px] md:leading-[28px] tracking-wide">
          Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
        </p>
      </div>

      {/* Image/Background Section */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:w-1/2 lg:h-[549px] bg-[#C4DEFD] mt-6 lg:mt-0 flex-shrink-0">
        {/* Placeholder for an image or other content */}
      </div>
    </div>
  );
};

export default Hero;
