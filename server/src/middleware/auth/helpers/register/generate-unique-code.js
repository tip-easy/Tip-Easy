function generateUniqueCode(length = 6) {
  let code = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < length; i++) {
    if (i < 3) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    } else {
      code += Math.floor(Math.random() * 10);
    }
  }
  return code;
}

module.exports = generateUniqueCode;