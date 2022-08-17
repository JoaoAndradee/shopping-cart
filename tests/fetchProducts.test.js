require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const fetchSimulator = require('../mocks/fetchSimulator');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Verifica se fetchProducts é uma função', () => {
    const actual = typeof fetchProducts;
    expect(actual).toBe('function');
  })

  it('Verifica se fetch é chamado quando passado "computador" como argumento', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })

  it('Testa se ao chamar a funcao fetchProducts("computador") a funcão fetch utiliza o endpoint certo', async () => {
    const data = await fetchProducts('computador');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  })

  it('Testa se o objeto retornado de fetchProducts("computador") é uma estrutura de dados a computadorSearch', async () => {
    const search = await fetchProducts('computador');
    expect(search).toEqual(computadorSearch);
  })

  it('Testa se retorna um erro ao chamar a função fetchProducts() sem argumentos', async () => {
    try {
      await fetchProducts();
    } catch (err) {
      expect(err).toEqual(new Error('You must provide an url'));
    }
  })
});
