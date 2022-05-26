
export const initialStates = {
  favs: [],
  cart: [],
};


export const AppReducer = (state, action) => {

  const checkTwice = (arrName, elementID) => {
    let flag = false;
    state[`${arrName}`].forEach(item => {
      if(item.id === elementID) flag = true;
    });
    return flag;
  }

  switch (action.type) {
    case "initValues" : {
        return action.value;
    }

    case "AddToFavs": {

      if(!checkTwice("favs", action.id)) {
        return {
          ...state,
          favs: [
            ...state.favs,
            {
              id: action.id,
              img: action.img,
              title: action.title,
              price: action.price,
            },
          ],
        };
      }
    }
    case "AddToCart": {
      if(!checkTwice("cart", action.id)) {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              id: action.id,
              img: action.img,
              title: action.title,
              price: action.price,
            },
          ],
        };
      }
    }
    case "RemoveFromFavs": {
      let newArr = state.favs.filter((item) => !(item.id == action.id));
      return { ...state, favs: newArr };
    }
    case "RemoveFromCart": {
      let newArr = state.cart.filter((item) => !(item.id === action.id));
      return { ...state, cart: newArr };
    }
  }
};
