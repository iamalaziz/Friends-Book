import React, { useContext, useState } from "react";
import { UsersContext } from "../context/context";

const UpdateUser = ({ user, keyID, setEditID }) => {
  const [users, setUsers] = useContext(UsersContext);
  const [editUser, setEditUser] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleUpdate = (id) => {
    const updatedUsers = [...users].map((item) => {
      if (item.id === id) {
        item = editUser;
      }
      return item;
    });
    setUsers(updatedUsers);
    setEditID(null);
  };

  return (
    <tr className="add-row" key={keyID}>
      <td></td>
      <td>#</td>
      <td>
        <input
          type="text"
          name="userName"
          value={editUser.userName}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="email"
          value={editUser.email}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="birthDate"
          value={editUser.birthDate}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="phone"
          value={editUser.phone}
          onChange={handleChange}
        />
      </td>
      <td>
        <div className="create-cell">
          <button
            className="btn create-btn"
            onClick={() => handleUpdate(editUser.id)}
          >
            Update
          </button>
          <button className="btn cancel-btn" onClick={() => setEditID(null)}>
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UpdateUser;
