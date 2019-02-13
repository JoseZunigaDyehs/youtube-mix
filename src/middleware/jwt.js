// import { refreshToken } from '../actions/index';
// import { isValidToken } from '../utilities/utilities';

// export const jwt = ({ getState, dispatch }) => next => action => {
//     const { currentUser } = getState(),
//     timer = currentUser.get('timer');
    
//     if(!isValidToken(timer) && typeof action === 'function'){
//         debugger
//     refreshToken(dispatch, getState()).then((response) => {
//       if(response == 200)
//         next(action);
//     });
//   }

//   next(action);
// }