import knex from "knex";
import { test, development } from "../knexfile";
import { resetDatabase } from "../backend/test/testBase";

let db = null
if (process.env.NODE_ENV === "test") {
  console.log("TEST DB")
  db = knex(test)
  resetDatabase(db);
} else if (process.env.NODE_ENV === "test-backend") {
  console.log("TEST DB")
  db = knex(test)
}else {
  console.log("DEV DB")
  db = knex(development)
}

export default db