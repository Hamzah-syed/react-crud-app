import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserGlobalContext } from "../globalContext/GlobalUserContext";

const UserList = () => {
  const { users, removeUser } = useContext(UserGlobalContext);

  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Crud Application
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl">
                    Name
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                    Email
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200"></th>
                </tr>
              </thead>
              <tbody>
                {users.map((Udata) => (
                  <tr key={Udata.id}>
                    <td className="px-4 py-3">{Udata.name}</td>
                    <td className="px-4 py-3">{Udata.email}</td>
                    <td className="px-4 py-3">
                      <Link
                        to={`/edituser/${Udata.id}`}
                        className="px-4 rounded-md focus:outline-none py-2 mx-1 text-white bg-indigo-500"
                      >
                        edit
                      </Link>
                      <button
                        onClick={() => removeUser(Udata.id)}
                        className="px-4 rounded-md focus:outline-none py-2 mx-1 text-white bg-red-500"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <Link
              to="/adduser"
              className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            >
              Add User
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserList;
