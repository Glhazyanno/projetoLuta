let char = new Knight('Linhares');

let monster = new LittleMonster;


let stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')


);

stage.start();