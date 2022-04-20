import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleUser } from "../utils/api";

export default function ProfilePic() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getSingleUser(id).then((user) => setUser(user));
  }, [id]);
  return (
    <div className="profile">
      <div className="profile-img">
        <img src={user.avatar?.toString()} alt="no data" />
      </div>
      <div className="profile-info">
        <h3>
          {user.first_name} {user.last_name}
        </h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
}
