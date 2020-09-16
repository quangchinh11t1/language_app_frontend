import jwtDecode from "jwt-decode"

function verify(user) {
  if (user && user.jwt) {
    const content = jwtDecode(user.jwt)
    const now = Math.floor(Date.now() / 1000)
    if (content.exp < now) {
      window.localStorage.removeItem("user")
    }
    return true
  }
  return false
}

export default {
  verify,
}
