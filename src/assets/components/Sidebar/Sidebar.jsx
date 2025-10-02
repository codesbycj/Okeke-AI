import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets";
import { Context } from "../../../context/context";

export const Sidebar = () => {
  const [expand, setExpand] = useState(false);

  const { onSent, previousPrompt, input, setRecentPrompt, newChat } =
    useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt);
  };

  const handleExpand = () => {
    console.log("colo");
    if (!expand) {
      setExpand(true);
    } else {
      setExpand(false);
    }
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          className={expand ? "menu" : "colorBlack"}
          alt=""
          onClick={handleExpand}
        />
        <div className="newChat" onClick={() => newChat()}>
          <img src={assets.plus_icon} alt="" />
          {expand ? <p>New Chat</p> : null}
        </div>

        <div className="recent">
          <p className="recentTitle"> Recent </p>

          {Array.isArray(previousPrompt) &&
            previousPrompt.map((item, index) => {
              let shortWord = item.length > 7 ? item.slice(0, 7) : word;

              return (
                <div className="recentEntry" key={index} onClick={() => loadPrompt(item)}>
                  <img src={assets.message_icon} alt="" />
                  {expand ? <p>{shortWord} ... </p> : null}
                </div>
              );
            })}
        </div>
      </div>

      <div className="bottom">
        <div className="bottomItem recentEntry">
          <img src={assets.question_icon} alt="" />
          {expand ? <p>Help & Support</p> : null}
        </div>
      </div>
    </div>
  );
};
