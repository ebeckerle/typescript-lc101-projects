"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacity) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacity = totalCapacity;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        var sumOfAstronauts = this.sumMass(this.astronauts);
        var sumOfCargoItems = this.sumMass(this.cargoItems);
        return sumOfAstronauts + sumOfCargoItems;
        // return this.sumMass(this.astronauts: Astronaut[]) + this.sumMass(this.cargoItems: Cargo []);
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacity) {
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) == true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else if (this.canAdd(cargo) == false) {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) == true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else if (this.canAdd(astronaut) == false) {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
