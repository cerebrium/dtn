"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const strikes = require("../lightning");
const assets_json_1 = __importDefault(require("../assets.json"));
const index_1 = require("./utils/index");
const router = express_1.default.Router();
router.get("/lightning", (req, res) => {
    (0, index_1.main)(assets_json_1.default, strikes);
    res.send("lightning strike");
});
exports.default = router;
//# sourceMappingURL=lightningStrike.js.map