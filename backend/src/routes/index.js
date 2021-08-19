import express from "express";
import vote from "./vote.js";
const  router = express.Router();

router.use('/vote',vote)
export default router