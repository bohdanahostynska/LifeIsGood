import React from "react";
import Photo from "../assets/menu/mainpic/photo.jpg";
function UserItem() {
  return (
    <div className="user_wrapper">
      <div className="user_wrapper_img">
        <img className="user_wrapper_img-img" src={Photo} alt="user-img" />
      </div>
      <h3 className="user_name">Bohdana Hostynska</h3>
    </div>
  );
}

export default UserItem;
