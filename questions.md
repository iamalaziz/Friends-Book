# User Info Storing App | React JS

### ?

1. Which one to user
```
const storedUsers = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];

const [users, setUsers] = useState(storedUsers);

useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
```
**OR**

```
const [users, setUsers] = useContext(UsersContext);

useEffect(() => {
  const storedUsers = JSON.parse(localStorage.getItem("users"));
  if (storedUsers) {
    setUsers(storedUsers);
  }
}, []);

useEffect(() => {
  localStorage.setItem("users", JSON.stringify(users));
}, [users]);
```

### Errors

1. Table: Warning: Each child in a list should have a unique "key" prop.