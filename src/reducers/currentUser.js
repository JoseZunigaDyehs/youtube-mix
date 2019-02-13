import * as Immutable from "immutable";

export function currentUser(
  state = Immutable.fromJS({
    userData: Immutable.fromJS(JSON.parse(sessionStorage.getItem("loggIn"))),
    isLoggedIn:
      sessionStorage.getItem("loggIn") &&
      sessionStorage.getItem("token") &&
      sessionStorage.getItem("refresh_token")
        ? true
        : false,
    token: sessionStorage.getItem("token")
      ? sessionStorage.getItem("token")
      : "",
    refresh_token: sessionStorage.getItem("refresh_token")
      ? sessionStorage.getItem("refresh_token")
      : "",
    timer: sessionStorage.getItem("timer")
      ? sessionStorage.getItem("timer")
      : false,
    isFetchingRefresh: false,
    isLogin: false
  }),
  action
) {
  switch (action.type) {
    case 'LOGIN_START':
      return state.set("isLogin",true);
    case 'REFRESH_TOKEN_START':
      return state.set('isFetchingRefresh', true);
    case 'REFRESH_TOKEN_END':
      return state.withMutations((map) => {
        map.set('isFetchingRefresh', false)
            .set('refresh_token', action.refresh_token)
            .set('token', action.token)
            .set('timer', action.timer)
      });
    case 'SET_TIMER':
      return state.set('timer', action.date);
    case 'LOGIN_USER_END':
      return state.withMutations((map) => {
        map.set('userData', Immutable.fromJS(action.userData))
          .set('isLoggedIn', true)
          .set('timer', action.timer)
          .set("isLogin",false)
      });
    case 'LOGOUT':
      return state.withMutations((map) => {
        map.set('userData', Immutable.fromJS({}))
          .set('isLoggedIn', false)
          .set('timer', false)
      });
    case 'GET_TOKEN_END':
      debugger
      return state.merge(Immutable.fromJS(action.data));
    default:
      return state;
  }
}
