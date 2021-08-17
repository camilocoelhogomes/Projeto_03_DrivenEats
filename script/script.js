const foodMenu = document.querySelector('form.food');
const drinkMenu = document.querySelector('form.drink');
const dessertMenu = document.querySelector('form.dessert');

foodMenu.addEventListener('change', updateFood);
drinkMenu.addEventListener('change', updateDrink);
dessertMenu.addEventListener('change', updateDessert);

const order = {
    food: [],
    drink: [],
    dessert: [],
}
let person;
let address;
function updateFood(e) {
    order.food = [e.target.id, Number(e.target.value).toFixed(2)];
    removeOlderBorder('food');
    addSelectedBorder(e);
    addItenConfirmScreen('food');
    buttonCloseOrderAvaible();
}

function updateDrink(e) {
    order.drink = [e.target.id, Number(e.target.value).toFixed(2)];
    removeOlderBorder('drink');
    addSelectedBorder(e);
    addItenConfirmScreen('drink');
    buttonCloseOrderAvaible();
}

function updateDessert(e) {
    order.dessert = [e.target.id, Number(e.target.value).toFixed(2)];
    removeOlderBorder('dessert');
    addSelectedBorder(e);
    addItenConfirmScreen('dessert');
    buttonCloseOrderAvaible();
}

function confirmOrder() {
    person = prompt('Qual o seu nome?');
    address = prompt('Qual o seu endereço?');
    creatMensage();
    document.querySelector('.order-confirm-background').classList.remove('hided');
}
function cancelOrder() {
    document.querySelector('.order-confirm-background').classList.add('hided');
}
function removeOlderBorder(menu) {
    let olderSelected = document.querySelector(`.${menu} .green-border`);
    if (olderSelected) {
        olderSelected = olderSelected.classList.remove('green-border');
    }
}

function addSelectedBorder(e) {
    let selected = document.querySelector(`.${e.target.id}`);
    selected.classList.add('green-border');
}

function addItenConfirmScreen(menu) {
    document.querySelector(`.${menu}.description`).innerHTML = order[`${menu}`][0];
    document.querySelector(`.${menu}.price`).innerHTML = `R$ ${order[menu][1]}`;
}

function buttonCloseOrderAvaible() {
    if (!isNaN(order.food[1]) && !isNaN(order.dessert[1]) && !isNaN(order.drink[1])) {
        document.querySelector('.button-close-order').classList.remove('hided');
        document.querySelector('.button-close-order-disabled').classList.add('hided');
    }
}

function creatMensage() {
    const total = Number(order.food[1]) + Number(order.drink[1]) + Number(order.dessert[1]);
    document.querySelector('.total.price').innerHTML = `R$ ${Number(total).toFixed(2)}`;
    const mensage =
        `Olá, gostaria de fazer o pedido:\n
            - Prato: ${order.food[0]}\n
            - Bebida: ${order.drink[0]}\n
            - Sobremesa: ${order.dessert[0]}\n
            Total: R$ ${Number(total).toFixed(2)}
            \n\n
            Nome: ${person}\n
            Endereço: ${address}
        `
    document.querySelector('a.send-order-link').href = `https://wa.me/5531982418649?text=${encodeURIComponent(mensage)}`
}