import { expect } from 'chai';
import { Caja, AñadirEnserCaja, EliminarEnserCaja, BuscarEnserCaja, Enser } from '../src/ejercicio-1';

describe('Caja', () => {
  let caja: Caja;

  beforeEach(() => {
    caja = new Caja();
  });

  it('should start with empty contents', () => {
    expect(caja.enseres.length).to.equal(0);
  });

  it('should add an item correctly', () => {
    const item = new Enser('Test Item');
    const añadirEnserCaja = new AñadirEnserCaja(caja);
    añadirEnserCaja.añadirEnser(item);
    expect(caja.enseres.length).to.equal(1);
  });

  it('should remove an item correctly', () => {
    const item = new Enser('Test Item');
    const añadirEnserCaja = new AñadirEnserCaja(caja);
    añadirEnserCaja.añadirEnser(item);
    const eliminarEnserCaja = new EliminarEnserCaja(caja);
    eliminarEnserCaja.eliminarEnser(item);
    expect(caja.enseres.length).to.equal(0);
  });

  it('should find an item correctly', () => {
    const item = new Enser('Test Item');
    const añadirEnserCaja = new AñadirEnserCaja(caja);
    añadirEnserCaja.añadirEnser(item);
    const buscarEnserCaja = new BuscarEnserCaja(caja);
    expect(buscarEnserCaja.buscarEnser('Test Item')).to.equal(true);
    expect(buscarEnserCaja.buscarEnser('Nonexistent Item')).to.equal(false);
  });
});
