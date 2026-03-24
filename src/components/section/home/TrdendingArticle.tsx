import PostMeta from '@/components/ui/PostMeta';
import { IArticle } from '@/models/Article'
import Link from 'next/link';
import React from 'react'

interface TrdendingArticleProps{
    article:IArticle;
    index:number;
}

const TrdendingArticle = ({article,index}:TrdendingArticleProps) => {
  return (
   <li className=' flex items-start mb-6'>
    <div className=' shrink-0 text-3xl mr-6 text-gray-300 font-semibold'>
      {`0${index + 1}`}
    </div>
    <div>
          <h5 className=" text-base font-bold mb-2">
                <Link href={`/articles/${article._id}`} className=" text-[#2E2E2E] hover:text-primary transition-colors">{article.title}</Link>
            </h5>
            <PostMeta {...article.meta}/>
    </div>

   </li>
  )
}

export default TrdendingArticle