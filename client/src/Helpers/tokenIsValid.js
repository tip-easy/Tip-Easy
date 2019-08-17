export const tokenIsValid = (token) => {
  if (typeof(token) !== "string" || token.length !== 155) {
    return false
  }
  return true
}