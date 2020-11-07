import {UserController} from "../controller/UserAPI"
import { AuthAPI } from "../controller/AuthAPI";

const userController: UserController = new UserController();
const authAPI: AuthAPI = new AuthAPI();

export const resolvers = {
  Query: {
    login: (_, { email, password }) => authAPI.getToken({ email, password }),
    users: () => userController.getUsers(),
    user: (_, { id }) => userController.getUser(id)
  },
  Mutation: {
    saveUser: (_, { name, lastName, email, password, isAdmin }) =>
      userController.saveUser({ name, lastName, email, password, isAdmin }),
    deleteUser: (_, {id}) => userController.deleteUser(id),
    updateUser: (_, { id, name, lastName, email, password, isAdmin }) =>
      userController.updateUser({ id, name, lastName, email, password, isAdmin })
  }
};