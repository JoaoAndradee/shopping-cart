require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Verifica se fetchProducts é uma função', () => {
    const actual = typeof fetchProducts;
    const expected = 'function'
    expect(actual).toBe(expected);
  })

  it('Verifica se fetch é chamado quando passado "computador" como argumento', () => {
    {
      const options = 'computador'
      const actual = fetchProducts(options);
      expect(actual).toBeDefined();
    }

    {
      const options = 'computador'
      const actual = fetchProducts(options);
      actual(options);
      expect(fetch).toBeCalled();    
    }
  })

  it('Testa se ao chamar a funcao fetchProducts("computador") a funcão fetch utiliza o endpoint certo', () => {
    const options = 'computador';
    const actual = fetchProducts(options);
    expect(actual).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  })

  it('Testa se o objeto retornado de fetchProducts("computador") é uma estrutura de dados a computadorSearch', () => {
    const options = 'computador';
    const actual = fetchProducts(options);
    expect(actual).objectContaining(computadorSearch());
  })

  it('Testa se retorna um erro ao chamar a função fetchProducts() sem argumentos', () => {
    const actual = fetchProducts();
    expect(actual).toThrowError('You must provide an url');
  })
});
