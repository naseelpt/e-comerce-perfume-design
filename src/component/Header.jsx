import React from 'react'
import { BiCart, BiHeart, BiSearch, BiUser } from 'react-icons/bi'


function Header() {
    return (
        <>

       <div className="w-full px-4">
  <div className="flex flex-col md:flex-row items-center justify-between py-4">
    {/* Logo */}
    <div className="font-bold text-2xl text-pink-600 mb-2 md:mb-0">ShopEase</div>

    {/* Search Bar */}
    <div className="relative w-full md:w-1/3 mb-2 md:mb-0">
      <input
        type="text"
        placeholder="Search"
        className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-2xl shadow"
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
        <BiSearch size={18} />
      </div>
    </div>

    {/* Icons */}
    <div className="flex gap-4 text-gray-700">
      <BiHeart size={22} />
      <BiCart size={22} />
      <BiUser size={22} />
    </div>
  </div>

  {/* Navigation Menu */}
  <div className="w-full bg-pink-800">
    <div className="flex flex-wrap justify-center gap-4 py-3 text-white font-bold text-sm md:text-lg">
      {['Home', 'Product', 'Categories', 'Offers', 'About', 'Contact'].map((item) => (
        <h1 key={item} className="hover:text-black cursor-pointer">{item}</h1>
      ))}
    </div>
  </div>
</div>



        </>
    )
}

export default Header