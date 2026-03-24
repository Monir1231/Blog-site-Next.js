import PostMeta from "@/components/ui/PostMeta";
import { IArticle } from "@/models/Article";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ArticleIprops {
  article: IArticle;
}

const ArticleCardPrimary = ({ article }: ArticleIprops) => {
  return (
    <div>
      <article className=" mb-0 md:mb-8">
        <figure className=" mb-4">
          <Link href={`/articles/${article._id}`}>
            <Image
              src={article.image}
              alt={article.title}
              width={400}
              height={700}
              className=" w-full h-auto rounded-lg object-cover"
              loading="lazy"
            />
          </Link>
        </figure>

        <h3 className=" text-xl font-bold mb-3 leading-tight">
          
          <Link href={`/articles/${article._id}`} className=" text-[#2E2E2E] hover:text-primary transition-colors ">
          {article.title}
          </Link>
        </h3>

        {
            article.excerpt &&(
                <div>
                    <p className=" text-[#0000008a] mb-4 text-base leading-relaxed">{article.excerpt} </p>
                </div>
            )
        }
        <PostMeta {...article.meta}/>
      </article>
    </div>
  );
};

export default ArticleCardPrimary;
