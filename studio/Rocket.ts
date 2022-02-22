import { Payload } from "./Payload";
import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";

export class Rocket {
    name: string;
    totalCapacity: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacity: number){
        this.name = name;
        this.totalCapacity = totalCapacity;
    }

    sumMass(items: Payload[]): number{
        let sum: number = 0;

        for (let i = 0; i<items.length; i++) {
            sum+= items[i].massKg;
        }
        return sum;
    }

    currentMassKg(): number {
        let sumOfAstronauts = this.sumMass(this.astronauts);
        let sumOfCargoItems = this.sumMass(this.cargoItems);
        return sumOfAstronauts + sumOfCargoItems;
        // return this.sumMass(this.astronauts: Astronaut[]) + this.sumMass(this.cargoItems: Cargo []);
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacity){
            return true;
        }else{
            return false;
        }
    }

    addCargo (cargo: Cargo): boolean{
        if (this.canAdd(cargo) == true){
            this.cargoItems.push(cargo);
            return true;
        }else if (this.canAdd(cargo) == false){
            return false;
        }
    }

    addAstronaut (astronaut: Astronaut): boolean{
        if (this.canAdd(astronaut) == true){
            this.astronauts.push(astronaut);
            return true;
        } else if (this.canAdd(astronaut) == false){
            return false;
        }
    }

}