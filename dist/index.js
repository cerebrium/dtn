"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lightningStrike_1 = __importDefault(require("./routes/lightningStrike"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => {
    res.send("hello world");
});
app.use(lightningStrike_1.default);
app.listen(port, () => {
    console.log("Express app running on port: ", port);
});
//# sourceMappingURL=index.js.map