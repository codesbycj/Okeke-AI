import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets";

export const Sidebar = () => {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    console.log('colo');
    if (!expand) {
      setExpand(true)
    } else {
      setExpand(false);
    }
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img src={assets.menu_icon} className={expand ? 'menu' : 'colorBlack'} alt="" onClick={handleExpand}/>
        <div className="newChat">
          <img src={assets.plus_icon} alt="" />
          {expand ? <p>New Chat</p> : null}
        </div>

        <div className="recent">
          <p className="recentTitle"> Recent </p>
          <div className="recentEntry">
            <img src={assets.message_icon} alt=""/>
            {expand ? <p>What is react ... </p> : null}
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="bottomItem recentEntry">
          <img src={assets.question_icon} alt=""/>
          {expand ? <p>Help & Support</p> : null}
        </div>
      </div>
    </div>
  );
};
