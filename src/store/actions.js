export default {
  saveUserName(context, username){
    context.commit('saveUserName', username) // note: step 2 => 这里传给mutation
  },
  cartCount(context, cartNum){
    context.commit('cartCount', cartNum)
  },

  saveCartCount(context, newAddedNum){
    console.log(newAddedNum);
    context.commit('saveCartCount', newAddedNum)
  },

  // 清空vuex
  clearUserInfo(context, ){
    context.commit('clearUserInfo')
  }


}