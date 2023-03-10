import { createContext, useState } from "react";

const data = [
  {
    id: 1,
    userName: "Arlene McCoy",
    email: "arlene@gmail.com",
    birthDate: "August 2, 2013",
    phone: "205-555-0100",
    checked: false,
  },
  {
    id: 2,
    userName: "Cody Fisher",
    email: "cody@gmail.com",
    birthDate: "October 24, 2018",
    phone: "010-234-0145",
    checked: false,
  },
  {
    id: 3,
    userName: "Esther Howard",
    email: "esther@gmail.com",
    birthDate: "August 2, 2013",
    phone: "234-545-0203",
    checked: false,
  },
  {
    id: 4,
    userName: "Ronald Richards",
    email: "ronald@gmail.com",
    birthDate: "November 7, 2017",
    phone: "120-7466-4777",
    checked: false,
  },
  {
    id: 5,
    userName: "Marvin McKinney",
    email: "marvin@gmail.com",
    birthDate: "May 29, 2017",
    phone: "090-123-5555",
    checked: false,
  },
  {
    id: 6,
    userName: "Floyd Miles",
    email: "floyd@gmail.com",
    birthDate: "July 14, 2015",
    phone: "998-478-0100",
    checked: false,
  },
  {
    id: 7,
    userName: "Devon Lane",
    email: "devon@gmail.com",
    birthDate: "December 19, 2013",
    phone: "821-989-5659",
    checked: false,
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
