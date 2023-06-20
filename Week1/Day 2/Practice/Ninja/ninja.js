


class Ninja{
    constructor(name,health){
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3;
    }
    sayName() {
        console.log(`the Ninja name is ${this.name} `);
        return this
    
    }
    showStats(){
        console.log(`the Ninja name is ${this.name},her health is ${this.health},her speed is ${this.speed},her strength is ${this.strength} `);
        return this
    }
    drinkSake(){
        this.health+=10;
        console.log(`${this.name} has  ${this.health} health`);
    }
}






const ninja1 = new Ninja("Hyabusa",100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
