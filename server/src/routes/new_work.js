import express from "express";
import mysql from "../db/mysql";
const router = express.Router();

router.post("/", async (req, res) => {
    const gdate = req.body.gdate;
    const item = req.body.item;
    const sikan1 = req.body.sikan1;
    const sikan2 = req.body.sikan2;
    const mul = req.body.title;
    const gum = req.body.gum;
    const chong = req.body.chong;
    const car = req.body.car;
    const sugum = req.body.sugum;
    const bigo = req.body.bigo;
    const incom = req.body.incom;
    const nocom = req.body.nocom;
  
    const sql = "INSERT INTO pumpcar.worked_data\
    (GDATE, ITEM, SIKAN1, SIKAN2, MUL, GUM, CHONG, CAR, SUGUM, BIGO, INCOM, NOCOM)\
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const post = [gdate, item, sikan1, sikan2, mul, gum, chong, car ,sugum, bigo, incom, nocom];
  
    mysql.query(sql, post, (err, results, fields) => {
      if (err) {
        console.log(err);
        return res.json({
          ok: false,
          status: 400,
          error: "db error"
        });
      } else {
        return res.json({
          ok: true,
          status: 200,
          error: null
        });
      }
    });
});
  
export default router;