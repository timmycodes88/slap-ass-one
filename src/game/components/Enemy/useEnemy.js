import { useRef, useEffect, useLayoutEffect } from "react";
import {
  ENEMY_HEIGHT,
  ENEMY_WIDTH,
  GAME_HEIGHT,
  GAME_WIDTH,
} from "../../../utils/CONSTANTS";
import { getTop } from "../../../utils/getValues";

export default function useEnemy() {
  const enemyRef = useRef();

  const speed = useRef(1);

  useEffect(() => {
    const inter = setInterval(move, 10);

    return () => {
      clearInterval(inter);
    };
  }, []);

  useLayoutEffect(() => {
    //Give Enemy Random Position when game Loads
    resetPosition();
  }, []);

  function move() {
    //Access to Enemy Element
    const enemy = enemyRef.current;

    //Make sure Enemy Exists
    if (!enemy) return;

    //Get Enemy's current Top
    let top = getTop(enemy);

    //Move Enemy Down by speed
    enemy.style.top = top + speed.current + "px";

    if (top > GAME_HEIGHT + ENEMY_HEIGHT) {
      resetPosition();
    }
  }

  function resetPosition() {
    //Access to Enemy Element
    const enemy = enemyRef.current;
    //Move back to Top
    enemy.style.top = 0 + "px";
    //Random X Position within Bounds
    enemy.style.left = Math.random() * (GAME_WIDTH - ENEMY_WIDTH) + "px";

    //! TEMP Increase speed by one each time we respawn
    // speed.current += 1;
  }

  return enemyRef;
}
