export const initialStates = {
  favs: [],
  cart: [],
};

export const AppReducer = (state, action) => {

  const checkTwice = (elementID) => {
    let flag = false;
    state.favs.forEach(item => {
      if(item.id === elementID) flag = true;
    });
    return flag;
  }

  switch (action.type) {
    case "initValues" : {
        return action.value;
    }

    case "AddToFavs": {
      if(!checkTwice(action.id)) {
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
      const newArr = [];
      if(state.cart?.length > 0) {
        let flag = true;
        state.cart.forEach(cartItem => {
          if(cartItem.id === action.id) {
            state.cart.map(cartItem => {
              (cartItem.id === action.id) ? {...cartItem, count: cartItem.count + 1} : cartItem;
            });
            flag = false;
            return {
              ...state,
              cart: [...state.cart]
            }
          }
        });
        if(flag) {
          newArr = [...state.cart, {id:action.id, img: action.img, title: action.title, price: action.price, count: 1}];
          return {
            ...state,
            cart: newArr
          }
        }
      }
      else {
        newArr = [{id:action.id, img: action.img, title: action.title, price: action.price, count: 1 }];
        return {
          ...state,
          cart: newArr
        }
      }
    }

    case "increase": {
      const newArr = state.cart.map(cartItem => cartItem.id === action.id ? {...cartItem, count: cartItem.count + 1} : cartItem);
      return {
        ...state,
        cart : newArr
      }
    }

    case "decrease": {
      const newArr = state.cart.map(cartItem => cartItem.id === action.id ? {...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : cartItem.count} : cartItem);
      return {...state, cart: newArr};
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
