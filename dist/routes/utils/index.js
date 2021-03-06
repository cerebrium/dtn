"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const quadkey_1 = __importDefault(require("../../quadkey"));
function createQuadKeyMap(assets) {
    const quadKeyMap = {};
    assets.forEach((asset) => {
        if ((asset === null || asset === void 0 ? void 0 : asset.quadKey) && asset.assetOwner && asset.assetName) {
            quadKeyMap[asset.quadKey] = asset;
        }
    });
    return quadKeyMap;
}
function main(assets, strikes) {
    if (!strikes)
        return;
    const quadKeyMap = createQuadKeyMap(assets);
    for (let i = 0; i < strikes.length; i++) {
        let strike = strikes[i];
        if (!strike.latitude || !strike.longitude)
            continue;
        const quadKey = quadkey_1.default.convertLatLongToQuadKey(strike.latitude, strike.longitude);
        if (quadKeyMap[quadKey] && !quadKeyMap[quadKey].visited) {
            console.log(`${quadKeyMap[quadKey].assetOwner}:${quadKeyMap[quadKey].assetName}`);
            quadKeyMap[quadKey].visited = true;
        }
    }
}
exports.main = main;
//# sourceMappingURL=index.js.map