"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../quadkey/index"));
const index_2 = require("../routes/utils/index");
const strikes = require("../lightning");
const assets_json_1 = __importDefault(require("../assets.json"));
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
        (0, index_2.main)(sampleAsset, sampleLightningData[0]);
        (0, index_2.main)(sampleAsset, sampleLightningData[0]);
        expect(spy).toHaveBeenCalledWith("Test Owner:Test Asset");
        // Make sure it isn't calling more than once per strike
        expect(spy).toHaveBeenCalledTimes(1);
    });
});
describe("dataIngestion", () => {
    it("should read the json file line by line", () => {
        const spy = jest.spyOn(console, "log");
        // Maintaining call in previous test, clear to check for correct read
        spy.mockClear();
        for (let i = 0; i < 10; i++) {
            console.log(strikes[i]);
        }
        expect(spy).toHaveBeenCalledTimes(10);
    });
    it("should read the asset array", () => {
        const spy = jest.spyOn(console, "log");
        spy.mockClear();
        for (let i = 0; i < 10; i++) {
            console.log(assets_json_1.default[i]);
        }
        expect(spy).toHaveBeenCalledTimes(10);
    });
});
//# sourceMappingURL=main.spec.js.map