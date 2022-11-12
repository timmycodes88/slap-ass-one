import { useContext, useState, useEffect, useRef } from "react";
import { GAME } from "../../utils/types";
import { GameContext } from "./GameState";

export default function useGame() {
  // Pull the current view state (what is showing) out of the context
  const { viewState } = useContext(GameContext);
  //Create a state that will change the context for the viewState
  const [view, setView] = viewState;

  // Access the player in the dom using ref
  const playerRef = useRef();
  const gameViewRef = useRef();
  const enemyRef = useRef();

  useEffect(() => {
    function handleKeyDown(e) {
      // Derermine what to do based on which key is presse
      if (e.keyCode === 37) {
        move("left");
      } else if (e.keyCode === 39) {
        move("right");
      }
    }
    // ! Might need to be window
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function move(direction) {
    const player = playerRef.current;
    const maxRight = 512 - 64;
    const maxLeft = 0;
    // Variable to make sure that we are in the safe area to move
    if (!player) return; // If the player is undefined, return
    let num = parseInt(player.style.left.replace(/\D/g, ""));
    let newPosition;
    // If the number is undefined (when game starts) or number is less than or = to the max left value, num = 0
    if (!num || num <= maxLeft) num = maxLeft;
    // If the number goes past the max right, change the value to the max it can go
    else if (num >= maxRight) num = maxRight;

    if (direction === "left" && num > maxLeft) {
      newPosition = num - 8 + "px";
    } else if (direction === "right" && num < maxRight) {
      newPosition = num + 8 + "px";
    }

    player.style.left = newPosition;
  }

  useEffect(() => {
    // Make sure that the game is started
    if (view !== GAME && inter) {
      clearInterval(inter);
      return;
    } else if (view !== GAME) return;

    // Every 10 MS, the game loop will run
    const inter = setInterval(gameLoop, 10);

    return () => {
      clearInterval(inter);
    };
  }, [view]);

  function gameLoop() {
    // Get rid of the "PX" that is returned and make the num a int

    const enemy = enemyRef.current;
    if (!enemy) return; // If the enemey is undefined, return
    let num = parseInt(enemy.style.top.replace(/\D/g, ""));
    if (!num) num = 0;
    enemy.style.top = num + 1 + "px";
    if (num > 832) {
      enemy.style.top = 0 + "px";
      enemy.style.left = Math.random() * 448 + "px";
    }
  }

  // Return the state and the setter function
  return { view, setView, playerRef, gameViewRef, enemyRef };
}
