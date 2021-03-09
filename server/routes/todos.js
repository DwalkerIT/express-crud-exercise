import express from "express";
import db from "../db.js";
const router = express.Router();
router.get("/todos", async (req, res) => {
  const todos = await db.raw(`SELECT * FROM todos`);
  res.json(todos.rows);
});
export default router;
