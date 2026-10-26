// Typescript OOPS concept examples

// Abstraction

export abstract class Character {
    public name: string;
    public damage: number;
    public attackSpeed: number;

    constructor(name: string, damage: number, speed: number) {
        this.name = name;
        this.damage = damage;
        this.attackSpeed = speed;
    }

    public abstract damagePerSecond(): number;
}

export class Goblin extends Character {
    constructor(name: string, damage: number, speed: number) {
        super(name, damage, speed);
    }

    public damagePerSecond(): number {
        return this.damage * this.attackSpeed;
    }
}

const goblin: Goblin = new Goblin("Elon", 15, 1.6);

console.log(goblin.damagePerSecond());

// Encapsulation

export class Character {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }
}

const char: Character = new Character("Unknown Name");

char.name = "Elon";

console.log(char.name);

//   inheritance

export class Character {
    public name: string;
    public damage: number;

    constructor(name: string, damage: number) {
        this.name = name;
        this.damage = damage;
    }

    public talk(): void {
        console.log("Says something ...");
    }
}

export class Orc extends Character {
    public weapon: string;

    constructor(name: string, damage: number, weapon: string) {
        super(name, damage);

        this.weapon = weapon;
    }

    public attack(): void {
        console.log(`Attacks his target with his ${this.weapon}.`);
    }
}

const orc: Orc = new Orc("Elon", 15, "Axe");

orc.talk();
orc.attack();

//   polymorphism

export class Character {
    public name: string;
    public damage: number;

    constructor(name: string, damage: number) {
        this.name = name;
        this.damage = damage;
    }

    public talk(): void {
        console.log("Says something ...");
    }

    public attack(): void {
        console.log(`Attacks his target with his fists.`);
    }
}

export class Orc extends Character {
    public weapon: string;

    constructor(name: string, damage: number, weapon: string) {
        super(name, damage);

        this.weapon = weapon;
    }

    public talk(): void {
        console.log("Says something but in orcish ...");
    }

    public attack(): void {
        console.log(`Attacks his target with his ${this.weapon}.`);
    }
}

const orc: Orc = new Orc("Elon", 15, "Axe");

orc.talk();
orc.attack();
