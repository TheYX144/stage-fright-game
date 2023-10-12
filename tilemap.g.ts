// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Path":
            case "level1":return tiles.createTilemap(hex`10001000080a080808080808080908080201050808080808080a080a0808080802010508080a090808080a080808080301010508080808080a08030404040401010105080808080808030101010101010101060808090808030101010107070707060808080a080802010101060808080808080a08080808020101060808080809080808080a08080201050808080a0808080a0808080808020105080808080a080809080808080802010508090808080808080808080a0802010508080a0808080a08080808080802010508080a08080908080808080808020105080808080808080a0808080808020105080808080808080808080808080c0b06080808080808080808`, img`
2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . 2 
2 2 2 2 2 2 . . . . . . . . . 2 
2 2 2 2 2 . . . . . . . . . . 2 
2 2 2 2 . . . . . . . . . . 2 2 
2 2 2 2 . . . . . 2 2 2 2 2 2 2 
2 2 2 2 . . . . 2 2 2 2 2 2 2 2 
2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 
2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 
2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 
2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 
2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 
2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 
2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 
2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,myTiles.tile1,sprites.castle.tilePath7], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100006030303030303030303030c030303040701010101010101010101010101010907010101010101010101010101010109070101010101010101010101010101090701010101010101010101010101010907010101010101010101010101010109070101010101010101010101010101090a0101010101010101010101010101090701010101010101010101010101010906030303030401010101010101010109070d0101010901010101010101010109070101010109010101010101010101090e010101010901010101010101010109070101010109010101010101010101090701010101090101010101010101010905020202020802020b02020202020208`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 . . . . . . . . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterEast0,sprites.dungeon.doorClosedWest,sprites.dungeon.doorLockedSouth,sprites.dungeon.purpleSwitchUp,sprites.dungeon.stairLadder,sprites.dungeon.purpleOuterWest2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "startSpot":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
