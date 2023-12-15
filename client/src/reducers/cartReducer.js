export const addToCartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const allreadyexist = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (allreadyexist) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case "INITIALIZE_CART":
      return {
        ...state,
        cartItems: action.payload,
      };

    case "CHANGE_CART_ITEM_QUANTITY":
      return {
        ...state,
        cartItems: action.payload,
      };

      case 'DELETE_FROM_CART': return {
        ...state,
        cartItems: state.cartItems.filter(item => {return item._id !==action.payload._id})
      }

    default:
      return state;
  }
};
