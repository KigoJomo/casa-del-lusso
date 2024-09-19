import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-screen p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl">
          <span className="text-red-500 font-great">C</span><span className="font-quest">&nbsp;d lusso</span>
        </Link>

        <div className="right flex items-center gap-12">
          <div className="cart-count"><p className='italic'>(0)</p></div>
          <button aria-label="Menu" className="flex flex-col gap-2 w-12">
            <span className='w-full h-[1px] bg-color-light'></span>
            <span className='w-full h-[1px] bg-color-light'></span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;