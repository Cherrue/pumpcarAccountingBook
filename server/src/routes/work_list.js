import express from "express";
import mysql from "../db/mysql";
const router = express.Router();

router.get("/", (req,res) =>{
    const sql = `SELECT SEQ, GDATE, ITEM, SIKAN1, SIKAN2, MUL, GUM, CHONG, CAR, SUGUM, BIGO, INCOM, NOCOM
                FROM pumpcar.worked_data
                ORDER BY GDATE DESC
                LIMIT 100;`;

    mysql.query(sql, (err, results, fields) => {
        if (err) {
            console.log(err);
            return res.json({
                ok: false,
                status: 400,
                error: "db error"
            });
        }
        const boardlist = results;
        return res.json({
            boardlist
        });
      });
});

export default router;