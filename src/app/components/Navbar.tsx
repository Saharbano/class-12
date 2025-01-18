import React from 'react'


const Navbar = () => {
  return (
    <div>

      <div className='w-full h-[82px] bg-[#043873] flex justify-around items-center'>
     
     
     
      <div className='text-white'>
        <h1 className='text-5xl'>logo</h1>
        {/* <Image src={image} width={191} height={34} alt='logo' ></Image> */}
      </div>



      <div className='w-[737.5] h-[60px] gap-[60px] flex justify-between'>



        <div className='w-[549px] h-[23px] gap-8 items-center'>

        <ul className='flex m-6  text-white gap-[35px]'>
          <li>Products</li>
          <li>Solutions</li>
          <li>Resourrces</li>
          <li>Pricing</li>
        </ul>
        </div>

        <div>
        <button className='w-[126px] h-[60px] bg-[#FFE492] p-[16px 40px] rounded-lg'>Login</button>
      </div>
     
      </div>
     



      </div>

    </div>
  )
}

export default Navbar
