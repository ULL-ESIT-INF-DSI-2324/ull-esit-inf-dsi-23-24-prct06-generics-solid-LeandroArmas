import { expect } from 'chai';
import { Factura, GeneradorPDF, GeneradorHTML } from '../src/ejercicio-2';

describe('Factura', () => {
  it('should create a factura with correct values', () => {
    const date = new Date(2024, 1, 28);
    const factura = new Factura('ES001', 'Leandro', 459.66, date);
    expect(factura.numeroFactura).to.equal('ES001');
    expect(factura.cliente).to.equal('Leandro');
    expect(factura.total).to.equal(459.66);
    expect(factura.fecha).to.equal(date);
  });
});

describe('GeneradorPDF', () => {
  it('should generate PDF correctly', () => {
    const generadorPDF = new GeneradorPDF();
    const date = new Date(2024, 1, 28);
    const factura = new Factura('ES001', 'Leandro', 459.66, date);
    expect(generadorPDF.generarFactura(factura)).to.not.throw;
  });
});

describe('GeneradorHTML', () => {
  it('should generate HTML correctly', () => {
    const generadorHTML = new GeneradorHTML();
    const date = new Date(2024, 1, 28);
    const factura = new Factura('ES001', 'Leandro', 459.66, date);
    expect(generadorHTML.generarFactura(factura)).to.not.throw;
  });
});
