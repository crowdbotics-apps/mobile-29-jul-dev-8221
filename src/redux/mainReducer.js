import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CopyOfEmailAuth19481Reducer from '../features/CopyOfEmailAuth19481/redux/reducers';
import CopyOfEmailAuth19480Reducer from '../features/CopyOfEmailAuth19480/redux/reducers';
import CopyOfEmailAuth19479Reducer from '../features/CopyOfEmailAuth19479/redux/reducers';
import CopyOfEmailAuth19478Reducer from '../features/CopyOfEmailAuth19478/redux/reducers';
import CopyOfEmailAuth19477Reducer from '../features/CopyOfEmailAuth19477/redux/reducers';
import EmailAuth19476Reducer from '../features/EmailAuth19476/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CopyOfEmailAuth19481: CopyOfEmailAuth19481Reducer,
CopyOfEmailAuth19480: CopyOfEmailAuth19480Reducer,
CopyOfEmailAuth19479: CopyOfEmailAuth19479Reducer,
CopyOfEmailAuth19478: CopyOfEmailAuth19478Reducer,
CopyOfEmailAuth19477: CopyOfEmailAuth19477Reducer,
EmailAuth19476: EmailAuth19476Reducer,

});