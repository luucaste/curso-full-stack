const setPrice = () => {
    const basicPrice = document.getElementById('basicPrice');
    const intermediatePrice = document.getElementById('intermediatePrice');
    const premiumPrice = document.getElementById('premiumPrice');
    const submitBtn = document.getElementById('submitBtn');

    const containerPrice = document.getElementById('paymentOptionsContainer');
    let price = document.createElement('h1');
    price.classList.add('priceValue');

    basicPrice.addEventListener('click', function(){
        price.innerText = '$500';
        containerPrice.append(price);
    });

    intermediatePrice.addEventListener('click', function(){
        price.innerText = '$1000';
        containerPrice.append(price);
    });

    premiumPrice.addEventListener('click', function(){
        price.innerText = '$1500';
        containerPrice.append(price);
    });

    submitBtn.addEventListener('click', function(){
        const getSubmitSuccessContainer = document.getElementById('submitSuccessContainer');
        getSubmitSuccessContainer.style.display = 'block';

        let submitSuccessBox = document.createElement('div');
        submitSuccessBox.classList.add('submitSuccessBox');

        const submitSuccessText = document.createElement('h1');
        submitSuccessText.innerText = 'Gracias por enviar tu solicitud!\nPronto nos estaremos contactando con vos';
        
        const submitSuccessClose = document.createElement('a');
        submitSuccessClose.classList.add('submitSuccessClose');
        submitSuccessClose.id = 'submitSuccessClose';
        submitSuccessClose.innerText = 'X';

        
        getSubmitSuccessContainer.append(submitSuccessBox);
        submitSuccessBox.append(submitSuccessClose);
        submitSuccessBox.append(submitSuccessText);

        submitSuccessClose.addEventListener('click',function(){
            getSubmitSuccessContainer.style.display = 'none';
             submitBtn.style.display = 'none';
        })
    })
}
setPrice();