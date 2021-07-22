const foodMenu = document.querySelector('form.food');
const drinkMenu = document.querySelector('form.drink');
const dessertMenu = document.querySelector('form.dessert');

foodMenu.addEventListener('change',updateFood);
drinkMenu.addEventListener('change',updateDrink);
dessertMenu.addEventListener('change',updateDessert);

const order = {
    food: [],
    drink: [],
    dessert: [],
}
let closedOrder = false;

function updateFood(e){
    order.food = [e.target.id,Number(e.target.value)];
    if(Object.values(order).filter(i => i.length===2).length === 3){
        closedOrder = true
    }
}
function updateDrink(e){
    order.drink = [e.target.id,Number(e.target.value)];
    if(Object.values(order).filter(i => i.length===2).length === 3){
        closedOrder = true
    }
}
function updateDessert(e){
    order.dessert = [e.target.id,Number(e.target.value)];
    if(Object.values(order).filter(i => i.length===2).length === 3){
        closedOrder = true
    }
}

function sendOrder (){
    let total = 0;
    if(closedOrder){
        total = order.food[1]+order.drink[1]+order.dessert[1]
    }
}

