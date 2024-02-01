'use client'
import Image from 'next/image'
import rotateImage from '/public/images/rotate-img.png';


const ActivateAccount = () => {
  return (
      <div className='flex flex-col items-center '>
        <p className='w-[38.25rem] text-[2.125rem] font-[700] leading-normal tracking-[-0.0425rem] text-center mt-[5rem] '>
            <span className='block'>KINDLY WAIT AS WE </span> <span className='block'>ACTIVATE YOUR ACCOUNT</span>
        </p>
        <Image src={rotateImage}
        width={35}
        height={35}
        className='rotation'
        alt='rotation-text'/>
      </div>
      
  );
}

export default ActivateAccount;
