import React, { useState, useEffect, use } from "react";
import MyContext from "./MyContext.jsx";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig/index.js";

const MyProvider = ({ children }) => {
  const [num, setnum] = useState(0);
  const [name, setname] = useState("Hello ,developer");
  const [course, setcourse] = useState("web development");

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

  useEffect(() => {
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
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
