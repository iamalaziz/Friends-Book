import { createContext, useState } from "react";

const data = [
  {
    id: 1,
    userName: "Arlene McCoy",
    email: "arlene@gmail.com",
    birthDate: "August 2, 2013",
    phone: "205-555-0100",
  },
  {
    id: 2,
    userName: "Arlene McCoy",
    email: "arlene@gmail.com",
    birthDate: "August 2, 2013",
    phone: "205-555-0100",
  },
  {
    id: 3,
    userName: "Arlene McCoy",
    email: "arlene@gmail.com",
    birthDate: "August 2, 2013",
    phone: "205-555-0100",
  },
  {
    id: 4,
    userName: "Arlene McCoy",
    email: "arlene@gmail.com",
    birthDate: "August 2, 2013",
    phone: "205-555-0100",
  },
  {
    id: 5,
    userName: "Arlene McCoy",
    email: "arlene@gmail.com",
    birthDate: "August 2, 2013",
    phone: "205-555-0100",
  },
  {
    id: 6,
    userName: "Arlene McCoy",
    email: "arlene@gmail.com",
    birthDate: "August 2, 2013",
    phone: "205-555-0100",
  },
  {
    id: 7,
    userName: "Arlene McCoy",
    email: "arlene@gmail.com",
    birthDate: "August 2, 2013",
    phone: "205-5550100",
  },
];

export const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(data);
  return (
    <UsersContext.Provider value={[users, setUsers]}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
