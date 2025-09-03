const call_btn = document.getElementsByClassName('call-button-class')
for (let elements of call_btn) {
    elements.addEventListener('click', function () {
        const coin = document.getElementById('coin-box');
        let newCoin = parseInt(coin.innerText);
        if (newCoin >= 20) {
            newCoin = newCoin - 20;
            coin.innerText = newCoin.toString();
        }
    })

    elements.addEventListener('click', function () {
        let his_cart = document.createElement('div');
        let cart = this.parentElement.parentElement;
        let his_sec_title = cart.querySelector(".title");
        let his_sec_desc = cart.querySelector('.number');
        let his_cart_h1 = document.createElement('h1');
        his_cart_h1.innerText = his_sec_title.innerText;
        let his_cart_h2 = document.createElement('h1');
        his_cart_h2.innerText = his_sec_desc.innerText;
        his_cart.append(his_cart_h1);
        his_cart.append(his_cart_h2);
        let his_section = document.getElementById('History-section-id')
        his_section.append(his_cart);
        const his_cart_time = document.createElement('h1');
        his_cart_time.innerText = new Date().toLocaleTimeString();
        his_section.append(his_cart_time);
        let parent_cart_div = document.createElement('div');
        parent_cart_div.append(his_cart);
        parent_cart_div.append(his_cart_time);
        his_section.append(parent_cart_div);
        parent_cart_div.classList.add('history-section');
        his_cart_h1.classList.add('service-name');
        his_cart_h2.classList.add('service-number');
    })
}



const heart_btn = document.getElementsByClassName('heart-btn');
const heart_cnt = document.getElementById('heart-cnt');
for(let element of heart_btn){
    element.addEventListener('click',function(){
        let new_cnt = parseInt(heart_cnt.innerText);
        new_cnt += 1;
        heart_cnt.innerText = new_cnt.toString(); 
    })
}



const his_sec = document.getElementById('History-section-id');
const clear_btn = document.getElementById('clear-btn');
clear_btn.addEventListener('click',function(){
    const removeElements = his_sec.querySelector('.history-section');
    removeElements.remove();
    
})






