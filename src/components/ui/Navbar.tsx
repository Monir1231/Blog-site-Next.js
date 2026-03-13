"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { FaBlog } from 'react-icons/fa';


interface NavItem{
    label:string;
    href:string;
    subitems?:NavItem[];
}

const mainNavTtem:NavItem[] =[
{label:"Home",href:"/"},
{label:"Categories",href:"/categories",subitems:[
    {label:"Politics",href:"/categories/politics"},
     {label:"Health",href:"/categories/health"},
      {label:"Design",href:"/categories/design"},
]},
{label:"LifeStyle",href:"/lifestyle"},
{label:"about",href:"/about"},
{label:"Health",href:"/health"},
{label:"Technology",href:"/technology"},
{label:"Culture",href:"/culture"},
{label:"Contact",href:"/contact"},
{label:"Moro", href:"#",subitems:[
  {label:"Search",href:"search"},
   {label:"About",href:"/about"},
   {label:"Privacy policy",href:"/privacy-policy"},
    {label:"Terms of Service",href:"/terms-of-service"}
]}
]

const Navbar = () => {
  const pathName = usePathname()
  const [isSearchOpen,setIsSearchOpen] = useState(false)
  const [ismobileMenu,setIsmobileMenu] = useState(false)
  const Theme = "light"

  return (
    <header className=' relative bg-white font-lora text-gray-800'>
      {/* top header  */}
      <div className=' hidden lg:block py-3'>
       <div className='blog-container '>
         <h1 className=' shrink-0'>
          <Link href={"/"} className=' flex items-center text-2xl font-semibold text-gray-900 hover:text-primary transition-colors duration-300'> <FaBlog/>
          <span className=' ml-1'>Blogs</span>
          </Link>
        </h1>
        {/* tdq header */}
        <div className=' flex items-center space-x-3'>
          <div>
            <button onClick={()=>setIsSearchOpen(!isSearchOpen)} className=' p-2 rounded-full text-gray-500 hover:text-gray-700 transition-colors focus:outline-none'><BsSearch size={18}/></button>
            {
              isSearchOpen &&(
                <form action={"/search"}>
                  <input type="text" name='q' placeholder=' search...' className=' px-3 py-2 rounded-md border border-gray-300 bg-gray-50 text-gray-500 focus:outline-none'/>
                </form>
              )
            }
          </div>
        </div>
       </div>
      </div>
    </header>
  )
}

export default Navbar