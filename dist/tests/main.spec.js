"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../quadkey/index"));
const index_2 = __importDefault(require("../index"));
const sampleLightningData = [
    {
        flashType: 1,
        strikeTime: 1386285909025,
        latitude: 33.5524951,
        longitude: -94.5822016,
        peakAmps: 15815,
        reserved: 0,
        icHeight: 8940,
        receivedTime: 1386285919187,
        numberOfSensors: 17,
        multiplicity: 1,
    },
    {
        flashType: 1,
        strikeTime: 1386285909025,
        latitude: 33.5524951,
        longitude: -94.5822016,
        peakAmps: 15815,
        reserved: 0,
        icHeight: 8940,
        receivedTime: 1386285919187,
        numberOfSensors: 17,
        multiplicity: 1,
    },
    {
        flashType: 1,
        strikeTime: 1386285909025,
        latitude: 33.5524951,
        longitude: -94.5822016,
        peakAmps: 15815,
        reserved: 0,
        icHeight: 8940,
        receivedTime: 1386285919187,
        numberOfSensors: 17,
        multiplicity: 1,
    },
    {
        flashType: 1,
        strikeTime: 1386285909025,
        latitude: 33.5524951,
        longitude: -94.5822016,
        peakAmps: 15815,
        reserved: 0,
        icHeight: 8940,
        receivedTime: 1386285919187,
        numberOfSensors: 17,
        multiplicity: 1,
    },
    {
        flashType: 1,
        strikeTime: 1386285909025,
        latitude: 33.5524951,
        longitude: -94.5822016,
        peakAmps: 15815,
        reserved: 0,
        icHeight: 8940,
        receivedTime: 1386285919187,
        numberOfSensors: 17,
        multiplicity: 1,
    },
];
const sampleAsset = [
    {
        assetName: "Test Asset",
        quadKey: "303113033103",
        assetOwner: "Test Owner",
    },
];
describe("convertLatLongToQuadKey", () => {
    it("should convert lat long to quadkey", () => {
        expect(index_1.default.convertLatLongToQuadKey(33.5524951, -94.5822016)).toBe("303113033103");
    });
});
describe("main", () => {
    it("should log for every asset that has the correct quadKey", () => {
        const spy = jest.spyOn(console, "log");
        (0, index_2.default)(sampleAsset, sampleLightningData);
        expect(spy).toHaveBeenCalledWith("Test Owner:Test Asset");
        expect(spy).toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=main.spec.js.map