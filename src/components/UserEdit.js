import React, { useState, useContext, useEffect } from "react";
import { UserGlobalContext } from "../globalContext/GlobalUserContext";
import { useHistory } from "react-router-dom";

const UserEdit = (props) => {
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
    email: "",
  });

  const history = useHistory();
  const { users, editUser } = useContext(UserGlobalContext);
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const UserId = currentUserId;
    const selectedUser = users.find((users) => users.id === UserId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  const updateUser = (e) => {
    editUser(selectedUser);
    e.preventDefault();
    console.log(selectedUser);
    history.push("/");
  };

  return (
    <section className="text-gray-700 body-font">
      <div className=" container  px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Master Cleanse Reliac Heirloom
          </h1>
        </div>
        <form
          onSubmit={updateUser}
          className="flex  lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0"
        >
          <input
            value={selectedUser.name}
            name="name"
            onChange={(e) =>
              setSelectedUser({
                ...selectedUser,
                name: e.target.value,
              })
            }
            className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
            placeholder="Full Name"
            type="text"
          />
          <input
            value={selectedUser.email}
            name="email"
            onChange={(e) =>
              setSelectedUser({
                ...selectedUser,
                email: e.target.value,
              })
            }
            className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
            placeholder="Email"
            type="email"
          />
          <input
            type="submit"
            value="Update"
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          />
        </form>
      </div>
    </section>
  );
};

export default UserEdit;
