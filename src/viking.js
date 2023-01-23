// Soldier
class Soldier {
    constructor(health, strength) {
        this.health=health
        this.strength=strength
    }

    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health-=damage
    }
}

// Viking
class Viking extends Soldier{
    constructor (name, health, strength){
        super (health, strength)
        this.name=name;

    }
    receiveDamage(damage){
        this.health-=damage
        if(this.health>0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}
// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health-=damage
        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }  
}

// War
class War {
    constructor () {
    this.vikingArmy=[];
    this.saxonArmy=[];
}
    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        const randomIndexForSaxons = Math.floor(Math.random()*this.saxonArmy.length)
        const randomIndexForVikings = Math.floor(Math.random()*this.vikingArmy.length)
        const randomSaxon =this.saxonArmy[randomIndexForSaxons];
        const randomViking =this.vikingArmy[randomIndexForVikings];
        const damageRecieved =randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health<=0){
          this.saxonArmy.splice(randomIndexForSaxons,1)
        }
        return damageRecieved
        
    }
    saxonAttack(){
        const randomIndexForSaxons = Math.floor(Math.random()*this.saxonArmy.length)
        const randomIndexForVikings = Math.floor(Math.random()*this.vikingArmy.length)
        const randomSaxon =this.saxonArmy[randomIndexForSaxons];
        const randomViking =this.vikingArmy[randomIndexForVikings];
        const damageRecieved =randomViking.receiveDamage(randomSaxon.strength);
        
        if (randomViking.health<=0){
          this.vikingArmy.splice(randomIndexForVikings,1)
        }
        return damageRecieved
    }
    showStatus(){
        if (!this.saxonArmy.length){
            return "Vikings have won the war of the century!"
        }else if (!this.vikingArmy.length){
                return "Saxons have fought for their lives and survived another day..."
            } else {
                return "Vikings and Saxons are still in the thick of battle."
        }
    }
    
}


