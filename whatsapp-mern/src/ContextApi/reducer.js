
export const initialState = {
    user: null,
    room: "5f5a0fee4e106b0a7cb5419c",
    roomVar: {
      name: "Default Room",
      creator: "Nilesh Jain"
    }
  };
  
  export const actionTypes = {
    SET_USER: "SET_USER",
    SET_ROOM: "SET_ROOM",
    SET_ROOMVAR:"SET_ROOMVAR"
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_USER:
        return { ...state, user: action.user };
      case actionTypes.SET_ROOM:
        return { ...state, room: action.room };
      case actionTypes.SET_ROOMVAR:
        return { ...state, roomVar: action.roomVar };
      default:
        return state;
    }
  };