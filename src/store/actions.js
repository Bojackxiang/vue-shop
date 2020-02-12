export default {
  saveUserName(context, username){
    context.commit('saveUserName', username) // note: step 2 => 这里传给mutation
  },
  cartCount(context, cartNum){
    context.commit('cartCount', cartNum)
  }
}