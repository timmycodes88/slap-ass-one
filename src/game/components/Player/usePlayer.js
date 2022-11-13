import { useEffect, useRef } from "react";
import { GAME_WIDTH, PLAYER_WIDTH } from "../../../utils/CONSTANTS";
import { getLeft } from "../../../utils/getValues";

export default function usePlayer() {
  const playerRef = useRef();

  useEffect(() => {
    //Calls Move Function
    function handleKeyDown(e) {
      if (e.keyCode === 37) {
        //Left Arrow
        move("left");
      } else if (e.keyCode === 39) {
        //Right Arrow
        move("right");
      }
    }

    document.addEventListener("keydown", handleKeyDown); //Calls handleKeyDown on keydown

    return () => {
      document.removeEventListener("keydown", handleKeyDown); //Remove Event Listener
    };
  }, []);

  function move(direction) {
    //Access to Player Element
    const player = playerRef.current;

    //Make sure Player Exsists
    if (!player) return;

    //Get MOVE Bounds
    const maxRight = GAME_WIDTH - PLAYER_WIDTH;
    const maxLeft = 0;

    //Get Player's current Left
    let left = getLeft(player);
    let newPosition = left;

    //Keep Player in BOUNDS
    if (left <= maxLeft) left = maxLeft;
    else if (left >= maxRight) left = maxRight;

    //Calculate New Position
    if (direction === "left" && left > maxLeft) {
      newPosition = left - 8 + "px";
    } else if (direction === "right" && left < maxRight) {
      newPosition = left + 8 + "px";
    }

    //Move Player to New Position
    player.style.left = newPosition;
  }

  return playerRef;
}
