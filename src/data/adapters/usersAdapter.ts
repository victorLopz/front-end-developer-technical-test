import { CodeInterface } from "../../domain/interfaces/CodeInterface";
import { UserInterface } from "../../domain/interfaces/UserInterface";
import CodeModel from "../models/codeModel";
import UserModel from "../models/userModel";

const usersAdapter = (hero: any): UserInterface => {
  return new UserModel(hero.id, hero.name, hero.lastName, hero.email);
};

const getCodeAdapter = (hero: any): CodeInterface => {
  return new CodeModel(hero.id, hero.code);
};

export { usersAdapter, getCodeAdapter };
