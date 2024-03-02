import * as fs from 'fs';

/**
 * Clase FileReader que se encarga de leer un archivo.
 */
export class FileReader {
  /**
   * Crea una instancia de FileReader.
   * @param filePath La ruta del archivo a leer.
   */
  constructor(private filePath: string) {}

  /**
   * Lee el contenido del archivo.
   * @returns El contenido del archivo como una cadena de texto.
   */
  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, 'utf-8');
      return content;
    } catch (error) {
      console.error('Error al leer el archivo:', error.message);
      return '';
    }
  }
}

/**
 * Clase FileWriter que se encarga de escribir en un archivo.
 */
export class FileWriter {
  /**
   * Crea una instancia de FileWriter.
   * @param filePath La ruta del archivo en el que se escribirá.
   */
  constructor(private filePath: string) {}

  /**
   * Escribe datos en el archivo.
   * @param data Los datos a escribir en el archivo.
   */
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, 'utf-8');
      console.log('Archivo escrito exitosamente.');
    } catch (error) {
      console.error('Error al escribir en el archivo:', error.message);
    }
  }
}

// Cliente
const fileReader = new FileReader('example.txt');
const fileWriter = new FileWriter('example.txt');

// Leyendo contenido
const currentContent = fileReader.readFile();
console.log('Contenido actual:', currentContent);

// Escribiendo contenido
const newData = 'Este es un nuevo contenido que se escribirá en el archivo.';
fileWriter.writeFile(newData);

// Actualizando contenido
const updatedContent = fileReader.readFile();
console.log('Contenido actualizado:', updatedContent);
