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
        quadKeyMap[asset.quadKey] = asset;
    });
    return quadKeyMap;
}
function main(assets, strikes) {
    const quadKeyMap = createQuadKeyMap(assets);
    for (let i = 0; i < strikes.length; i++) {
        let strike = strikes[i];
        const quadKey = quadkey_1.default.convertLatLongToQuadKey(strike.latitude, strike.longitude);
        console.log("quadkey: ", quadKey);
        if (quadKeyMap[quadKey] && !quadKeyMap[quadKey].visited) {
            console.log(`${quadKeyMap[quadKey].assetOwner}:${quadKeyMap[quadKey].assetName}`);
            quadKeyMap[quadKey].visited = true;
        }
    }
}
exports.main = main;
//# sourceMappingURL=index.js.map