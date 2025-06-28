import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets";
import { Context } from "../../../context/context";

export const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input, 
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <div className="logo">
          <h1>Okeke</h1>
          <img src={assets.Okeke} alt="" />
        </div>
        <img src={assets.avatar} alt="" />
      </div>

      <div className="mainContainer">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Heyyy,</span> 😌.
              </p>
              <p>What've you got for me today? </p>
            </div>

            <div className="cards">
              <div className="card">
                <p>
                  Please tell me what's around me right now, any points of
                  interest you can identify
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>

              <div className="card">
                <p>Brainstorm creative ideas for a new project or challenge.</p>
                <img src={assets.bulb_icon} alt="" />
              </div>

              <div className="card">
                <p>Give me 10 team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>

              <div className="card">
                <p>Write code that sorts a list of items efficiently.</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="resultTitle">
              <img src={assets.avatar} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="resultData">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{__html: resultData}}></p>
              )}
            </div>
          </div>
        )}

        <div className="mainBottom">
          <div className="searchBox">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
              name=""
              id=""
              placeholder="Enter a prompt here..."
            />
            <div className="below">
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>

          <p className="bottomInfo">
            Okeke may display inaccurate info, including about people, so
            double-check its responses. Your Privacy and Okeke Apps
          </p>
        </div>
      </div>
    </div>
  );
};
