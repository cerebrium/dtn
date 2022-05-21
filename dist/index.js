"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quadkey_1 = __importDefault(require("./quadkey"));
function createQuadKeyMap(assets) {
    const quadKeyMap = {};
    assets.forEach((asset) => {
        quadKeyMap[asset.quadKey] = asset;
    });
    return quadKeyMap;
}
function main(assets, strikes) {
    const quadKeyMap = createQuadKeyMap(assets);
    strikes.forEach((strike) => {
        const quadKey = quadkey_1.default.convertLatLongToQuadKey(strike.latitude, strike.longitude);
        if (quadKeyMap[quadKey] && !quadKeyMap[quadKey].visited) {
            console.log(`${quadKeyMap[quadKey].assetOwner}:${quadKeyMap[quadKey].assetName}`);
            quadKeyMap[quadKey].visited = true;
        }
    });
}
exports.default = main;
//# sourceMappingURL=index.js.map