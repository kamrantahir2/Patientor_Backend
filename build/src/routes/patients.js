"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const patientsService_1 = __importDefault(require("../services/patientsService"));
router.get("/", (_req, res) => {
    res.send(patientsService_1.default.getPatients());
});
exports.default = router;
