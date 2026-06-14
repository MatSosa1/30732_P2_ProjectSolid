
/**
 * VIOLACIÓN AL PRINCIPIO DE SUSTITUCIÓN DE LISKOV (LSP)
 * 
 * En la flota de la reserva, intentamos manejar diversos vehículos.
 * Sin embargo, el cliente se ve obligado a conocer los detalles internos
 * de cada marca para poder operar, rompiendo la transparencia de la abstracción.
 */

export interface Car {
    getVehicleModel(): string;
    getVehicleDetails(): string;
}

export class Tesla implements Car {
    constructor() {}

    getVehicleModel(): string {
        return 'Tesla';
    }

    getVehicleDetails(): string {
        return `${this.getVehicleModel()}, Carga eléctrica al 100%`
    }
}

export class Audi implements Car {
    constructor() {}

    getVehicleModel(): string {
        return 'Audi';
    }

    getVehicleDetails(): string {
        return `${this.getVehicleModel()}, Tracción Quattro activada`
    }
}

export class Toyota implements Car {
    constructor() {}

    getVehicleModel(): string {
        return 'Toyota';
    }

    getVehicleDetails(): string {
        return `${this.getVehicleModel()}, Motor híbrido listo`
    }
}

export class Honda implements Car {
    constructor() {}

    getVehicleModel(): string {
        return 'Honda';
    }

    getVehicleDetails(): string {
        return `${this.getVehicleModel()}, VTEC activado`
    }
}

export class Ford implements Car {
    constructor() {}

    getVehicleModel(): string {
        return 'Ford';
    }

    getVehicleDetails(): string {
        return `${this.getVehicleModel()}, Built Tough`
    }
}


export class VehicleManager {
    static printVehicleDetails( vehicles: Car[] ) {
        vehicles.forEach( vehicle => {
            console.log(vehicle.getVehicleDetails());
        });
    }

}
