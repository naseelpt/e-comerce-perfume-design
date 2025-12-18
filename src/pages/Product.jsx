import React from 'react'
import i from '../assets/hi.jpg'
import ii from '../assets/hii.jpg'
import iii from '../assets/hiii.jpg'
import iiii from '../assets/hiiii.jpg'
import iiiii from '../assets/hiiiii.jpg'
import iiiiii from '../assets/hiiiiii.jpg'
import { CgShoppingCart } from 'react-icons/cg'

function Product() {

      const products = [
        { name: "Chypre", price: "$66.49", old: "$69.99", img: ii, rating: "★★★★☆", value: 4 },
        { name: "Leathery", price: "$56.99", old: "$59.99", img: iii, rating: "★★★☆☆", value: 3 },
        { name: "Floral", price: "$44.99", old: "$49.99", img: i, rating: "★★★★★", value: 5 },
        { name: "Woody", price: "$38.99", old: "$42.99", img: iiii, rating: "★★☆☆☆", value: 2 },
        { name: "Aqua", price: "$59.99", old: "$64.99", img: iiiiii, rating: "★★★☆☆", value: 3 },
        { name: "Musk", price: "$69.99", old: "$74.99", img: iiiii, rating: "★★★☆☆", value: 3 },
      ];
  return (
    <>

    <div className="w-full bg-gray-200 xl:p-16 py-10 px-8">
            <h2 className="md:text-2xl text-xl text-amber-900 font-bold mb-4">Featured Products</h2>
    
    
            <div className="overflow-x-auto">
              <div className="flex gap-4 w-max ">
                {products.map((item) => (
                  <div
                    className="md:w-[335px] w-[240px] sm-w-[100px] bg-white rounded-2xl shadow-md hover:shadow-xl transition  " >
                    <img
                      src={item.img}
                      alt=""
                      className="md:w-full md:h-64 object-cover rounded-t-xl"
                    />
                    <div className='px-3 py-4'>
                      <div className='flex gap-2'>
                        <span className='text-yellow-400 text-xl'>{item.rating}  </span>
                        <h1>({item.value})</h1>
    
                      </div>
                      <h3 className="mt-2 font-bold ">{item.name}</h3>
                      <div className='flex justify-between pt-2'>
                        <div className='flex gap-2'>
                          <p className="text-pink-600 font-bold">{item.price}</p>
                          <p className="text-gray-400 line-through text-sm">{item.old}</p>
                        </div>
    
                        <div className='bg-amber-900  rounded-full h-6 flex justify-center items-center hover:bg-pink-600 w-6'>
                          <CgShoppingCart size={15} color='white' />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
    
    
    
    
    </>
  )
}

export default Product