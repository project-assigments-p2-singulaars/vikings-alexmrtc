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
        this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);

        if(this.saxonArmy[0].health <= 0){
            this.saxonArmy.pop()
            return "A Saxon has died in combat"
        }
    }

    saxonAttack() {
        this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);

        if(this.vikingArmy[0].health <= 0){
            this.vikingArmy.pop();
        } else {
            return `${this.vikingArmy[0].name} has received ${this.saxonArmy[0].strength} points of damage`;
        }
    }

    showStatus () {
        if(this.saxonArmy.length <= 0){
            return "Vikings have won the war of the century!"
        }
    }
}