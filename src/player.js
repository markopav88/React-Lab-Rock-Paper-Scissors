import React from "react";
import scissors from "../assets/paper-48270.png";
import paper from "../assets/rock-png-49433.png";
import rock from "../assets/scissors-icon-25518.png";

const Player = ({ weapon }) => (
  <>
    <div className="player">
      <img
        className="player-image"
        src={
          weapon === "rock" ? rock : weapon === "scissors" ? scissors : paper
        }
        alt="Rock Paper Scissors"
      />
    </div>
  </>
);

export default Player;
