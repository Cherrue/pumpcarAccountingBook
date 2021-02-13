import express from "express";
import post from "./post";
import new_work from "./new_work";
import work_list from "./work_list";

const router = express.Router();

router.use("/post", post);
router.use("/new_work", new_work);
router.use("/work_list", work_list);


export default router;