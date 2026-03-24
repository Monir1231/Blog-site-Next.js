import SectionTitle from "@/components/ui/SectionTitle";
import { IArticle } from "@/models/Article";
import React from "react";
import ArticleCardPrimary from "./ArticleCardPrimary";
import Link from "next/link";
import ArticleCardSecondary from "./ArticleCardSecondary";
import TrdendingArticle from "./TrdendingArticle";
import { FaArrowRight } from "react-icons/fa";

interface HomeContentSectionIprops {
  edtorpickprimary?: IArticle;
  edtorpicksecondary: IArticle[];
  trdendingArticle: IArticle[];
}

const HomeContentSection = ({
  edtorpickprimary,
  edtorpicksecondary,
  trdendingArticle,
}: HomeContentSectionIprops) => {
  return (
    <section className="blog-container py-12 bg-white text-gray-800">
      <div className=" flex flex-col md:flex-row -mx-4 md:gap-4">
        {/* left  */}

        <div className=" w-full md:w-9/12 mb-8 lg:mb-0">
          <SectionTitle title="Editor's Picks" />
          <div className=" flex flex-col md:flex-row -mx-4">
            {/* main featured */}
            <div className=" w-full md:w-1/2 px-4 mb-8 md:mb-0">
              {edtorpickprimary && (
                <ArticleCardPrimary article={edtorpickprimary} />
              )}
              <Link className=" inline-block mt-6 px-6 py-2.5 text-sm uppercase border text-black rounded hover:bg-primary hover:text-white" href={'/archive'}>All Featured</Link>
            </div>

            {/* small feature  */}

             <div className=" w-full md:w-1/2 px-4 mb-8 md:mb-0">
              {edtorpicksecondary && (
                edtorpicksecondary.map((article,index)=>(
                 <ArticleCardSecondary key={index} article={article} />
                ))
              )}
            
            </div>

          </div>
        </div>

        {/* right  */}
        <div>
          <SectionTitle title="Trending" />
          <ol className=" list-none p-0">
            {trdendingArticle.map((article,index)=>(
             <TrdendingArticle key={index} article={article} index={index}/>
            ))}
          </ol>

          <Link href={`/archive`} className=" inline-flex items-center gap-2 text-sm uppercase text-primary hover:underline transition-colors">
           <FaArrowRight size={14} className=" ml-2"/>
          See All Trending
         
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeContentSection;
