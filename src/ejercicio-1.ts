// Definición de la clase Enser
class Enser {
    constructor(public nombre: string) {}
}
  
// Definición de la clase Caja que puede contener diferentes tipos de enseres
class Caja {
    private enseres: Enser[];

    constructor() {
        this.enseres = [];
    }

    añadirEnser(enser: Enser): void {
        this.enseres.push(enser);
    }

    eliminarEnser(enser: Enser): void {
        const index = this.enseres.indexOf(enser);
        if (index !== -1) {
        this.enseres.splice(index, 1);
        }
    }

    listarEnseres(): void {
        console.log("Enseres en la caja: ");
        this.enseres.forEach(enser => {
        console.log(enser.nombre);
        });
    }

    buscarEnser(nombre: string): Enser | undefined {
        return this.enseres.find(enser => enser.nombre === nombre);
    }
}

// Ejemplo de uso
const cajaMudanza = new Caja();
const mesa = new Enser("Mesa");
const silla = new Enser("Silla");
const auriculares = new Enser("Auriculares");
const camiseta = new Enser("Camiseta");

cajaMudanza.añadirEnser(mesa);
cajaMudanza.añadirEnser(silla);
cajaMudanza.añadirEnser(auriculares);
cajaMudanza.añadirEnser(camiseta);

cajaMudanza.listarEnseres();

console.log(cajaMudanza.buscarEnser("Mesa"));
console.log(cajaMudanza.buscarEnser("Sofa"));
  