import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "../../../../domain/interfaces/UserInterface";

const initialState = {
  listSlice: [] as UserInterface[],
  isCreatedUser: false,
  hasFailedToLoad: false,
  code: ""
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addListOfUsers: (state, action: PayloadAction<UserInterface[]>) => {
      state.listSlice = action.payload;
    },
    updateCreatedUserState: (state, action: PayloadAction<boolean>) => {
      state.isCreatedUser = action.payload;
    },
    updateFailedState: (state, action: PayloadAction<boolean>) => {
      state.hasFailedToLoad = action.payload;
    },
    updateCode: (state, action: PayloadAction<string>) => {
      state.code = action.payload;
    }
  }
});

export const {
  addListOfUsers,
  updateCode,
  updateCreatedUserState,
  updateFailedState
} = userSlice.actions;
