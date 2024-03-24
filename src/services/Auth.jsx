import { useState, useContext, createContext } from "react";

const StateContext = createContext({
  user: null,
  setUser: () => {},
});

export const Auth = ({ children }) => {
  const [user, _setUser] = useState(localStorage.getItem("user"));

  const setUser = (user) => {
    _setUser(user);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  };

  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
