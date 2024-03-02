/**
 * Clase que representa una factura.
 */
export class Factura {
  /**
   * Crea una instancia de Factura.
   * @param numeroFactura El número de la factura.
   * @param cliente El nombre del cliente.
   * @param total El total de la factura.
   * @param fecha La fecha de la factura.
   */
  constructor(public numeroFactura: string, public cliente: string, public total: number, public fecha: Date) {}
}

/**
 * Interfaz para el generador de facturas.
 */
interface GeneradorFacturas {
  /**
   * Genera una factura.
   * @param factura La factura a generar.
   */
  generarFactura(factura: Factura): void;
}

/**
 * Clase que implementa la interfaz GeneradorFacturas y genera facturas en formato PDF.
 */
export class GeneradorPDF implements GeneradorFacturas {
  /**
   * Genera una factura en formato PDF.
   * @param factura La factura a generar.
   */
  generarFactura(factura: Factura): void {
    console.log("===========================================");
    console.log("              Factura PDF                  ");
    console.log("===========================================");
    console.log("Nº de factura: ", factura.numeroFactura);
    console.log("Fecha: ", factura.fecha);
    console.log("Cliente: ", factura.cliente);
    console.log("Total: ", factura.total, " euros");
    console.log("===========================================");
  }
}

/**
 * Clase que implementa la interfaz GeneradorFacturas y genera facturas en formato HTML.
 */
export class GeneradorHTML implements GeneradorFacturas {
  /**
   * Genera una factura en formato HTML.
   * @param factura La factura a generar.
   */
  generarFactura(factura: Factura): void {
    console.log(`<html>`);
    console.log(`  <head>`);
    console.log(`    <title> Factura </title>`)
    console.log(`  </head>`);
    console.log(`  <body>`);
    console.log(`    <h1>Factura para ${factura.cliente} </h1>`);
    console.log(`    <p>Nº de factura: ${factura.numeroFactura}</p>`);
    console.log(`    <p>Fecha: ${factura.fecha}</p>`);
    console.log(`    <p>Cliente: ${factura.cliente}</p>`);
    console.log(`    <p>Total: ${factura.total} euros </p>`);
    console.log(`  </body>`);
    console.log(`</html>`);
  }
}

// Ejemplo de uso
const date = new Date(2024, 1, 28);
const factura = new Factura("ES001", "Leandro", 459.66, date);
const generadorPDF = new GeneradorPDF();
const generadorHTML = new GeneradorHTML();

generadorPDF.generarFactura(factura);
generadorHTML.generarFactura(factura);
