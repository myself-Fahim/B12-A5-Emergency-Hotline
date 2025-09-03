console.log('hello')

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

    elements.addEventListener('click', function(){

        let his_cart = document.createElement('div');
        let his_cart_h1 = document.createElement('h1');
        his_cart_h1.innerText=document.getElementById('his_title-id').innerText;
        let his_cart_h2 = document.createElement('h1');
        his_cart_h2.innerText = document.getElementById('his-desc-id').innerText;
        his_cart.append(his_cart_h1);
        his_cart.append(his_cart_h2);
        let his_section=document.getElementById('History-section-id')
        his_section.append(his_cart);
        const his_cart_time = document.createElement('h1');
        his_cart_time.innerText = '11:36:58 AM';
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

