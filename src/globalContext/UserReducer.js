export const UserReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_USER":
      return {
        Users: state.Users.filter((user) => {
          return user.id !== action.payload;
        }),
      };

    case "ADD_USER":
      return {
        Users: [action.payload, ...state.Users],
      };
    case "UPDATE_USER":
      const updateUser = action.payload;
      const updateUsers = state.Users.map((user) => {
        if (user.id === updateUser.id) {
          return updateUser;
        }
        return user;
      });

      return {
        Users: updateUsers,
      };

    default:
      return state;
  }
};
