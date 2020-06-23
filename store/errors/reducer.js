import {
	ERRORS_CLEAN,
	ERRORS_ADD,
} from './constants';

const initialState = {
	errorExists:false,
	list:{},
};

const errorsReducers = (state = initialState, action = {}) => {
	switch (action.type) {
	case ERRORS_CLEAN:
		return { ...state, ...initialState };
	
	case ERRORS_ADD:
		return { 
			...state, 
			errorExists:true,
			list:{ ...state.list, ...action.payload }
		};	
	default: return state;
	}
};

export default{
	errors : errorsReducers,
};
