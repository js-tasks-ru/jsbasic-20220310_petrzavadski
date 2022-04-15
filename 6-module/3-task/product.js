import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {

    this.product = product;
    this.elem = this.render(); 


  }

render(){

const table = createElement(`<div class="card">
    <div class="card__top">
         <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
        <span class="card__price">€${this.product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${this.product.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
</div>`);


const btn = table.querySelector(".card__button");

btn.addEventListener("click", ()=>{

const press =  new CustomEvent("product-add", { // имя события должно быть именно "product-add"
    detail: this.product.id, // Уникальный идентификатора товара из объекта товара
    bubbles: true // это событие всплывает - это понадобится в дальнейшем
});

btn.dispatchEvent(press);

});

return table;

}

}


