export const validate = (email, password, confirmPassword) => {
  const checkEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const checkPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!email) return "Email is empty";
  if (!password) return "Password is empty";
  if (!checkEmail) return "Email Is not Valid";
  if (!checkPassword) return "Password is not Valid";
  if (password !== confirmPassword) return "Password doesn't match";

  return null;
};
