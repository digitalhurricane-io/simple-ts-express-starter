import { Router } from "express";
import exampleRoute from "./example.route";


const router = Router();

/**
 * GET v1/status
 */
router.get("/status", (req, res) => res.send("OK"));

router.use("/example", exampleRoute);

export default router;