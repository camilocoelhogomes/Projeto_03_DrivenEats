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
let mensage = '';

function updateFood(e){
    order.food = [e.target.id,Number(e.target.value)];
    creatMensage();
}
function updateDrink(e){
    order.drink = [e.target.id,Number(e.target.value)];
    creatMensage();
}
function updateDessert(e){
    order.dessert = [e.target.id,Number(e.target.value)];
    creatMensage();
}
function creatMensage(){
    if(!isNaN(order.food[1]) && !isNaN(order.dessert[1]) && !isNaN(order.drink[1])){
        document.querySelector('button').classList.remove('hided');
        document.querySelector('.button-close-order-disabled').classList.add('hided');
        const total = order.food[1]+order.drink[1]+order.dessert[1]
        mensage = 
            `Olá, gostaria de fazer o pedido:\n
            - Prato: ${order.food[0]}\n
            - Bebida: ${order.drink[0]}\n
            - Sobremesa: ${order.dessert[0]}\n
            Total: R$ ${Number(total).toFixed(2)}
        `
        document.querySelector('a').href = `https://wa.me/5531973158478?text=${encodeURIComponent(mensage)}`
    }
}
function sendOrder (){

}

