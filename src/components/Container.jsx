import React from 'react'
import herod from '../assets/images/image-hero-desktop.png'
import herom from '../assets/images/image-hero-mobile.png'
import audiophile from '../assets/images/client-audiophile.svg'
import databiz from '../assets/images/client-databiz.svg'
import maker from '../assets/images/client-maker.svg'
import meet from '../assets/images/client-meet.svg'

const Container = () => {
  return (
    <div className='mt-[62px] laptop:mt-8 w-full h-screen flex justify-center items-center'>
      <div className='w-full h-full laptop:max-w-[1180px] laptop:h-[650px] flex flex-col laptop:flex-row-reverse laptop:justify-between laptop:items-center'>
        <div className='laptop:w-[40%]'>
          <img className='hidden laptop:block' src={herod} alt="Hero" />
          <img className='laptop:hidden' src={herom} alt="Hero" />
        </div>

        <div className='mt-7 laptop:w-[50%] flex flex-col items-center laptop:items-start laptop:px-10'>
          <h1 className='laptop text-[35px] laptop:text-[70px] laptop:leading-[60px] text-center laptop:text-left font-bold'>Make remote work</h1>
          <p className='w-[90%] my-5 laptop:my-10 text-center laptop:text-left text-MediumGray font-medium'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <button className='w-fit mt-2 mb-10 bg-[black] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-[black] border-2 border-[black]'>Learn more</button>
          <div className='w-[90%] laptop:mt-20 flex justify-between items-center gap-2 px-4'>
            <img className='size-[21%]' src={databiz} alt="Databiz" />
            <img className='size-[21%]' src={audiophile} alt="Audiophile" />
            <img className='size-[21%]' src={meet} alt="Meet" />
            <img className='size-[21%]' src={maker} alt="Maker" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container