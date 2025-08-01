class Cine {
    constructor(nombre, capacidadPorSala) {
        this.nombre = nombre;
        this.salas = [];
        this.capacidadPorSala = capacidadPorSala;
    }

    agregarSala() {
        const id = this.salas.length + 1;
        const nuevaSala = new Sala(id, this.capacidadPorSala);
        this.salas.push(nuevaSala);
        console.log(`Sala ${id} agregada al cine ${this.nombre}.`);
    }

}
class Sala {
    constructor(id, capacidad) {
        this.id = id;
        this.asientosDisponibles = Array.from({ length: capacidad }, (_, i) => i + 1);
        this.asientosReservados = [];
    }

    reservarAsiento(asiento) {
        const index = this.asientosDisponibles.indexOf(asiento)
        if (index !== -1) {
            this.asientosDisponibles.splice(index, 1);
            this.asientosReservados.push(asiento);
            console.log(`Asiento ${asiento} de la sala ${this.id} reservado con exito!!`);
        } else {
            console.log(`Asiento ${asiento} de la sala ${this.id} no disponible`);
        }
    }
    cancelarReserva(asiento) {
        const index = this.asientosReservados.indexOf(asiento)
        if (index !== -1) {
            this.asientosReservados.splice(index, 1);
            this.asientosDisponibles.push(asiento);
            console.log(`Reserva de asiento ${asiento} de la sala ${this.id} cancelado con exito!!`);
        } else {
            console.log(`Asiento ${asiento} de la sala ${this.id} no esta reservado `);
        }
    }
    mostrarDisponibles() {
        if (this.asientosDisponibles.length > 0) {
            console.log(`Asientos disponibles en la sala ${this.id}: ${this.asientosDisponibles.sort((a, b) => a - b).join(', ')} `);// aplique el sort porque me di cuenta que al reintegrar los asientos cancelados se agregaron al final del array
        } else {
            console.log(`No hay asientos disponibles en la sala ${this.id}`);
        }
    }

    mostrarReservados() {
        if (this.asientosReservados.length > 0) {
            console.log(`Asientos reservados en la sala ${this.id}: ${this.asientosReservados.sort((a, b) => a - b).join(', ')} `);// aplique el sort porque me di cuenta que al reintegrar los asientos cancelados se agregaron al final del array
        } else {
            console.log(`No hay asientos reservados en la sala ${this.id}`);
        }
    }
}

console.log("-----------------------PRUEBA POR CONSOLA--------------------------");
console.log("-------------------instanciando el primer cine--------------------------");
const cine1 = new Cine("Cine Hola Mundo", 20)
console.log(cine1);
console.log("-----------------------Agregando salas a cine1--------------------------");
cine1.agregarSala()
cine1.agregarSala()
console.log(cine1);
console.log("-----------------------Reservando asientos en sala 1--------------------------");
//Exitosos
cine1.salas[0].reservarAsiento(3);
cine1.salas[0].reservarAsiento(4);
//No exitosos
cine1.salas[0].reservarAsiento(3);
cine1.salas[0].reservarAsiento(21);
console.log("-----------------------Resumen sala 1--------------------------");
cine1.salas[0].mostrarDisponibles();
cine1.salas[0].mostrarReservados();
console.log("-----------------------Reservando asientos en sala 2--------------------------");
//Exitosos
cine1.salas[1].reservarAsiento(7);
cine1.salas[1].reservarAsiento(8);
// No exitosos
cine1.salas[1].reservarAsiento(7);
cine1.salas[1].reservarAsiento(21);
console.log("-----------------------Resumen sala 2--------------------------");
cine1.salas[1].mostrarDisponibles();
cine1.salas[1].mostrarReservados();
console.log("-----------------------Cancelando reservas sala 1--------------------------");
//Exitosos
cine1.salas[0].cancelarReserva(3);
cine1.salas[0].cancelarReserva(4);
//No exitosos
cine1.salas[0].cancelarReserva(3);
cine1.salas[0].cancelarReserva(21);
console.log("-----------------------Resumen sala 1--------------------------");
cine1.salas[0].mostrarDisponibles();
cine1.salas[0].mostrarReservados();
console.log("-----------------------Cancelando reservas en sala 2--------------------------");
//Exitosos
cine1.salas[1].cancelarReserva(7);
cine1.salas[1].cancelarReserva(8);
// No exitosos
cine1.salas[1].cancelarReserva(7);
cine1.salas[1].cancelarReserva(21);
console.log("-----------------------Resumen sala 2--------------------------");
cine1.salas[1].mostrarDisponibles();
cine1.salas[1].mostrarReservados();
console.log("-----------------------FIN DE PRUEBA--------------------------");

//----> ideas de mejora
// 1.- en la clase cine agregar mas meyodos para eliminar salas, o generar reportes o resumenes
// 2.- separar los mensajes de cuando un asiento este disponible o reservado, de los que estan fuera de rango (capacidad de la sala)
// 3.- Aplicar try catch, aunque investigando se recomienda cuando se usan inputs externos de formularios o APIS que puedan lanzar exepciones en tiempo de ejecucion.... PROFUNDIZAR!
//