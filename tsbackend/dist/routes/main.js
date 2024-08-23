"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const users_1 = __importDefault(require("./users"));
const connections_1 = __importDefault(require("./connections"));
router.use("/user", users_1.default);
router.use("/connection", connections_1.default);
exports.default = router;
