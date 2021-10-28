import React from 'react'
import { EyeIcon} from "@heroicons/react/outline";
import { CodeIcon} from "@heroicons/react/outline";


function Project() {
    return (
 <section id='Projects'>

<div  className="flex justify-center bg-black text-white w-full divide-y divide-light-blue-400 py-16 ">
      <div className="w-1/2 my-10 text-center">
        <h1 className="text-center p-4 text-green-600 font-bold text-lg ">
          CHECK OUT SOME OF MY WORKS
        </h1>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-4 '>
          <div className='p-1 border-2 hover:border-4 hover:brightness-105 border-green-500 transition duration-500 ease-in-out opacity-100 lg:opacity-70  hover:opacity-100 hover:scale-125'><img className='object-center' src="images\netfl.PNG" alt="NetflixClone" /><div className='flex justify-between'><a href="https://netflix-clone-134de.web.app/" title='NetflixClone'><EyeIcon className="h-6 w-6"/></a>  <a href=""><CodeIcon className="h-6 w-6"/></a></div></div>
          <div className='p-1 border-2 hover:border-4 hover:brightness-105 border-green-500 transition duration-500 ease-in-out opacity-100 lg:opacity-70  hover:opacity-100 hover:scale-125'><img className='object-center' src="images\netfl.PNG" alt="NetflixClone" /><div className='flex justify-between'><a href="https://netflix-clone-134de.web.app/" title='NetflixClone'><EyeIcon className="h-6 w-6"/></a>  <a href=""><CodeIcon className="h-6 w-6"/></a></div></div>
          <div className='p-1 border-2 hover:border-4 hover:brightness-105 border-green-500 transition duration-500 ease-in-out opacity-100 lg:opacity-70  hover:opacity-100 hover:scale-125'><img className='object-center' src="images\netfl.PNG" alt="NetflixClone" /><div className='flex justify-between'><a href="https://netflix-clone-134de.web.app/" title='NetflixClone'><EyeIcon className="h-6 w-6"/></a>  <a href=""><CodeIcon className="h-6 w-6"/></a></div></div>
          
          

        </div>
      </div>
    </div>
        </section>
    )
}

export default Project
