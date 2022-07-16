import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const useUserContext = () =>{
    return useContext(UserContext)
}

const UserContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    

    useEffect(() => {
        fetch("https://api.github.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);
    const changeWidht = (width, id) => {
        setUsers(
            users.map((user) =>
                user.id === id ? { ...user, width: width } : user
            )
        );
    };
    const values = {
        users,
        changeWidht
    };
    console.log(users);
    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
};



export default UserContextProvider;
