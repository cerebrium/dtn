import tileSystem from "../../quadkey";

/*

    Convert the assets array into a hashmap of quadkeys to assets

    loop through the lightning strikes and find if the quadkey matches an asset
        if it does, create an alert
        Add a 'visited' property to the asset
        don't allow visited to be used again

*/

type Asset = {
  assetName: string;
  quadKey: string;
  assetOwner: string;
  visited?: boolean;
};

type LightningStrike = {
  flashType: number;
  strikeTime: number;
  latitude: number;
  longitude: number;
  peakAmps: number;
  reserved: number;
  icHeight: number;
  receivedTime: number;
  numberOfSensors: number;
  multiplicity: number;
};

type QuadKeyMap = {
  [key: string]: Asset;
};

function createQuadKeyMap(assets: Array<Asset>) {
  const quadKeyMap: QuadKeyMap = {};
  assets.forEach((asset) => {
    quadKeyMap[asset.quadKey] = asset;
  });
  return quadKeyMap;
}

export function main(assets: Array<Asset>, strikes: any) {
  const quadKeyMap = createQuadKeyMap(assets);
  for (let i = 0; i < strikes.length; i++) {
    let strike = strikes[i];
    const quadKey = tileSystem.convertLatLongToQuadKey(
      strike.latitude,
      strike.longitude
    );
    console.log("quadkey: ", quadKey);
    if (quadKeyMap[quadKey] && !quadKeyMap[quadKey].visited) {
      console.log(
        `${quadKeyMap[quadKey].assetOwner}:${quadKeyMap[quadKey].assetName}`
      );
      quadKeyMap[quadKey].visited = true;
    }
  }
}
