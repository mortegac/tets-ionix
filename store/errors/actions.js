import { ERRORS_CLEAN, ERRORS_ADD } from './constants';


const errorsClean = payload => ({
	type: ERRORS_CLEAN,
	payload
});

export const errorsAdd = (payload) => {
	return async (dispatch) => {
		try{
			dispatch({ type: ERRORS_ADD, ...payload });
				      
		}catch(e){
			
			}
		};
};


export default{
	errorsClean,
	errorsAdd
};