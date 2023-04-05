const express = require("express");
const knex = require("knex");
const db = require("./db");

const router = express.Router();

// Route for trees by district
router.get("/treebydistrict", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const trees = await db("trees")
    .select("arr")
    .count("arr as count")
    .groupBy("arr");
  res.json(trees);
});

// Route for trees by gender
router.get("/treebygender", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const trees = await db("trees")
    .select("gender")
    .count("gender as count")
    .groupBy("gender");
  res.json(trees);
});

module.exports = router;
