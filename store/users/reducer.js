import {
  GET_WEATHER,
  SET_WEATHER
} from './constants'
  
  const initialState={
    dates: {
      dayOne:{ 
        dateName:'', 
        dateNameEn:'', 
        dateNumber:'', 
        temperatureMin:'',
        temperatureMax:'',
        icons:{}, 
        texts:{}, 
      },
      dayTwo:{  
        dateName:'', 
        dateNameEn:'', 
        dateNumber:'', 
        temperatureMin:'',
        temperatureMax:'',
        icons:{}, 
        texts:{}, 
      },
      dayTree: {
        dateName:'', 
        dateNameEn:'', 
        dateNumber:'', 
        temperatureMin:'',
        temperatureMax:'',
        icons:{}, 
        texts:{}, 
      },   
  }
};
  
  export const weatherReducers = (state = initialState, action) => {
    switch (action.type) {
    
      case GET_WEATHER:
        return { 
          ...state, 
        };
    
      case SET_WEATHER:
        return { 
          ...state,  
          dates: {...action.payload},  
      };  
    
      default:
        return state;
    }
  };
  
  export default{
    weather: weatherReducers,
  };
  