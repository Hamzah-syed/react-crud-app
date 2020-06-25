import React, { useReducer, useContext, createContext } from "react";
import { UserReducer } from "./UserReducer";

const initialState = {
  Users: [],
};

export const UserGlobalContext = createContext(initialState);

export const UserGlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  //Actions
  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  const addUser = (newUser) => {
    dispatch({
      type: "ADD_USER",
      payload: newUser,
    });
  };

  const editUser = (user) => {
    dispatch({
      type: "UPDATE_USER",
      payload: user,
    });
  };

  return (
    <UserGlobalContext.Provider
      value={{ users: state.Users, removeUser, addUser, editUser }}
    >
      {children}
    </UserGlobalContext.Provider>
  );
};
