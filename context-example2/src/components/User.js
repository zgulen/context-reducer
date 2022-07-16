import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

const User = ({ user }) => {
  const { id, login, avatar_url, width } = user;
  const { changeWidht } = useContext(UserContext)
  console.log(changeWidht);
  return (
    <div>
      <h3>{login}</h3>
      <img src={avatar_url} alt="" width={width} />
      <div>
        <label htmlFor="width">Image width(px)</label>
        <input id="width" type="number" onChange={(e) => changeWidht(e.target.value, id)} value={width} />
      </div>
    </div>
  );
};

export default User;
