import { Soldier } from "./Soldier";

export class Viking extends Soldier{
    name: string;

    constructor(name:string, health:number, strength:number){
        super(health, strength);

        this.name = name;
    }

    receiveDamage(damage: number) {
        this.health -= damage;

        if(this.health <= 0){
            return `${this.name} has died in act of combat`
        }
        return `${this.name} has received ${damage} points of damage`
    }

    battleCry () {
        return "Odin Owns You All!"
    }
}