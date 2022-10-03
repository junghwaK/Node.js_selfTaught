const express = require("express");
const surf = require("../controllers/SurfControllers");
const router = express.Router();

router.get("/", surf.register);
// router.post("/register", surf.register);
router.get("/Surf", surf.getInfo);
router.post("/Surf/insert", surf.postInsert);
module.exports = router;