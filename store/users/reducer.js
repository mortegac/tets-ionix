import {
  GET_USERS,
  SET_USERS
} from './constants'
  
  const initialState={"items": []};
  
  export const usersReducers = (state = initialState, action) => {
    switch (action.type) {
    
      case GET_USERS:
        return { 
          ...state, 
        };
    
      case SET_USERS:
        return { 
          ...state,  
          items: {...action.payload},  
      };  
    
      default:
        return state;
    }
  };
  
  export default{
    users: usersReducers,
  };
  