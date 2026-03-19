import ArticleModel, { IArticle } from "@/models/Article"
import { connctDB } from "./mongodb"
import { separatedArticleBysection } from "./articleutils"



export interface separatedArticle{
    edtorpickprimary?:IArticle
    edtorpicksecondary:IArticle[]
    trdendingArticle:IArticle[]
    sliderArticle:IArticle[]
    gridArticle:IArticle[]
   allmostrecentArticle:IArticle[]
     mostrecentGridArticle:IArticle[]
     popularArticle:IArticle[]
    
}

interface HomePagedata{
    articles:separatedArticle
}
export async function getHomepageData(): Promise<HomePagedata> {
    let allfatchArticle:IArticle[] = []
    try {
        await connctDB()
        const article = await ArticleModel.find({}).sort({createdAt:-1}).lean();
        allfatchArticle = JSON.parse(JSON.stringify(article))
        
    } catch (error) {
        console.error(" Error fetching homepage data:", error)
    }
    const separatedArticle = separatedArticleBysection( allfatchArticle)

    return {
        articles: separatedArticle
    }
}

