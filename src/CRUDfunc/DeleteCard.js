import React from "react";
//import { v4 as uuidv4 } from "uuid";

const User = ({ props, onToggle, onRemove }) => {
  return ( 
    <div className="User-container">
      <b
        style={{
          cursor: "pointer",
          color: props.active ? "blue" : "black",
        }}
        onClick={() => onToggle(props.id)}
      >
        {props.username}
      </b>
      <span>{props.email}</span>
      <button onClick={() => onRemove(props.id)}>삭제하기</button>
    </div>
  );
};

export default function UserList3({ users, onToggle, onRemove }) {
  return (
    <div>
      {users.map((item) => (
        <User
          props={item}
          key={item.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
      }