function configureListeners() {
    let images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        document.getElementById(images[i].id).addEventListener('mouseenter', addOpacity, false);
        document.getElementById(images[i].id).addEventListener('mouseleave', removeOpacity, false);
    }
}

function addOpacity(e) {
    if (!this.classList.contains('dim')) {
        this.classList.add('dim');
    }
    putProductInfo(this.id);
}

function removeOpacity(e) {
    if (this.classList.contains('dim')) {
        this.classList.remove('dim');
    }
    putProductInfo('');
}

let ProductInfo = {
    pn1: {price: '$19.99', color: 'Lime Green'},
    pn2: {price: '$12.99', color: 'Medium Brown'},
    pn3: {price: '$11.99', color: 'Royal Blue'},
    pn4: {price: '$14.99', color: 'Bright Red'},
    pn5: {price:  '$9.99', color: 'Solid White'},
    pn6: {price: '$15.99', color: 'Solid Black'},
    pn7: {price:  '$8.99', color: 'Medium Blue'},
    pn8: {price: '$16.99', color: 'Light Purple'},
    pn9: {price: '$17.99', color: 'Bright Yellow'},
    '': {price: '', color: ''}
}

function putProductInfo(partNumber) {
    document.getElementById('ppg').textContent   = ProductInfo[partNumber].price;
    document.getElementById('color').textContent = ProductInfo[partNumber].color;
}
