const saveCartItems = (arg) => {
  return localStorage.setItem('cartItems', arg);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
