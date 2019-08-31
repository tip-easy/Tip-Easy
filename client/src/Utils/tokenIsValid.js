export const tokenIsValid = (token) => {
  if (typeof token !== "string") {
    return false
  }
  return true
}