import * as Immutable from "immutable";

export function notificationStates(
  state = Immutable.fromJS({
    isActive: false,
    message: null,
    typeNotification: null,
    time: 3800
  }),
  action
) {
  switch (action.type) {
    case 'ACTIVE_NOTIFICATION':
    debugger
        return state.withMutations((map)=>{
            map.set("isActive",true)
                .set("message", action.message)
                .set("typeNotification",action.typeNotification)
        })
    case 'DESACTIVE_NOTIFICATION':
        return state.withMutations((map)=>{
            map.set("isActive",false)
                .set("message", null)
                .set("typeNotification",null)
        })
    default:
      return state;
  }
}
