import react from "react";
import Stripes from "../Stripes";
import Button from "../Button";

const Hero = () => {
  return (
    <section className="h-[100vh] pb-[15%] flex flex-col justify-end gap-24 items-center relative bg-[url('/images/models/model3.webp')] bg-center bg-cover bg-no-repeat">

      <div className="z-10 w-full flex flex-col items-center gap-8">
        <div className='w-full pr-[50%] uppercase italic text-xs'>
          <p className='w-full text-left'>the epitome</p>
          <p className='w-full text-right'>of luxury</p>
          <p className='w-full text-center'>elevate your</p>
          <p className='w-full text-right'>unique style</p>
        </div>

        <h1 className='w-screen text-5xl font-mont text-center'><span className="text-color-accent font-great font-medium">casa</span> del lusso</h1>

        <div className="w-full pl-[45%] uppercase font-medium">
          <p className='text-xs'>dedicated to creating timeless pieces that transcend trends</p>
        </div>
      </div>

      {/* view gallery */}
      <Button text='view gallery' className={'z-10'} />

      <Stripes />
    </section>
  );
}

export default Hero;