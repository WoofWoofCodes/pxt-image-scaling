namespace images {
    /**
     * Copy an image from a source rectangle to a destination rectangle, stretching or compressing to fit the dimensions of the destination rectangle, if necessary.
     */
    //% block="Blit source $source at sx $sx sy $sy with width $sw and height $sh onto $target at x $tx y $ty with width $tw and height $th"
    //% blockId="WoofWoof_Blit_Block_API"
    //% source.shadow=variables_get
    //% source.defl=picture
    //% target.shadow=variables_get
    //% target.defl=picture
    //% sx.defl=0
    //% sy.defl=0
    //% sw.defl=16
    //% sh.defl=16
    //% tx.defl=0
    //% ty.defl=0
    //% tw.defl=16
    //% th.defl=16
    //% group="Drawing"
    export function blit(source: Image, sx: number, sy: number, sw: number, sh: number, target: Image, tx: number, ty: number, tw: number, th: number) {
        target.blit(tx, ty, tw, th, source, sx, sy, sw, sh, true, false)
    }

    /**
     * Creates a new image by scaling a source image
     */
    //% block="Create image of $source scaled by width $width height $height"
    //% blockId="WoofWoof_Stretch_Image_API"
    //% source.shadow=variables_get
    //% source.defl=picture
    //% group="Drawing"
    export function stretchImage(source: Image, width: number, height: number) {
        let i = image.create(source.width * width, source.height * height)
        i.blit(0, 0, source.width * width, source.height * height, source, 0, 0, source.width, source.height, true, false)
        return i
    }
}
    
    