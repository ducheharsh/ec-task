"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const userAuth_1 = __importDefault(require("../middlewares/userAuth"));
router.use(userAuth_1.default);
router.post("/sendConnection", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user1Id, user2Id } = req.body;
    try {
        const connection = yield prisma.connection.create({
            data: {
                user1Id,
                user2Id,
            }
        });
        if (!connection) {
            return res.status(400).json({ message: "Connection not created",
                success: false
            });
        }
        const user1 = yield prisma.user.update({
            where: {
                id: user1Id
            },
            data: {
                sentConnections: {
                    connect: {
                        id: connection.id
                    }
                }
            }
        });
        if (!user1) {
            return res.status(404).json({ message: "User not found" });
        }
        const user2 = yield prisma.user.update({
            where: {
                id: user2Id
            },
            data: {
                receivedConnections: {
                    connect: {
                        id: connection.id
                    }
                }
            }
        });
        return res.status(201).json({
            success: true,
            connection
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal server error" });
    }
}));
router.post("/acceptConnection/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const connection = yield prisma.connection.update({
            where: {
                id: id
            },
            data: {
                status: "accepted"
            }
        });
        if (!connection) {
            return res.status(404).json({ message: "Connection not found" });
        }
        return res.status(200).json({
            success: true,
            connection
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal server error" });
    }
}));
router.post("/declineConnection/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const deleteConnection = yield prisma.connection.delete({
            where: {
                id
            }
        });
        if (!deleteConnection) {
            return res.status(404).json({ message: "Connection not found" });
        }
        return res.status(200).json({
            success: true,
            message: "Connection deleted"
        });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal server error" });
    }
}));
exports.default = router;
