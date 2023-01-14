import { createContext, useState } from "react";
import data from "../mockData";

export const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(data);
  const [isChecked, setIsChecked] = useState(false);

  const deleteUser = (id) => {
    const updatedUsers = [...users].filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleGroupDeletion = () => {
    const updatedUsers = [...users].filter((user) => user.checked !== true);
    if (updatedUsers.length === users.length) {
      alert("Please, select users you want to delete!");
    }
    setUsers(updatedUsers);
    setIsChecked(false);
  };

  function handleSelection(id) {
    const updateSelected = [...users].map((user) => {
      if (user.id === id) {
        user = { ...user, checked: !user.checked };
      }
      return user;
    });
    setUsers(updateSelected);
  }

  

  function selectAll(valueOfChecked) {
    setIsChecked(valueOfChecked);
    const updateSelected = [...users].map((user) => {
      return { ...user, checked: valueOfChecked };
    });
    setUsers(updateSelected);
  }

  const values = [
    users,
    setUsers,
    isChecked,
    setIsChecked,
    deleteUser,
    handleGroupDeletion,
    handleSelection,
    selectAll,
  ];

  return (
    <UsersContext.Provider value={values}>{children}</UsersContext.Provider>
  );
};

export default UsersProvider;
