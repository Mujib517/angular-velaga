import { Calculator } from './calculator';
//jasmine

describe("Calculator", function () {

    var calc;

    beforeEach(function () {
        calc = new Calculator();
    });
    //AAA Arrange Act and Assert

    describe("add()", function () {

        it('Should add two numbers and return result', () => {
            var res = calc.add(10, 20);

            expect(res).toBe(30);
        });

        it('Should add return zero when first parameter is zero', () => {
            var res = calc.add(0, 1000);

            expect(res).toBe(0);
        });

        it("Should return -1 when second parameter is zero", () => {

            var res = calc.add(10, 0);

            expect(res).toBe(-1);
        });

        it('Should return 0 when b is less than 0', function () {
            var res = calc.add(100, -1);

            expect(res).toBe(0);
        });
    });

    describe("sub()", () => {

        it('Should subtract two numbers and return result', () => {
            var res = calc.sub(10, 5);
            expect(res).toBe(5);
        });

        it('Should return 0 when a is less than b', () => {
            var res = calc.sub(5, 10);
            expect(res).toBe(0);
        });

    });

    //red green refactor
    //simple fast reliable
    // websvc, db 
    afterEach(function () {
        calc = null;
    });
});
