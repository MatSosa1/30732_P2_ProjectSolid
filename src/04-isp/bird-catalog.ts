
/**
 * VIOLACIÓN AL PRINCIPIO DE SEGREGACIÓN DE INTERFAZ (ISP)
 * 
 * El catálogo de fauna define una interfaz "gorda" que obliga a las aves 
 * a implementar métodos que no les corresponden según su naturaleza.
 */

interface Animal {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface SwimmingBird {
    swim(): void;
}

export class Toucan implements Animal, FlyingBird, SwimmingBird {
    public eat() { console.log('El Tucán está comiendo frutas.'); }
    public fly() { console.log('El Tucán vuela sobre la selva.'); }
    public swim() { console.log('El Tucán no suele nadar, pero implemento el método vacío.'); }
}

export class Hummingbird implements Animal, FlyingBird {
    public eat() { console.log('El Colibrí busca néctar.'); }
    public fly() { console.log('El Colibrí aletea rápidamente.'); }
}

export class Ostrich implements Animal, SwimmingBird {
    public eat() { console.log('El Avestruz come hierbas.'); }
    public swim() { console.log('El Avestruz puede nadar si es necesario.'); }
}
