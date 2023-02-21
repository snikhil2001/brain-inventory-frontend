import React, { useEffect, useState } from "react";

const ChatBar = ({ email, name }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      let res = await fetch("http://localhost:8080/auth/");
      let data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>

      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          {data.map((el) => {
            if (el.email !== email) {
              return <p key={el._id}>{el.name}</p>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
