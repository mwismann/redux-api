import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/users/usersSlice"
import { useEffect } from "react";

const Users = () => {
  const { users, isLoading, error } = useSelector((store) => store);
  const dispatch = useDispatch();
  
  useEffect(() =>{
    dispatch(fetchUsers());
  }, [])

  return (
    <>
    <h1>Hello world</h1>
    {isLoading && <h2>Loading...</h2>}
    {error && <h2>Something went wrong!</h2>}
    <ul>
      {users.results.map((user) => (
        <li key={user.login.uuid}>{user.name.first} {user.name.last}</li>
      ))}
    </ul>
    </>
    );
}

export default Users;