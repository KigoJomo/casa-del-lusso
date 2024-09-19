import react from 'react'
import Stripes from '../Stripes'
import Button from '../Button'

const Hero = () => {
  return (
    <section className="h-[100vh] pb-[15%] md:pb-16 flex flex-col justify-end gap-24 md:gap-8 items-center relative bg-[url('/images/models/model3.webp')] bg-center bg-cover md:bg-50% md:bg-top bg-no-repeat">
      <div className="z-10 w-full flex flex-col items-center gap-8 md:gap-12">
        <div className="w-full flex items-end justify-between">
          <div className="w-full pr-[50%] md:p-0 uppercase italic text-xs md:text-xs">
            <p className="w-full md:text-left text-left">the epitome</p>
            <p className="w-full md:text-left text-right">of luxury</p>
            <p className="w-full md:text-left text-center">elevate your</p>
            <p className="w-full md:text-left text-right">unique style</p>
          </div>

          <div className="w-64 uppercase hidden md:flex">
            <p className="text-xs md:text-xs">
              Italian fashion house dedicated to creating timeless pieces that
              transcend trends
            </p>
          </div>
        </div>

        <h1 className="w-screen text-5xl md:text-[10rem] font-mont text-center">
          <span className="text-color-accent font-great font-medium">casa</span>{' '}
          del lusso
        </h1>

        <div className="w-full pl-[45%] uppercase font-medium flex md:hidden">
          <p className="text-xs">
            Italian fashion house dedicated to creating timeless pieces that
            transcend trends
          </p>
        </div>
      </div>

      {/* view gallery */}
      <Button text="view gallery" className={'z-10'} />

      <Stripes />
    </section>
  )
}

export default Hero
