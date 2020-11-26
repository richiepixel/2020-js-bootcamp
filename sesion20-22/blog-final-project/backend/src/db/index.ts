import { createConnection } from "typeorm"

export const getDBConnection = async () => {
  const connection = await createConnection({
    type: "postgres",
    host: "database-richie.clkavcr2w7q4.us-east-2.rds.amazonaws.com",
    database: "postgres",
    port: 5432,
    username: "postgres",
    password: "febF9ci87evRwPi",
    synchronize: true,
    logging: true,
    entities: [
      `${__dirname}/../entity/*`
    ]
  })
  return connection
}