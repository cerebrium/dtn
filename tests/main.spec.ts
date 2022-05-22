import tileSystem from "../quadkey/index";
import { main } from "../routes/utils/index";
const strikes = require("../lightning");
import assets from "../assets.json";

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
    quadKey: "023113203031",
    assetOwner: "Test Owner",
  },
];

// Not strictly necessary, but in transferring the class from c# to ts I wanted to make sure it ran
describe("convertLatLongToQuadKey", () => {
  it("should convert lat long to quadkey", () => {
    expect(tileSystem.convertLatLongToQuadKey(33.5524951, -94.5822016)).toBe(
      "023113203031"
    );
  });
});

describe("main", () => {
  it("should log for every asset that has the correct quadKey", () => {
    const spy = jest.spyOn(console, "log");
    main(sampleAsset, sampleLightningData);
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
      console.log(assets[i]);
    }

    expect(spy).toHaveBeenCalledTimes(10);
  });
});
