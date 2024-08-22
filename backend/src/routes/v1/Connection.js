const express = require("express");
const { createConnection } = require("mongoose");
const { updateConnection } = require("../../controllers/ConnectionController");

const router = express.Router({ mergeParams: true });
router.get( "/:id", )
router.post("", createConnection)
router.put("/:id", updateConnection)


module.exports = router;