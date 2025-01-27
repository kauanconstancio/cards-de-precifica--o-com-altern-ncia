let preco1 = document.getElementById('price1');
let preco2 = document.getElementById('price2');
let preco3 = document.getElementById('price3');
let switchBtn = document.getElementById('switchBtn');

switchBtn.addEventListener('click', ()=>{
    const newPrice1 = price1.innerHTML === '<span>$</span>19.99' ? '<span>$</span>239.88' : '<span>$</span>19.99';
    price1.innerHTML = newPrice1;
    
    const newPrice2 = price2.innerHTML === '<span>$</span>24.99' ? '<span>$</span>299.88' : '<span>$</span>24.99';
    price2.innerHTML = newPrice2;

    const newPrice3 = price3.innerHTML === '<span>$</span>39.99' ? '<span>$</span>479.88' : '<span>$</span>39.99';
    price3.innerHTML = newPrice3;
})