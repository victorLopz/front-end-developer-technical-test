import { Dispatch } from "@reduxjs/toolkit";
import {
  updateFailedState,
  updateCreatedUserState,
  updateCode
} from "./userSlice";
import Users from "../../../../domain/useCases/User";

export const fetchUsers =
  (name: string, lastName: string, email: string) =>
  async (dispatch: Dispatch) => {
    try {
      await new Users().createUser(name, lastName, email);

      dispatch(updateCreatedUserState(true));
    } catch (error) {
      dispatch(updateFailedState(true));
    }
  };

export const fetchCode = (email: string) => async (dispatch: Dispatch) => {
  try {
    const result = await new Users().getCode(email);

    dispatch(updateCode(result.code));
  } catch (error) {
    dispatch(updateFailedState(true));
  }
};
