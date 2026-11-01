import { describe, it, expect } from "vitest";
import { luhnsAlgo, pyramid, pyramidPair, addAllDigits, extractOddDigits, doubleEvenDigits } from "lab5"


describe('test of doubleEvenDigits function in lab5', () => {
    it('when input is 2030000000020404, should return: true', () => {
        expect(doubleEvenDigits(2030000000020404)).toStrictEqual([ 0, 0, 0, 0, 0, 0, 6, 4 ]);
    })
    /* you may want to write your own tests too! */
})

describe('test of extractOddDigits function in lab5', () => {
    it('when input is 2030000000020404, should return: true', () => {
        expect(extractOddDigits(2030000000020404)).toStrictEqual([4,4,2,0,0,0,0,0]);
    })
    /* you may want to write your own tests too! */
})

describe('test of addAllDigits function in lab5', () => {
    it('when input is 2030000000020404, should return: true', () => {
        expect(addAllDigits(2030000000020404)).toBe(15);
    })
    /* you may want to write your own tests too! */

})

describe('test of luhnsAlgo function in lab5', () => {
    it('when input is 4003600000000014, should return: true', () => {
        expect(luhnsAlgo(4003600000000014)).toBe(true);
    })    
    it('when input is 4003500000000014, should return: false', () => {
        expect(luhnsAlgo(4003500000000014)).toBe(false);
    })
    /* you may want to write your own tests too! */

})


describe('test of pyramid function in lab5', () => {
    it('when input is 3, should return: "  *\n **\n***\n"', () => {
        expect(pyramid(3)).toBe("  *\n **\n***\n");
    })
    /* you may want to write your own tests too! */

})

describe('test of pyramidPair function in lab5', () => {
    it('when input is 3, should return: true', () => {
        expect(pyramidPair(3)).toBe("  * *  \n ** ** \n*** ***\n");
    })
    /* you may want to write your own tests too! */
})

