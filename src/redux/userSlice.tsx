import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  uid: string;
  email: string|null;
  // Add more user properties as needed
}

export interface UserState {
  currentUser: User | null;
}

const initialState: UserState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User|null>) => {
      state.currentUser = action.payload;
    },
    // clearUser: (state) => {
    //   state.currentUser = null;
    // },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
