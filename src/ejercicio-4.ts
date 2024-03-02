/**
 * Interfaz para objetos imprimibles.
 */
interface Printable {
  /**
   * Imprime el objeto.
   */
  print(): void;
}

/**
 * Interfaz para objetos escaneables.
 */
interface Scannable {
  /**
   * Escanea el objeto.
   */
  scan(): void;
}

/**
 * Clase que implementa la interfaz Printable e imprime.
 */
export class Printer implements Printable {
  /**
   * Imprime.
   */
  print(): void {
    console.log('Imprimiendo...');
  }
}

/**
 * Clase que implementa la interfaz Scannable y escanea.
 */
export class Scanner implements Scannable {
  /**
   * Escanea.
   */
  scan(): void {
    console.log('Escaneando...');
  }
}

/**
 * Clase que implementa las interfaces Printable y Scannable e imprime y escanea.
 */
export class PrinterScanner implements Printable, Scannable {
  /**
   * Imprime.
   */
  print(): void {
    console.log('Imprimiendo...');
  }

  /**
   * Escanea.
   */
  scan(): void {
    console.log('Escaneando...');
  }
}

// Código cliente
const printer = new Printer();
// Imprimiendo
printer.print();

const scanner = new Scanner();
// Escaneando
scanner.scan();

const printerScanner = new PrinterScanner();
// Imprimiendo
printerScanner.print();
// Escaneando
printerScanner.scan();
