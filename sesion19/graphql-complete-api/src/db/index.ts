import { Connection, createConnection } from "typeorm";
import { User } from "../entity/User"

let connection: Connection;

(async () => {
  connection = await createConnection({
    type: "sqlite",
    database: "databaseUser.sqlite",
    synchronize: true, //automaticamente crea la tabla.
    logging: true,
    entities: [
      User,
    ],
  });
})();

export { connection };
