import React, { useState, useEffect, use } from "react";
import MyContext from "./MyContext.jsx";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../firebaseConfig/index.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

const MyProvider = ({ children }) => {
  const [num, setnum] = useState(0);
  const [name, setname] = useState("Hello ,developer");
  const [course, setcourse] = useState("web development");
  const [user, setuser] = useState(null);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [requests, setrequests] = useState([]);

  const getAllUsers = async () => {
    const data = [];
    const q = query(collection(db, "requests"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
      setrequests([...data]);
      // doc.data() is never undefined for query doc snapshots
    });
  };

  const getCurrentUser = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        console.log("User is signed out");
        // User is signed out
        // ...
      }
    });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setuser(null);
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(err);
        // An error happened.
      });
  };

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setuser(user);
        console.log("user logged in successfully");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  useEffect(() => {
    getCurrentUser();
    getAllUsers();
  }, []);

  console.log(requests);

  return (
    <MyContext.Provider
      value={{
        name,
        num,
        course,
        setnum,
        setname,
        setcourse,
        // apply form state
        firstname,
        setfirstname,
        lastname,
        setlastname,
        email,
        setemail,
        password,
        setpassword,
        requests,
        user,
        logout,
        loginUser,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
