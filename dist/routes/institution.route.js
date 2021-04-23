"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const institution_controller_1 = __importDefault(require("../controllers/institution.controller"));
const router = express_1.Router();
router.get('/', institution_controller_1.default.getAll);
router.get('/:name', institution_controller_1.default.getInstitution);
router.post('/add', institution_controller_1.default.addInstitution);
router.delete('/remove/:name', institution_controller_1.default.removeInstitution);
exports.default = router;
