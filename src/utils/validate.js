export const validateData = (email, password, name = null) => {
  const isEmailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{6,}$/.test(
      password
    );

  if (name !== null) {
    if (name.trim() === "") {
      return "Name cannot be empty";
    }
  }
  if (!isEmailValid) {
    return "Email is not valid";
  }
  if (!isPasswordValid) {
    return "Password should have at least 6 characters with at least one capital, one special character and one number";
  }

  if (isEmailValid && isPasswordValid) {
    return null;
  }
};
