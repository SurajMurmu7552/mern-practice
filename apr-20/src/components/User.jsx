import React from "react";
import { Link } from "react-router-dom";

export default function User(props) {
  return (
    <li className="list-item">
      <p>
        <Link to={`/profilepic/${props.user.id}`}>
          {props.user.first_name} {props.user.last_name}
        </Link>
      </p>
      <p>{props.user.email}</p>
    </li>
  );
}
