import { getConnection } from "./db"
import { Author } from "./entity/Author"
import { Category } from "./entity/Category"
import { Post } from "./entity/Post"
import { User } from "./entity/User"

require('dotenv').config()

const toTestDB = async () => {
  /* const connection = await getConnection()
  const user: User = new User()
  user.name = 'Richie',
  user.lastname = 'Cedillo',
  user.email = 'rcedilloal@gmail.com',
  user.password =  'qwerty',
  user.isAdmin = true
  console.log(await connection.manager.find(User))
  //console.log(await connection.manager.save(user))
  //console.log(await connection.manager.save())

  const post: Post = new Post();
  const author: Author = new Author();
  const category = new Category();

  category.label = 'Web development';
  category.desc = '';
  category.slug = 'slug';

  author.name = 'Richie';
  author.lastname = 'Cedillo';
  author.email = 'rcedilloal@gmail.com'

  post.title = 'TS vs JS';
  post.body = 'TypeScript vs JavaScript';
  post.author = author;
  post.category = [category];
  post.slug = 'slugpost';
  post.date = '2020114';
  post.coverImg = '';

  
  await connection.manager.save(author);
  await connection.manager.save(category);
  await connection.manager.save(post); */

/*   const connection = await getConnection()
  const post:Array<Post> = await connection.manager.find(Post)
  console.log(post[0]); */

  const connection = await getConnection()  
  const post = await connection.manager.findOne(Post, {
    where: {
      id:1
    },
    relations: ["author", "category"]
  })
  console.log(post);
}

toTestDB()