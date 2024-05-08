//personagem padrão

class Chareacter{
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense= 0;

constructor (name) {
  this.name = name;
}

get life(){
  return this. _life;
   }
set life(newLife){
  this._life = newLife < 0 ? 0 : newLife;
}

}

class Knight extends Chareacter{
  constructor(name){
      super(name);
      this.life = 100;
      this.attack = 10;
      this.defender = 8;
      this.maxLife = this.life
  }
}

class Sorcerer extends Chareacter{
  constructor(name){
      super(name);
      this.life = 80;
      this.attack = 15;
      this.defender = 3;
      this.maxLife = this.life
  }
}

class LittleMonster extends Chareacter{
  constructor(){
       super("Little Monster");
       this.life = 50;
       this.attack = 3;
       this.defense = 4;
       this.maxLife = this.life;

  }
}

class Stage{
    constructor(fighter1,fighter2,fighter1El,fighter2El){
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1El = fighter1El;
    this.fighter2El = fighter2El;
    }
  start(){
    this.update();
  }
  update(){
    
    // Lutador 1 
    this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} --- ${this.fighter1.life} HP`; 
    let f1pct = (this.fighter1.life / this.fighter1.maxLife) * 100 ;
    this.fighter1El.querySelector('.bar').style.width = `${f1pct}%`;

    
    // Lutador 2 
this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} --- ${this.fighter2.life} HP`;
    let f2pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
    this.fighter2El.querySelector('.bar').style.width = `${f2pct}%`;
  }
     


doAttack(attacking, attacked) { 
   if(attacking.life <=0 || attacked.life <= 0){
       console.log('O cara já morreu o cabeção');
       return;
   }
   
   let attackFactor = (Math.random() * 2).toFixed(2);
   
   
   this.update();

};

}