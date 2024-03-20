// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { ArticleAction } from "../type";

// export const amazonSlice = createSlice({
//   name: "article",
//   initialState: [],
//   reducers: {
//     addArticle: (state, action:ArticleAction) => {
//      const newArticle={
//         id: action.payload.id,
//         title: action.payload.title,
//         price: action.payload.price,
//         image: action.payload.image,
//         rating: action.payload.rating
//      }
//       state.push(newArticle);
//     },
//     // toggleComplete: (state, action) => {
//     //   const index = state.findIndex((todo) => todo.id === action.payload.id);
//     //   state[index].completed = action.payload.completed;
//     // },
//     // deleteTodo: (state, action) => {
//     //   return state.filter((todo) => todo.id !== action.payload.id)
//     // },
//   }
// });

// export const { addArticle } = amazonSlice.actions;
// export default amazonSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Article {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: number;
}

// export interface User {
//   // name: string;
//   email: string|null;
//   // Add more user properties as needed
// }

// export interface AppState {
//   articles: Article[];
//   user: User | null; // User can be null if not logged in
// }

// export const initialState: AppState = {
//   articles: [],
//   user: null,
// };

export const amazonSlice = createSlice({
  name: "article",
  initialState:[] as Article[],
  reducers: {
    addArticle: (state, action: PayloadAction<Article>) => {
      const newArticle = {
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        image: action.payload.image,
        rating: action.payload.rating,
      };
      state.push(newArticle);
    },

    deleteArticle: (state, action: PayloadAction<{ id: number }>) => {
      const indexToDelete = state.findIndex((article) => article.id === action.payload.id);
      if (indexToDelete !== -1) {
        state.splice(indexToDelete, 1);
      }
    },
    // setUser: (state, action: PayloadAction<User | null>) => {
    //   state.user = action.payload ? {  email: action.payload.email } : null;
    // },
  }
});

export const { addArticle,deleteArticle } = amazonSlice.actions;
export default amazonSlice.reducer;
