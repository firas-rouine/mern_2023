


class Ninja{
    constructor(name,health,speed=3,strength=3){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;
    }
    sayName(){
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
        return this
    }
}
class Sensei extends Ninja{
    constructor(name,wisdom=10){
    super(name,200,10,10);
    this.wisdom=wisdom;
    
    }
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        return this;
      }
    }






const ninja1 = new Ninja("Hyabusa",100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


const superSensei = new Sensei("Master Splinter");
superSensei.sayName();
superSensei.showStats();
superSensei.drinkSake();
superSensei.speakWisdom();