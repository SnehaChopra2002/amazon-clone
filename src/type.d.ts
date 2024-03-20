export interface IArticle {
    id: number
    title: string
    image: string
    price:number
    rating:number
  }
  
  export type ArticleState = {
    articles: IArticle[]
  }
  
  export type ArticleAction = {
    type: string
    payload: IArticle
  }
  
  type DispatchType = (args: ArticleAction) => ArticleAction