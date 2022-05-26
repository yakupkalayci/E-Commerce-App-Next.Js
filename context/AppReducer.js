export const initialStates = {
  favs: [],
  cart: [],
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "initValues" : {
        return action.value;
    }
    case "AddToFavs": {
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
    case "AddToCart": {
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
