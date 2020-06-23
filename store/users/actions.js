import {GET_USERS, SET_USERS} from './constants';

import { errorsAdd } from '../errors/actions';
import services from '../../services/ionix.services';




export const getUsers = (payload) => {

	return async (dispatch) => {
		try{
				
			console.log(' -+ payload -+', payload);
			const response = await services.getDNI(`search?rut=${payload.dni}`);
			
		
			if( typeof(response) !== 'undefined' ){

				const newPayload = {
					payload: {...response.data.result.items }
				}

				dispatch({ type: SET_USERS, ...newPayload });

			}
				
			
      
    }catch(e){
			dispatch(errorsAdd({error:e, module:'users'}));
		}
	};
};


export const setUsers = payload => ({
	type: SET_USERS,
	payload
});

export default {
  getUsers,
  setUsers
};
