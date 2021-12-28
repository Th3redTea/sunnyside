import React, {useState} from 'react'
import { Icon } from '@iconify/react';



function Header() {

    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <div className="p-4 flex w-full justify-between items-center">
            <div className="mobilemenu w-[90%] bg-white absolute top-24 after: md:hidden">
              <ul className={`${mobileMenu ? "flex items-center flex-col w-[100%] text-xl " : "hidden"}`}>
                <button><li className="text-darkGrayishBlue hover:bg-yellow py-3 px-6 my-3 rounded-full hover:text-black hover:font-barlow">About</li></button>
                <button><li className="text-darkGrayishBlue hover:bg-yellowyellow py-3  my-3 px-6 rounded-full hover:text-black hover:font-barlow">Services</li></button>
                <button><li className="text-darkGrayishBlue hover:bg-yellow py-3  my-3 px-6 rounded-full hover:text-black hover:font-barlow">Projects</li></button>
                <button><li className="text-darkGrayishBlue hover:bg-yellow py-3  my-3 px-6 rounded-full hover:text-black hover:font-barlow">Contact</li></button>
            </ul>
        </div>
            <h1 className="text-2xl text-white font-barlow md:text-4xl tracking-wide">sunnyside</h1>
            <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden "><Icon width='36' icon="clarity:menu-line" color="white" /></button>
            <ul className="hidden md:inline-flex flex justify-around w-[40%] text-xl ">
                <button><li className="text-white hover:bg-white py-3 px-6 rounded-full hover:text-black hover:font-barlow">About</li></button>
                <button><li className="text-white hover:bg-white py-3 px-6 rounded-full hover:text-black hover:font-barlow">Services</li></button>
                <button><li className="text-white hover:bg-white py-3 px-6 rounded-full hover:text-black hover:font-barlow">Projects</li></button>
                <button><li className="text-white hover:bg-white py-3 px-6 rounded-full hover:text-black hover:font-barlow">Contact</li></button>
            </ul>
        </div>
    )
}

export default Header
