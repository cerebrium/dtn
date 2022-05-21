class TileSystem {
  private EarthRadius = 6378137;
  private MinLatitude = -85.05112878;
  private MaxLatitude = 85.05112878;
  private MinLongitude = -180;
  private MaxLongitude = 180;
  constructor() {}

  private clip(n: number, minValue: number, maxValue: number) {
    return Math.min(Math.max(n, minValue), maxValue);
  }

  public mapSize(levelOfDetail: number) {
    return 256 << levelOfDetail;
  }

  /// <summary>
  /// Converts a point from latitude/longitude WGS-84 coordinates (in degrees)
  /// into pixel XY coordinates at a specified level of detail.
  /// </summary>
  /// <param name="latitude">Latitude of the point, in degrees.</param>
  /// <param name="longitude">Longitude of the point, in degrees.</param>
  /// <param name="levelOfDetail">Level of detail, from 1 (lowest detail)
  /// to 23 (highest detail).</param>
  /// <param name="pixelX">Output parameter receiving the X coordinate in pixels.</param>
  /// <param name="pixelY">Output parameter receiving the Y coordinate in pixels.</param>
  public latLongToPixelXY(
    latitude: number,
    longitude: number,
    levelOfDetail: number
  ): { x: number; y: number } {
    latitude = this.clip(latitude, this.MinLatitude, this.MaxLatitude);
    longitude = this.clip(longitude, this.MinLongitude, this.MaxLongitude);

    let x = (longitude + 180) / 360;
    let sinLatitude = Math.sin((latitude * Math.PI) / 180);
    let y =
      0.5 - Math.log((1 + sinLatitude) / (1 - sinLatitude)) / (4 * Math.PI);

    let mapSize = this.mapSize(levelOfDetail);
    let pixelX = this.clip(x * mapSize + 0.5, 0, mapSize - 1);
    let pixelY = this.clip(y * mapSize + 0.5, 0, mapSize - 1);
    return {
      x: pixelX,
      y: pixelY,
    };
  }

  /// <summary>
  /// Converts tile XY coordinates into a QuadKey at a specified level of detail.
  /// </summary>
  /// <param name="tileX">Tile X coordinate.</param>
  /// <param name="tileY">Tile Y coordinate.</param>
  /// <param name="levelOfDetail">Level of detail, from 1 (lowest detail)
  /// to 23 (highest detail).</param>
  /// <returns>A string containing the QuadKey.</returns>
  public TileXYToQuadKey(tileX: number, tileY: number, levelOfDetail: number) {
    let quadKey = "";
    for (let i = levelOfDetail; i > 0; i--) {
      let digit = 0;
      let mask = 1 << (i - 1);
      if ((tileX & mask) != 0) {
        digit++;
      }
      if ((tileY & mask) != 0) {
        digit++;
        digit++;
      }
      quadKey += digit;
    }
    return quadKey.toString();
  }

  // Driver method to convert a lat/long to a quadkey
  public convertLatLongToQuadKey(lat: number, long: number) {
    const { x, y } = this.latLongToPixelXY(lat, long, 12);
    return this.TileXYToQuadKey(x, y, 12);
  }
}

const tileSystem = new TileSystem();
export default tileSystem;
