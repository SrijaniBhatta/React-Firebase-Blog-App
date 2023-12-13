import React, { createContext, useContext } from "react";

const UserContext = createContext(null);
//Provider
//Consumer

const UserProvider = (props) => {
  const { children } = props;
  const user = {
    name: "Srijani Bhatta",
    email: "srijani@gmail.com",
    avatar: "image/fghgfs.jpg",
  };

  const changeUserName = (name) => {
    user.name = name;
  };

  return (
    <>
      <UserContext.Provider
        value={{
          changeUserName,
          ...user,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
//if any one forget to wrap the app component by UserProvider(context component) then crete a custom hook to throw the proper error

const userUserContext = () => {
  const user = useContext(UserContext);

  if (!user) {
    throw new Error("userUserContext must be within a UserProvider ");
  }

  //one can user this custom hook or function in the children components instead of use the useContext
};

export { UserContext, UserProvider };

// useContext        (more efficient)
// const user = useContext(UserContext);
