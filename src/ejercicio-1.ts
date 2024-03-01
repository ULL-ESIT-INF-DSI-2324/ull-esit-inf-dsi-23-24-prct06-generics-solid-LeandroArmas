/**
 * Clase que representa un enser.
 */
class Enser {
	/**
	 * Crea una instancia de Enser.
	 * @param nombre El nombre del enser.
	 */
	constructor(public nombre: string) {}
}

/**
* Clase que representa una caja que contiene enseres.
*/
class Caja {
	public enseres: Enser[];

	/**
	 * Crea una instancia de Caja.
	 */
	constructor() {
		this.enseres = [];
	}

	/**
	 * Lista los enseres en la caja.
	 */
	listarEnseres(): void {
		console.log("Enseres en la caja: ");
		this.enseres.forEach(enser => {
			console.log(enser.nombre);
		});
	}
}

/**
* Clase para añadir un enser a una caja.
*/
class AñadirEnserCaja{
	/**
	 * Crea una instancia de AñadirEnserCaja.
	 * @param caja La caja a la que se añadirá el enser.
	 */
	constructor(private caja: Caja) {}
	
	/**
	 * Añade un enser a la caja.
	 * @param enser El enser que se añadirá a la caja.
	 */
	añadirEnser(enser: Enser): void {
		this.caja.enseres.push(enser);
	}
}

/**
* Clase para eliminar un enser de una caja.
*/
class EliminarEnserCaja {
	/**
	 * Crea una instancia de EliminarEnserCaja.
	 * @param caja La caja de la que se eliminará el enser.
	 */
	constructor(private caja: Caja) {}

	/**
	 * Elimina un enser de la caja.
	 * @param enser El enser que se eliminará de la caja.
	 */
	eliminarEnser(enser: Enser): void {
		this.caja.enseres = this.caja.enseres.filter(item => item !== enser);
	}
}

/**
* Clase para buscar un enser en una caja.
*/
class BuscarEnserCaja {
	/**
	 * Crea una instancia de BuscarEnserCaja.
	 * @param caja La caja en la que se buscará el enser.
	 */
	constructor(private caja: Caja) {}
	
	/**
	 * Busca un enser en la caja por su nombre.
	 * @param nombre El nombre del enser que se buscará en la caja.
	 * @returns true si se encuentra el enser, false en caso contrario.
	 */
	buscarEnser(nombre: string): boolean {
			for (const enser of this.caja.enseres) {
				if (enser.nombre === nombre) {
					return true;
				}
			}
			return false;
	}
}

// Ejemplo de uso
const caja = new Caja();
const añadirEnserCaja = new AñadirEnserCaja(caja);
const eliminarEnserCaja = new EliminarEnserCaja(caja);
const buscarEnserCaja = new BuscarEnserCaja(caja);

const mesa = new Enser("Mesa");
const silla = new Enser("Silla");
const auriculares = new Enser("Auriculares");
const camiseta = new Enser("Camiseta");

añadirEnserCaja.añadirEnser(mesa);
añadirEnserCaja.añadirEnser(silla);
añadirEnserCaja.añadirEnser(auriculares);
añadirEnserCaja.añadirEnser(camiseta);

eliminarEnserCaja.eliminarEnser(mesa);

console.log(buscarEnserCaja.buscarEnser("Silla"));

caja.listarEnseres();
