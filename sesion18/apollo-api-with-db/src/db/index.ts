import { Connection, createConnection } from "typeorm";
import { Book } from "../entity/Book";

let connection: Connection;

(async () => {
  connection = await createConnection({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true, //automaticamente crea la tabla.
    logging: true,
    entities: [
      Book,
    ],
  });
})();

export { connection };
