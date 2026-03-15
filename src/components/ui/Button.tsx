import { Cn } from '@/Cn/cn'
import Link from 'next/link'
import React from 'react'

const Button = ({className,href,children}) => {
  return (
    <Link href={href} className={Cn('py-2 px-4 border border-gray-300 text-gray-800 rounded-md hover:bg-primary transition-all duration-300 hover:cursor-pointer  hover:text-white',className)}>{children }</Link>
  )
}

export default Button