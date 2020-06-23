import {GET_WEATHER, SET_WEATHER} from './constants';

import { loadingStart, loadingFinished } from '../loading/actions';
import { errorsAdd } from '../errors/actions';
import services from '../../services/weather.services';

// export const getWeather = payload => ({
// 	type: GET_WEATHER,
// 	payload
// });




export const getWeather = (payload) => {

	return async (dispatch) => {
		try{
			// dispatch(loadingStart('weather'));
		
			const response = await services.getWeatherList();
			
			// console.log(' -+ response -+', await response);
		
			if( typeof(response) !== 'undefined' ){

				const newPayload = {
					payload: {...response }
				}

				// Object.entries(response).forEach(doc => {
					
				// 	console.log('<response>', response);

				// 	// data.push({
				// 	//   id: doc[0],
				// 	//   ...doc[1],
				// 	//   //date: doc[1].hasOwnProperty('date') ? new Date(doc[1].date['seconds']*1000): new Date()
				// 	// });
			  
				// })


				dispatch({ type: SET_WEATHER, ...newPayload });

			}
				
				
			// 	const newData = _.mapKeys(response, 'id');

			// 	console.log('getPost - newData: ', newData);
			// 	const newPayload = {
			// 		payload:{ ...newData }
			// 	}
			// 	dispatch({ type: POST_GET, ...newPayload });


		//   }else{
		//     const dataPayload = { payload:{error:'El nombre de usuario o contraseña son incorrectos.'}};
		//     dispatch({ type: LOGIN_USER_FAILED, ...dataPayload });
			
			// dispatch(errorsAdd({error:'no llega la data', module:'weather'}));

			// }

      

      	// dispatch(loadingFinished('weather'));
      
    }catch(e){
			dispatch(errorsAdd({error:e, module:'weather'}));
			// dispatch(loadingFinished('weather'));
		}
	};
};


export const setWeather = payload => ({
	type: SET_WEATHER,
	payload
});

export default {
  getWeather,
  setWeather
};
