const inventory = {
    apple: { price: 50, qty: 0},
    cherry: { price: 40, qty: 0},
    strawberry: { price: 60, qty:0}
};

function sum() {
    let total = 0;
    const keys = Object.keys(inventory);
    keys.forEach(key=> {
        total += inventory[key].price * inventory[key].qty;
    });
    return total;
}
function calculate(box) {
let qty=0; 

if(box.value.length > 0) {
    qty = parseInt(box.value);
}
inventory[box.id].qty = qty;

const total= sum();
return `$${total}.00`;
}
window.addEventListener('DOMContentLoaded', () => {
    const totalContainer = document.getElementById('total-container');

    const inpuBoxes = document.querySelectorAll('#calculator input');

    inpuBoxes.forEach(box => {
         
        box.addEventListener('change', () => {
            totalContainer.textContent = calculate(box);
        });

        box.addEventListener('keyup', () => {
            totalContainer.textContent = calculate(box);
        });
        
    });
});
