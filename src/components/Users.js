import { useSelector } from "react-redux";

const Users = () => {
  const { users, isLoading, error } = useSelector((store) => store.users);
  
  return (
    <>
    <h1>Hello world</h1>
    {isLoading && <div>Loading...</div>}
    </>
    );
}

export default Users;