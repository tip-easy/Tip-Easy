export const tokenIsValid = (token) => {
  if (!token || typeof token !== "string") {
    return false
  } else {
    return true
  }
}