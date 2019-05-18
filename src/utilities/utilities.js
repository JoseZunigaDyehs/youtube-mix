// import moment from 'moment';
const encode = async ( s ) => {
	var out = [];
	for ( var i = 0; i < s.length; i++ ) {
		out[i] = s.charCodeAt(i);
	}
	return new Uint8Array( out );
}

export const blob = async (obj) => {
		const str = JSON.stringify(obj);
		var data = await encode( str );
		var blob = new Blob( [ data ], {
			type: 'application/octet-stream'
		});
		return URL.createObjectURL( blob );
}

// export function isValidToken(date){
//   if(!date){ return true };
//   const diff = moment.duration(moment().diff(moment(date)));
//   return diff.seconds() <= 300;
// }

export function removeSessionStorage(){
	sessionStorage.removeItem("loggIn")
	sessionStorage.removeItem("refresh_token")
	sessionStorage.removeItem("token")
	sessionStorage.removeItem("timer")
}

export const CONSTANTS = {
	QUALITY: "media"
}