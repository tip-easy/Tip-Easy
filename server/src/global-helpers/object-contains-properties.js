function objectContainsProperties(obj, props) {
  for (let i = 0; i < props.length; i++) {
    if (props[i] in obj === false) {
      return false;
    }
  }
  return true;
}

module.exports = objectContainsProperties;
