import { useContext, useEffect, useState } from "react";
import "../stylesheet/_table.scss";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddNewRow from "./AddNewRow";
import { UsersContext } from "../context/context";
import UpdateUser from "./UpdateUser";

const Table = () => {
  const [users, setUsers] = useContext(UsersContext);
  const [toggleAdd, setToggleAdd] = useState(false);
  const [editID, setEditID] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const deleteUser = (id) => {
    const updatedUsers = [...users].filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };
  return (
    <div className="table">
      <div className="nav">
        <p className="nav__total">All ({users.length})</p>
        <button className="nav__create-btn" onClick={() => setToggleAdd(true)}>
          Create
        </button>
      </div>
      <table className="fields">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>BOD</th>
            <th>Phone</th>
            <th>Settings</th>
          </tr>
        </thead>
        <tbody>
          {toggleAdd === true && <AddNewRow setToggleAdd={setToggleAdd} />}
          {users.map((user, index) => {
            return (
              <>
                {user.id === editID ? (
                  <UpdateUser user={user} setEditID={setEditID}/>
                ) : (
                  <tr key={user.id}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{index + 1}</td>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td>{user.birthDate}</td>
                    <td>{user.phone}</td>
                    <td>
                      <div className="settings">
                        <i
                          className="btn btn--edit"
                          onClick={() => setEditID(user.id)}
                        >
                          <CiEdit />
                        </i>
                        <i
                          className="btn btn--delete"
                          onClick={() => deleteUser(user.id)}
                        >
                          <RiDeleteBin6Line />
                        </i>
                      </div>
                    </td>
                  </tr>
                )}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
