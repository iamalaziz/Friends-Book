import { useContext, useEffect, useState } from "react";
import "../stylesheet/_table.scss";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddNewRow from "./AddNewRow";
import { UsersContext } from "../context/context";
import UpdateUser from "./UpdateUser";
// import Mobile from "./Mobile/Mobile";

const Table = () => {
  const [
    users,
    setUsers,
    isChecked,
    setIsChecked,
    deleteUser,
    handleGroupDeletion,
    handleSelection,
    selectAll,
  ] = useContext(UsersContext);

  const [toggleAdd, setToggleAdd] = useState(false);
  const [editID, setEditID] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isChecked", JSON.stringify(isChecked));
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div className="table">
      <div className="nav">
        <p className="nav__total">All ({users.length})</p>
        <button
          className="nav__btn nav__btn--create"
          onClick={() => setToggleAdd(true)}
        >
          Create
        </button>
        <button
          className="nav__btn nav__btn--delete"
          onClick={handleGroupDeletion}
        >
          Delete
        </button>
      </div>

      <table className="fields">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={users.filter(user => user?.checked !== true).length < 1}
                onChange={(e) => selectAll(e.target.checked)}
              />
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
                  <UpdateUser user={user} setEditID={setEditID} />
                ) : (
                  <tr key={user.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={user.checked}
                        onChange={() => handleSelection(user.id)}
                      />
                    </td>
                    <td>{user.id}</td>
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

      {/*   <Mobile />
      {users.length === 0 && <h2 className="empty-text">Empty</h2>} */}
    </div>
  );
};

export default Table;
