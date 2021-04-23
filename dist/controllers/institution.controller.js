"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const institution_1 = __importDefault(require("../models/institution"));
function getAll(request, response) {
    institution_1.default.find({}).then((responseBody) => {
        if (responseBody == null) {
            return response.status(404).json(responseBody);
        }
        else {
            return response.status(200).json(responseBody);
        }
    }).catch((erro) => {
        return response.status(500).json(erro);
    });
}
function addInstitution(request, response) {
    const newInst = new institution_1.default({
        "name": request.body.name,
        "description": request.body.description,
        "url": request.body.url,
        "responsible": request.body.responsible,
    });
    newInst.save().then((responseBody) => {
        return response.status(200).json(responseBody);
    }).catch((erro) => {
        return response.status(500).json(erro);
    });
}
function getInstitution(request, response) {
    institution_1.default.findOne({ "name": request.params.name }).then((responseBody) => {
        if (responseBody == null) {
            return response.status(404).json(responseBody);
        }
        else {
            return response.status(200).json(responseBody);
        }
    }).catch((erro) => {
        return response.status(500).json(erro);
    });
}
function removeInstitution(request, response) {
    institution_1.default.deleteOne({ "name": request.params.name }).then((responseBody) => {
        if (responseBody == null) {
            return response.status(404).json(responseBody);
        }
        else {
            return response.status(200).json(responseBody);
        }
    }).catch((erro) => {
        return response.status(500).json(erro);
    });
}
exports.default = { getAll, addInstitution, getInstitution, removeInstitution };
