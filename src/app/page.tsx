import FeatureSlider from "@/components/section/home/FeatureSlider"
import HomeContentSection from "@/components/section/home/HomeContentSection"
import { getHomepageData } from "@/lib/data"

const HomePage =  async () => {
  const { articles} = await getHomepageData()
 const {edtorpicksecondary,edtorpickprimary,trdendingArticle,mostrecentGridArticle,allmostrecentArticle,sliderArticle,popularArticle,gridArticle} = articles
 

  return (
    <div className="blog-container">
      {edtorpickprimary && edtorpicksecondary.length > 0 && trdendingArticle.length > 0 &&(
        <HomeContentSection
        edtorpickprimary={edtorpickprimary}
        edtorpicksecondary={edtorpicksecondary}
        trdendingArticle={trdendingArticle}
        />
      )}

      {sliderArticle.length && <FeatureSlider article={sliderArticle}/>}
    </div>
  )
}

export default HomePage