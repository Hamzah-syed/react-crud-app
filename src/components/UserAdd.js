import React, { useState, useContext } from "react";
import { UserGlobalContext } from "../globalContext/GlobalUserContext";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

const UserAdd = () => {
  const history = useHistory();
  const { addUser } = useContext(UserGlobalContext);
  // const [userName, setUserName] = useState();
  // const [userEmail, setUserEmail] = useState();
  const [userData, setuserData] = useState({
    name: "",
    email: "",
  });

  const addUserForm = (e) => {
    const newUser = {
      id: uuid(),
      name: userData.name,
      email: userData.email,
    };
    addUser(newUser);

    history.push("/");
    e.preventDefault();
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
          onSubmit={addUserForm}
          className="flex  lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0"
        >
          <input
            value={userData.name}
            onChange={(e) => setuserData({ ...userData, name: e.target.value })}
            className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
            placeholder="Full Name"
            type="text"
          />
          <input
            value={userData.email}
            onChange={(e) =>
              setuserData({ ...userData, email: e.target.value })
            }
            className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
            placeholder="Email"
            type="email"
          />
          <input
            type="submit"
            value="add"
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          />
        </form>
      </div>
    </section>
  );
};

export default UserAdd;
