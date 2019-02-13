import { APIURL } from "./constants";
// import axios from 'axios';
// import CryptoJS from 'crypto-js';
import { removeSessionStorage } from "../utilities/utilities";
import moment from "moment";

// //LOGIN
// export function refreshToken(dispatch, states){
//   const currentUser = states.currentUser;

//   return new Promise((resolve, reject) => {
//     if(currentUser.get('isFetchingRefresh')){ resolve(200); return false; }
//     dispatch(isFetchingRefreshStart())
//     const request = axios({
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${ currentUser.get('refresh_token') }`,
//         'Content-Type': 'application/json;charset=UTF-8'
//       },
//       url: APIURL + '/refresh',
//       data: {}
//     });

//     return request.then(
//       (response) => {
//         debugger
//         if(response.data.estado.codigoEstado === 200){
//           dispatch(isFetchingRefreshEnd(response.data.data.token, response.data.data.refresh_token, moment().format('YYYY/MM/DD/ HH:mm:ss')))
//           sessionStorage.setItem('token', response.data.data.token);
//           sessionStorage.setItem('refresh_token', response.data.data.refresh_token);
//           sessionStorage.setItem('timer', moment().format('YYYY/MM/DD/ HH:mm:ss'));
//           resolve(200);
//         }else{
//           dispatch(isFetchingRefreshEnd('', ''))
//           removeSessionStorage();
//           dispatch(logout());
//         }
//       },
//       (err) => {
//         dispatch(isFetchingRefreshEnd('', ''))
//         removeSessionStorage();
//         dispatch(logout())
//       }
//     )
//   });
// }

// function isFetchingRefreshStart(){
//   return {
//     type: 'REFRESH_TOKEN_START'
//   }
// }
// function isFetchingRefreshEnd(){
//   return {
//     type: 'REFRESH_TOKEN_END'
//   }
// }

// export function loginUser(data){
//   debugger
//   return function action(dispatch){
//     dispatch(loginUserStart());
//     getToken(data, dispatch).then((response) => {
//       if(response.data.estado.codigoEstado === 200){
//         debugger
//         loginUserData(response.data.data, data, dispatch)
//       }
//     });
//   }
// }

// function getToken(data, dispatch){
//   let wordArray = CryptoJS.enc.Utf8.parse(data.rut);
//   let base64 = CryptoJS.enc.Base64.stringify(wordArray);
//   data.rut = base64;
//   wordArray = CryptoJS.enc.Utf8.parse(data.pass);
//   base64 = CryptoJS.enc.Base64.stringify(wordArray);
//   data.pass = base64;
//   return new Promise((resolve, reject) => {
//     const request = axios({
//       method: 'POST',
//       headers: {
//         'Authorization': `Basic ${ btoa(data.rut + ':' + data.pass) }`,
//         // 'Authorization': `Basic ${ btoa(BTOA) }`,
//         'Content-Type': 'application/json;charset=UTF-8'
//       },
//       url: APIURL + '/token',
//       data: {}
//     });

//     return request.then((response) => {
//       resolve(response);
//       dispatch(getTokenEnd(response.data.data));
//     }).catch((error) => {
//       dispatch(loginUserError(error.response ? error.response.data.estado.glosaEstado : 'Error de conexión, intente nuevamente'));
//     });
//   });
// }

// function loginUserData(tokens, data, dispatch){
//   debugger
//   const request = axios({
//     method: 'POST',
//     headers: {
//       'Authorization': `Bearer ${ tokens.token }`,
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     url: APIURL + '/login',
//     data: {
//       rut: data.rut,
//       pass: data.pass
//     }
//   });

//   return request.then(
//     (response) => {
//       debugger
//       if(response.data.estado.codigoEstado === 200){
//         const timer = moment().format('YYYY/MM/DD/ HH:mm:ss');
//         sessionStorage.setItem('loggIn', JSON.stringify(response.data.data));
//         sessionStorage.setItem('token', tokens.token);
//         sessionStorage.setItem('refresh_token', tokens.refresh_token);
//         sessionStorage.setItem('timer', timer);
//         dispatch(loginUserEnd(response.data.data, timer));
//       }else{
//         debugger
//         dispatch(loginUserError(response.data.estado.glosaEstado ? response.data.estado.glosaEstado : 'Ha ocurrido un error inesperado, intente nuevamente'));
//       }
//     },
//     (err) => {
//       debugger
//       dispatch(loginUserError(err.response ? err.response.data.estado.glosaEstado : 'Error de conexión, intente nuevamente'));
//     }
//   )
// }

// function loginUserStart(){
//   return {
//     type: 'LOGIN_START'
//   }
// }

// function loginUserError(error){
//   return {
//     type: 'LOGIN_ERROR',
//     error
//   }
// }

// function loginUserEnd(userData, timer){
//   return {
//     type: 'LOGIN_USER_END',
//     userData,
//     timer
//   }
// }

// function getTokenEnd(data){
//   return {
//     type: 'GET_TOKEN_END',
//     data
//   }
// }

// export function logout() {
//   return function action(dispatch) {
//     debugger
//     sessionStorage.removeItem("loggIn");
//     sessionStorage.removeItem("token");
//     sessionStorage.removeItem("refresh_token");
//     sessionStorage.removeItem("timer");
//     dispatch({ type: "LOGOUT"});
//   }
// }

// export function recoverPass(data) {
//   return function action(dispatch){
//     dispatch(activeNotification({typeNotification:"success",message:"Se ha enviado el correo"}));
//     setTimeout(() => {
//       dispatch(desactiveNotification());
//     }, 3800);
//     // const request = axios({
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json;charset=UTF-8'
//     //   },
//     //   url: APIURL + '/login',
//     //   data: {
//     //     rut: data.rut,
//     //     pass: data.pass
//     //   }
//     // });

//     // return request.then(
//     //   (response) => {
//     //     debugger
//     //     if(response.data.estado.codigoEstado === 200){
//     //     }else{
//     //       debugger
//     //       dispatch(loginUserError(response.data.estado.glosaEstado ? response.data.estado.glosaEstado : 'Ha ocurrido un error inesperado, intente nuevamente'));
//     //     }
//     //   },
//     //   (err) => {
//     //     debugger
//     //     dispatch(loginUserError(err.response ? err.response.data.estado.glosaEstado : 'Error de conexión, intente nuevamente'));
//     //   }
//     // )

//   }
// }

// function activeNotification(data){
//   return {
//     type: "ACTIVE_NOTIFICATION",
//     typeNotification: data.typeNotification,
//     message: data.message
//   }
// }

// export function desactiveNotification(){
//   return {
//     type: "DESACTIVE_NOTIFICATION"
//   }
// }

export function loadTrackStart(data) {
  return function action(dispatch) {
    dispatch({ type: "LOAD_TRACK_START", data });
  };
}
export function loadTrack(data) {
  return function action(dispatch) {
    dispatch({
      type: "LOAD_TRACK_END",
      data
    });
  };
}
export function setSelected(data) {
  return function action(dispatch) {
    dispatch({
      type: "SET_SELECTED_TRACK",
      data
    });
  };
}
export function setPlaying(data) {
  return function action(dispatch) {
    dispatch({
      type: "SET_PLAYING_TRACK",
      data
    });
  };
}
export function searchYT(data){
  return function action(dispatch){
    dispatch({type:"SEARCH_END",data})
  }
}
export function toggleSearch(){
  return function action(dispatch){
    dispatch({type:"TOGGLE_SEARCH"})
  }
}
export function load(data){
  return function action(dispatch){
    dispatch({type:"SEARCH_END",data})
  }
}
export function pause(data){
  return function action(dispatch){
    dispatch({type:"PAUSE_TRACK"})
  }
}
export function toggleFader(data){
  return function action(dispatch){
    dispatch({type:"TOGGLE_FADER",data})
  }
}