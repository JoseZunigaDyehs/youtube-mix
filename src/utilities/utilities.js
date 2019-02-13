import moment from 'moment';

// export function dataURIToBlob(dataURI) {
//   const binStr = atob(dataURI.split(',')[1]);

//   let len = binStr.length,
//       arr = new Uint8Array(len);

//   const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

//   for (var i = 0; i < len; i++) {
//     arr[i] = binStr.charCodeAt(i);
//   }

//   return new Blob([arr], {
//     type: mimeString
//   });
// }

export function isValidToken(date){
  if(!date){ return true };
  const diff = moment.duration(moment().diff(moment(date)));
  return diff.seconds() <= 300;
}

export function removeSessionStorage(){
  sessionStorage.removeItem('loggIn');
  sessionStorage.removeItem('refresh_token');
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('timer');
}

export const CONSTANTS = {
  QUALITY: 'media'
};