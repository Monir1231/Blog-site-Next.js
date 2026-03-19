import { IArticle } from "@/models/Article";
import { separatedArticle } from "./data";

export function separatedArticleBysection(allArticle: IArticle[]) {
  const separated: separatedArticle = {
    edtorpickprimary: {} as IArticle,
    edtorpicksecondary: [],
    sliderArticle: [],
    allmostrecentArticle: [],
    mostrecentGridArticle: [],
    popularArticle: [],
    trdendingArticle: [],
    gridArticle: [],
  };
  separated.edtorpickprimary = allArticle.find(
    (articles) => articles.meta.displaySection === "editorPickPrimary",
  );

  separated.edtorpicksecondary = allArticle.filter(
    (articles) => articles.meta.displaySection === "editorPickSecondary",
  );

  separated.sliderArticle = allArticle.filter(
    (articles) => articles.meta.displaySection === "slider",
  );
  separated.allmostrecentArticle = allArticle.filter(
    (articles) => articles.meta.displaySection === "mostRecent",
  );

  separated.mostrecentGridArticle = allArticle.filter(
    (articles) => articles.meta.displaySection === "mostRecentGrid",
  );

  separated.gridArticle = allArticle.filter(
    (articles) => articles.meta.displaySection === "gridAndAds",
  );

   separated.trdendingArticle = allArticle.filter(
    (articles) => articles.meta.displaySection === "trending",
  );

   separated.popularArticle = separated.trdendingArticle;

   return separated
 
}
