const express = require("express");
const { getUser, createUser } = require("../../controllers/UserController");
const { createConnection } = require("mongoose");
const router = express.Router({ mergeParams: true });

router.get("/:id", getUser)
router.post("", createUser)


module.exports = router;
