import { expect } from 'chai';
import { Rational, Complex, AritmeticableCollection } from "../src/ejercicio-modificacion";

describe('Rational test ', () => {
    it('div', () => {
        const rational1 = new Rational(1, 2);
        const rational2 = new Rational(1, 4);
        const result = rational1.divide(rational2);
        expect(result.num).to.equal(4);
        expect(result.den).to.equal(2);
    });

    it('mult', () => {
        const rational1 = new Rational(1, 2);
        const rational2 = new Rational(1, 4);
        const result = rational1.multiply(rational2);
        expect(result.num).to.equal(1);
        expect(result.den).to.equal(8);
    });
});

describe('Complex test ', () => {
    it('sum', () => {
        const complex1 = new Complex(1, 2);
        const complex2 = new Complex(2, 3);
        const result = complex1.add(complex2);
        expect(result.real).to.equal(3);
        expect(result.imaginary).to.equal(5);
    });

    it('mult', () => {
        const complex1 = new Complex(1, 2);
        const complex2 = new Complex(2, 3);
        const result = complex1.multiply(complex2);
        expect(result.real).to.equal(-4);
        expect(result.imaginary).to.equal(7);
    });
});

describe('ArithmeticableCollection test', () => {
    it('add objects ', () => {
        const collection = new AritmeticableCollection();
        collection.addArithmeticable(new Rational(1, 2));
        collection.addArithmeticable(new Rational(1, 4));
        expect(collection.getNumberOfArithmeticables()).to.equal(2);
    });

    it('get objects', () => {
        const collection = new AritmeticableCollection();
        const complex1 = new Complex(1, 2);
        const complex2 = new Complex(2, 3);
        collection.addArithmeticable(complex1);
        collection.addArithmeticable(complex2);
        expect(collection.getArithmeticable(0)).to.deep.equal(complex1);
        expect(collection.getArithmeticable(1)).to.deep.equal(complex2);
    });
});
