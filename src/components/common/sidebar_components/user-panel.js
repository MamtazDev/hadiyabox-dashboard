import React, { useEffect, useState } from "react";
import man from "../../../assets/images/dashboard/man.png";

const UserPanel = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const usr = localStorage.getItem("user-id");
    fetch(`http://localhost:5055/api/admin/${usr}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <div className="sidebar-user text-center">
        <div></div>
        <h6 className="mt-3 f-14">{user.name}</h6>
        <p>{user.role}</p>
        <p>Wallet: ${user?.wallet}</p>
      </div>
    </div>
  );
};

export default UserPanel;
