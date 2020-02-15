const getCart = (axios, store) => {
  axios.get("/carts/products/sum").then(res => {
    store.dispatch("cartCount", res);
  });
};

const getUser = (axios, store) => {
  axios.get("/user/").then(resp => {
    /**
     * 如果返回的值是undefined => 意味着user没有login
     */
    if (!(resp === undefined)) {
      store.dispatch("saveUserName", resp.username); // note: step 1 => 这里传给actions
    }
  });
};

export default {
  getCart,
  getUser
};
