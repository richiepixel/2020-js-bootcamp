const authFunction = {
  isAuthenticated: false,

  authenticate(callbackFn){
    authFunction.isAuthenticated = true
    setTimeout(callbackFn, 100); //fake async call
  },

  signout(callbackFn) {
    authFunction.isAuthenticated = false
    setTimeout(callbackFn, 100); //fake async call
  }
 }

 export default authFunction