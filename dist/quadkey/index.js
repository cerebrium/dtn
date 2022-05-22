"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TileSystem {
    constructor() {
        this.EarthRadius = 6378137;
        this.MinLatitude = -85.05112878;
        this.MaxLatitude = 85.05112878;
        this.MinLongitude = -180;
        this.MaxLongitude = 180;
        this.levelOfDetail = 12;
    }
    clip(n, minValue, maxValue) {
        return Math.min(Math.max(n, minValue), maxValue);
    }
    mapSize() {
        return 256 << this.levelOfDetail;
    }
    /// <summary>
    /// Converts a point from latitude/longitude WGS-84 coordinates (in degrees)
    /// into pixel XY coordinates at a specified level of detail.
    /// </summary>
    /// <param name="latitude">Latitude of the point, in degrees.</param>
    /// <param name="longitude">Longitude of the point, in degrees.</param>
    /// <param name="this.levelOfDetail">Level of detail, from 1 (lowest detail)
    /// to 23 (highest detail).</param>
    /// <param name="pixelX">Output parameter receiving the X coordinate in pixels.</param>
    /// <param name="pixelY">Output parameter receiving the Y coordinate in pixels.</param>
    latLongToPixelXY(latitude, longitude) {
        latitude = this.clip(latitude, this.MinLatitude, this.MaxLatitude);
        longitude = this.clip(longitude, this.MinLongitude, this.MaxLongitude);
        let x = (longitude + 180) / 360;
        let sinLatitude = Math.sin((latitude * Math.PI) / 180);
        let y = 0.5 - Math.log((1 + sinLatitude) / (1 - sinLatitude)) / (4 * Math.PI);
        let mapSize = this.mapSize();
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
    /// <param name="this.levelOfDetail">Level of detail, from 1 (lowest detail)
    /// to 23 (highest detail).</param>
    /// <returns>A string containing the QuadKey.</returns>
    TileXYToQuadKey(tileX, tileY) {
        let quadKey = "";
        for (let i = this.levelOfDetail; i > 0; i--) {
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
    /// <summary>
    /// Converts pixel XY coordinates into tile XY coordinates of the tile containing
    /// the specified pixel.
    /// </summary>
    /// <param name="pixelX">Pixel X coordinate.</param>
    /// <param name="pixelY">Pixel Y coordinate.</param>
    /// <param name="tileX">Output parameter receiving the tile X coordinate.</param>
    /// <param name="tileY">Output parameter receiving the tile Y coordinate.</param>
    pixelXYToTileXY(pixelX, pixelY) {
        let tileX = pixelX / 256;
        let tileY = pixelY / 256;
        return { tileX, tileY };
    }
    // Driver method to convert a lat/long to a quadkey
    convertLatLongToQuadKey(lat, long) {
        const { x, y } = this.latLongToPixelXY(lat, long);
        const { tileX, tileY } = this.pixelXYToTileXY(x, y);
        return this.TileXYToQuadKey(tileX, tileY);
    }
}
const tileSystem = new TileSystem();
exports.default = tileSystem;
//# sourceMappingURL=index.js.map