import { Saxon } from "./Saxon";
import { Viking } from "./Viking";

export class War {
    vikingArmy:Viking[] = [];
    saxonArmy:Saxon[] = [];

    addViking(viking: Viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon:Saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        let randomViking = Math.floor(Math.random()*this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        
        this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);

        if(this.saxonArmy[randomSaxon].health <= 0){
            this.saxonArmy.pop()
            return "A Saxon has died in combat"
        }
    }

    saxonAttack() {
        let randomViking = Math.floor(Math.random()*this.vikingArmy.length);
        let randomSaxon = Math.floor(Math.random()*this.saxonArmy.length);

        this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);

        if(this.vikingArmy[randomViking].health <= 0){
            this.vikingArmy.pop();
        } else {
            return `${this.vikingArmy[randomViking].name} has received ${this.saxonArmy[randomSaxon].strength} points of damage`;
        }
    }

    showStatus () {
        if(this.saxonArmy.length <= 0){
            return "Vikings have won the war of the century!"
        }
    }
}