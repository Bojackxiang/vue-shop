/**
 * 导出的方法
 */

export default {
  saveUserName(state, username){
    // note: step 3 这里改变username
    state.username = username
  },

  cartCount(state, cartCount){
    state.cartCount = cartCount;
  },

  saveCartCount(state,){
    state.cartCount += 1
  },

  clearUserInfo(state){
    state.username = '';
    state.cartCount = 0;
  }
}