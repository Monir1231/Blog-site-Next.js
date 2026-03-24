import { ArticleMeta } from '@/types/article'
import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const PostMeta = ({
author,
authorHref,
category,
categoryHref,
date,
readingTime,
displaySection

}:ArticleMeta) => {
  return (
    <div className=' text-sm text-gray-500 flex items-center flex-wrap'>
<Link className=' text-gray-600 hover:text-primary transition-colors' href={authorHref}>{author}</Link>
<span className=' mx-1'>in</span>
<Link className=' text-gray-600 hover:text-primary transition-colors capitalize' href={authorHref}>{category}</Link>
 <span className=' mx-1'>&bull;</span>
 <span>{date}</span>
 <span className=' mx-1'>&bull;</span>
 <span>{readingTime}</span>
 <span className=' ml-2 text-gray-200'>
    <FaStar/>
 </span>
    </div>
  )
}

export default PostMeta