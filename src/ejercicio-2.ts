class Factura {
  constructor(public numeroFactura: string, public cliente: string, public total: number, public fecha: Date) {}
}

interface GeneradorFacturas {
  generarFactura(factura: Factura): void;
}

class GeneradorPDF implements GeneradorFacturas {
  generarFactura(factura: Factura): void {
    console.log("===========================================");
    console.log("              Factura PDF                  ");
    console.log("===========================================");
    console.log("Nº de factura: ", factura.numeroFactura);
    console.log("Fecha: ", factura.fecha);
    console.log("Cliente: ", factura.cliente);
    console.log("Total: ", factura.total), " euros";
    console.log("===========================================");
  }
}

class GeneradorHTML implements GeneradorFacturas {
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

const date = new Date(2024, 1, 28);
const factura = new Factura("ES001", "Leandro", 459.66, date);
const generadorPDF = new GeneradorPDF();
const generadorHTML = new GeneradorHTML();

generadorPDF.generarFactura(factura);
generadorHTML.generarFactura(factura);
