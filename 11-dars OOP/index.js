const cars = {
    color : 'white',
    isBuy: false,
    isArmor: function(){
        console.log('Armor does not');
    }
}

const nexia = Object.create(cars)
console.log(cars.color);