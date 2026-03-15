
export interface ArticleDisplaySection{
    title:string
}

export interface  ArticleMeta{
author:string;
authorHref:string;
category:string;
categoryHref:string;
date:string;
readingTime:string;
displaySection:string;
authorAvatarUrl?: ArticleDisplaySection
  }  ;

export interface Article{
    _id: string;
    title:string;
    image:string;
    excerpt?:string;
    caption?:string;
    meta:string

}