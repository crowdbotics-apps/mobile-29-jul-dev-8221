import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CopyOfEmailAuth19477Reducer from '../features/CopyOfEmailAuth19477/redux/reducers';
import EmailAuth19476Reducer from '../features/EmailAuth19476/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CopyOfEmailAuth19477: CopyOfEmailAuth19477Reducer,
EmailAuth19476: EmailAuth19476Reducer,

});