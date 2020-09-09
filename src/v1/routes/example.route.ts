import { Router } from "express";
const router = Router();


router.post("/example", async (req, res) => {
    res.status(200).send();
});

export default router;