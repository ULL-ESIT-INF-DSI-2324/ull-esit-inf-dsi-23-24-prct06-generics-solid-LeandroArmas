import { expect } from 'chai';
import { Printer, Scanner, PrinterScanner } from '../src/ejercicio-4';

// Stubbing para capturar la salida de console.log
let consoleOutput: string[] = [];
const stubConsoleLog = (message: string) => {
  consoleOutput.push(message);
};

describe('Printer', () => {
  beforeEach(() => {
    consoleOutput = [];
  });

  it('should print correctly', () => {
    const printer = new Printer();
    // Stub console.log
    const originalConsoleLog = console.log;
    console.log = stubConsoleLog as any; // Forzamos el tipo por ahora
    printer.print();
    console.log = originalConsoleLog; // Restauramos console.log
    expect(consoleOutput).to.deep.equal(['Imprimiendo...']);
  });
});

describe('Scanner', () => {
  beforeEach(() => {
    consoleOutput = [];
  });

  it('should scan correctly', () => {
    const scanner = new Scanner();
    const originalConsoleLog = console.log;
    console.log = stubConsoleLog as any;
    scanner.scan();
    console.log = originalConsoleLog;
    expect(consoleOutput).to.deep.equal(['Escaneando...']);
  });
});

describe('PrinterScanner', () => {
  beforeEach(() => {
    consoleOutput = [];
  });

  it('should print correctly', () => {
    const printerScanner = new PrinterScanner();
    const originalConsoleLog = console.log;
    console.log = stubConsoleLog as any; 
    printerScanner.print();
    console.log = originalConsoleLog; 
    expect(consoleOutput).to.deep.equal(['Imprimiendo...']);
  });

  it('should scan correctly', () => {
    const printerScanner = new PrinterScanner();
    const originalConsoleLog = console.log;
    console.log = stubConsoleLog as any;
    printerScanner.scan();
    console.log = originalConsoleLog;
    expect(consoleOutput).to.deep.equal(['Escaneando...']);
  });
});
