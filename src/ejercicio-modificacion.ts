/**
 * Interfaz genérica Arithmeticable
 * define los métodos de suma, resta, multiplicación y división
 */
interface Arithmeticable<T> {
    add(n: T): T;
    substract(n: T): T;
    multiply(n: T): T;
    divide(n: T): T;
}

/**
 * Clase genérica AritmeticableCollection con parámetro T restringido a Arithmeticable
 * implementa los métodos addArithmeticable, getArithmeticable y getNumberOfArithmeticable
 */
export class AritmeticableCollection<T extends Arithmeticable<T>> {
    private elements: T[] = [];
    addArithmeticable(element: T): void {
        this.elements.push(element);
    }
    getArithmeticable(index: number): T {
        return this.elements[index];
    }
    getNumberOfArithmeticables(): number {
        return this.elements.length;
    }
}

/**
 * Clase Complez que implementa la interfaz Arithmeticable
 */
export class Complex<T> implements Arithmeticable<Complex<T>> {
    constructor(public real: number, public imaginary: number){}
    add(n: Complex<T>): Complex<T> {
        const re = this.real + n.real;
        const im = this.imaginary + n.imaginary;
        const resultado = new Complex(re, im);
        return resultado;
    }
    substract(n: Complex<T>): Complex<T> {
        const re = this.real - n.real;
        const im = this.imaginary - n.imaginary;
        const resultado = new Complex(re, im);
        return resultado;
    }
    multiply(n: Complex<T>): Complex<T> {
        const re = (this.real * n.real) - (this.imaginary * n.imaginary);
        const im = (this.real * n.imaginary) + (this.imaginary * n.real);
        const resultado = new Complex(re, im);
        return resultado;
    }
    divide(n: Complex<T>): Complex<T> {
        const re = ((this.real * n.real) + (this.imaginary * n.imaginary)) / ((n.real * n.real) + (n.imaginary * n.imaginary));
        const im = ((this.imaginary * n.real) - (this.real * n.imaginary)) / ((n.real * n.real) + (n.imaginary * n.imaginary));
        const resultado = new Complex(re, im);
        return resultado;
    }
}

/**
 * clase Rational que implementa la interfaz Arithmeticable
 */
export class Rational<T> implements Arithmeticable<Rational<T>> {
    constructor(public num: number, public den: number) {}
    add(n: Rational<T>): Rational<T> {
        const num = this.num * n.den + n.num * this.den;
        const den = this.den * n.den;
        const resultado = new Rational(num, den);
        return resultado;
    }
    substract(n: Rational<T>): Rational<T> {
        const num = this.num * n.den + n.num * this.den;
        const den = this.den * n.den;
        const resultado = new Rational(-num, den);
        return resultado;
    }
    multiply(n: Rational<T>): Rational<T> {
        const num = this.num * n.num;
        const den = this.den * n.den;
        const resultado = new Rational(num, den);
        return resultado;
    }
    divide(n: Rational<T>): Rational<T> {
        const num = this.num * n.den;
        const den = this.den * n.num;
        const resultado = new Rational(num, den);
        return resultado;
    }
}

// Instancias de AritmeticableCollection a partir de Complex y Rational
const myCollection = new AritmeticableCollection;
const complex1 = new Complex(1, 2);
const complex2 = new Complex(3, 5);
const rational1 = new Rational(1, 3);
const rational2 = new Rational(2, 4);

const sum = complex1.add(complex2);
console.log(sum);

const mult = rational1.multiply(rational2);
console.log(mult);

myCollection.addArithmeticable(sum);
myCollection.addArithmeticable(mult);
console.log(`Number of arithmeticables: `, myCollection.getNumberOfArithmeticables());
console.log(myCollection.getArithmeticable(0));
console.log(myCollection.getArithmeticable(1));

