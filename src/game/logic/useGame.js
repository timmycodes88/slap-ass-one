import { useContext, useState, useEffect, useRef } from "react";
import { GAME } from "../../utils/types";
import Enemy from "../components/Enemy/Enemy";
import { GameContext } from "./GameState";

export default function useGame() {
  const { viewState } = useContext(GameContext);
  const [view, setView] = viewState;

  const [enemies, setEnemies] = useState([]);

  useEffect(() => {
    let count = 0;
    const inter = setInterval(() => {
      if (count > 4) {
        clearInterval(inter);
      }
      setEnemies((curr) => [...curr, { key: count, element: <Enemy /> }]);
      count++;
    }, 2000);

    return () => clearInterval(inter);
  }, []);

  const gameViewRef = useRef();

  return { view, setView, gameViewRef, enemies };
}
