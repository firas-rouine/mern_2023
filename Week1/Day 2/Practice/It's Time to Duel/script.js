class Unit_Cards {
    constructor(name, cost, power, resilience) {
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }
    attack(target) {
        target.resilience -= this.power;
        console.log(`"${this.name}" attacked "${target.name}". "${target.name}" lost ${this.resilience} resilience points.`);
    }


}

class Effect_Cards {
    constructor(name, cost, text, stat, magnitude) {
        this.name = name;
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        console.log(`Playing "${target.name}" on "${this.name}". ${this.text}`);
        if (this.stat === "resilience") {
            target.resilience += this.magnitude;
            console.log(`${target.name}'s resilience increased to ${target.resilience}`);
        } else {
            target.power += this.magnitude;
            console.log(`${target.name}'s power increased to ${target.power}`);
        }



    }
}
const Red_Belt_Ninja = new Unit_Cards("Red Belt Ninja", 3, 3, 4);
const Black_Belt_Ninja = new Unit_Cards("Black Belt Ninja", 4, 5, 4);

const Hard_Algorithm = new Effect_Cards("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const Unhandled_Promise_Rejection = new Effect_Cards("Unhandled Promise Rejection", 1, "	reduce target's resilience by 2", "resilience", -2);
const Pair_Programming = new Effect_Cards("Pair Programming", 3, "	increase target's power by 2", "power", 2);
Hard_Algorithm.play(Red_Belt_Ninja);
Unhandled_Promise_Rejection.play(Red_Belt_Ninja);
Pair_Programming.play(Red_Belt_Ninja);
Red_Belt_Ninja.attack(Black_Belt_Ninja);
