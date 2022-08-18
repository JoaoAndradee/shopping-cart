const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Verifica se localStorage é chamado quando executado a função saveCartItems("<ol><li>Item</li></ol>")', () => {
    const actual = saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  })
  it('Verifica se ao executar a função saveCartItems("<ol><li>Item</li></ol>"), localStorage é chamado com o primeiro parametro sendo cartItems e o segundo como parametro da função', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  })
});
