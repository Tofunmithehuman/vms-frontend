import { setUser } from "./actions";

export const login = (user) => (dispatch) => {
  // Perform login (e.g., make API call)

  // On successful login, store user data in local storage
  localStorage.setItem("user", JSON.stringify(user));

  // Dispatch the setUser action to update Redux store
  dispatch(setUser(user));
};
