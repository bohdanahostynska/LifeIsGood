import React from "react";
import User from "../assets/menu/user.svg";
function UserItem() {
  return (
    <div className="user_wrapper">
      <div className="user_wrapper_img">
        <img className="user_wrapper_img-img" src={User} alt="user-img" />
      </div>
      <h3 className="user_name">Alka Yagik</h3>
    </div>
  );
}

export default UserItem;
