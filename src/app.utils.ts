const PASSWORD_RULE =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+\-=|\\]).{8,32}$/;

const PASSWORD_RULE_MESSAGE = `password should have 1 uppercase , 1 lowercase , 1 specialcharacter , 1 digit`;

const PASSWORD_LENGTH_MESSAGE = `password must be of length 8-14`;

export const REGEX = {
  PASSWORD_RULE,
  PASSWORD_RULE_MESSAGE,
  PASSWORD_LENGTH_MESSAGE,
};
