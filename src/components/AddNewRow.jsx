import { useContext, useState } from "react";
import "../stylesheet/_add-row.scss";
import { UsersContext } from "../context/context";
import { IoIosCloseCircleOutline } from "react-icons/io";

const AddNewRow = ({ setToggleAdd }) => {
  const [users, setUsers] = useContext(UsersContext);

  const [newUser, setNewUser] = useState({
    id: null,
    userName: "",
    email: "",
    birthDate: "",
    phone: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, id: new Date().getTime(), [name]: value }));
  };
  const handleSubmit = () => {
    setUsers((prev) => [...users, newUser]);
    setNewUser({
      id: null,
      userName: "",
      email: "",
      birthDate: "",
      phone: "",
    });
  };

  return (
    <tr className="add-row">
      <td onClick={() => setToggleAdd(false)}>
        <IoIosCloseCircleOutline
          style={{ fontSize: "25px", marginLeft: ".7rem" }}
        />
      </td>
      <td>{users.length + 1}</td>
      <td>
        <input
          type="text"
          name="userName"
          value={newUser.userName}
          onChange={handleInput}
        />
      </td>
      <td>
        <input
          type="text"
          name="email"
          value={newUser.email}
          onChange={handleInput}
        />
      </td>
      <td>
        <input
          type="text"
          name="birthDate"
          value={newUser.birthDate}
          onChange={handleInput}
        />
      </td>
      <td>
        <input
          type="text"
          name="phone"
          value={newUser.phone}
          onChange={handleInput}
        />
      </td>
      <td>
        <button className="create-btn" onClick={handleSubmit}>
          Create
        </button>
      </td>
    </tr>
  );
};

export default AddNewRow;
