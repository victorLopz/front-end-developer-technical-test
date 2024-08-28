import UserModel from "../../data/models/userModel";
import UsersRepository from "../../data/repositories/usersRepository";

export default class Users {
  async createUser(
    name: string,
    lastName: string,
    email: string
  ): Promise<{ newData: UserModel[] }> {
    const users = await UsersRepository.createUser(name, lastName, email);
    return { newData: users };
  }

  async getCode(email: string): Promise<{ code: string }> {
    const code = await UsersRepository.getCode(email);
    return code;
  }
}
