function enforceUserObjectSchema(user) {
  return {
    ...user,
    profile_img: '',
    unique_code: '',
    location: '',
    organisation: '',
    default_currency: ''
  };
}

module.exports = enforceUserObjectSchema;
