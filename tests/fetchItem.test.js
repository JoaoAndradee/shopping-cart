require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const fetchSimulator = require('../mocks/fetchSimulator');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Verifica se é uma fetchItem é uma função', () => {
    const actual = typeof fetchItem;
    expect(actual).toBe('function');
  })

  it('Testa se fetch é chamado ao executar a funcão fetchItem("MLB1615760527")', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })

  it('Testa se ao chamar a funcão com argumento MLB1615760527 a função fetch utiliza o endpoint certo', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527')
  })

  it('Testa se a funcao fetchItem("MLB1615760527") é uma estrutura de dados semelhante ao objeto item', async () => {
    const actual = await fetchItem('MLB1615760527');
    expect(actual).toBe(item);
  })

  it('Verifica se ao chamar a função fetchItem sem argumento é retornado o erro "You must provide an URL"', async () => {
    try {
      await fetchItem();
    } catch (err) {
      expect(err).toEqual(new Error('You must provide an url'))
    }
  }
  )
});
