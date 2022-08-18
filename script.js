const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = () => {
  document.querySelectorAll('.cart__item').forEach((item) => {
    item.addEventListener('click', () => {
        item.remove();
    });
});
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

async function getProducts() {
  const { results } = await fetchProducts('computador');
  results.forEach((produto) => {
    const { id: sku, title: name, thumbnail: image } = produto;
    const productInfo = { sku, name, image };
    document.querySelector('.items').appendChild(createProductItemElement(productInfo));
  });
}

getProducts();

window.onload = async () => {
  document.querySelectorAll('.item__add').forEach((item, index) => {
    item.addEventListener('click', async () => {
      const id = document.querySelectorAll('.item')[index].firstChild.innerText;
      const data = await fetchItem(id);
      const { id: sku, title: name, price: salePrice } = data;
      const objProduct = { sku, name, salePrice };
      document.querySelector('.cart__items').appendChild(createCartItemElement(objProduct));
      cartItemClickListener();
    });
  });
};
