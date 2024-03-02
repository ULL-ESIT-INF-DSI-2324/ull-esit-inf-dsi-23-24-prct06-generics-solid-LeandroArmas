import { expect } from 'chai';
import { FileReader, FileWriter } from '../src/ejercicio-3';

describe('FileReader', () => {
  it('should read a file correctly', () => {
    const fileReader = new FileReader('example.txt');
    const content = fileReader.readFile();
    expect(content).to.equal('Este es un nuevo contenido que se escribirá en el archivo.');
  });
});

describe('FileWriter', () => {
  it('should write to a file correctly', () => {
    const fileWriter = new FileWriter('example.txt');
    fileWriter.writeFile('This is a test output.');
    const fileReader = new FileReader('example.txt');
    const content = fileReader.readFile();
    expect(content).to.equal('This is a test output.');
  });
});
