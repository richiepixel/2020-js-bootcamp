import { connection } from "../db"
import { User } from "../entity/User"
import { hash } from "bcrypt";

export class UserController {
  users: Array<IUser>;

  constructor(){
    //this.users = users;  
  }

  async getUsers(){
    return connection.manager.find(User)
  }

  async getUser(id: number) {
    return await connection.manager.findOne(User, {
      where: { id: id },
    });
  }

  async saveUser(user: IUser) {
    return await connection.manager.save(User, {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      password: await hash(user.password, 9),
      isAdmin: user.isAdmin
    })
  }

  async deleteUser(id: number){

    return await connection.manager.delete(User, id)

  }

  async updateUser(user: IUser) {
    let currentUser = await this.getUser(user.id)
    currentUser = {...currentUser, ...user}
    return this.saveUser(currentUser) //TODO: change to connection.manager.update
  }

}

interface IUser {
  id?: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

const users = [

  {
    id: 1,
    name: 'Richie',
    lastName: 'Cedillo',
    email: 'rcedilloal@gmail.com',
    isAdmin: true
  },

  {
    id: 2,
    name: 'Joyce',
    lastName: 'Vazquez',
    email: 'joyce@gmail.com',
    isAdmin: false
  }

];

 