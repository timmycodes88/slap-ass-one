import tw, { styled, css } from "twin.macro";
import useGame from "../logic/useGame";
import Picture from "../../assets/game.png";
import { GAME_HEIGHT, GAME_WIDTH } from "../../utils/CONSTANTS";
import Player from "../components/Player/Player";
import Enemy from "../components/Enemy/Enemy";
import { Fragment } from "react";

export default function Game() {
  const { gameViewRef, enemies } = useGame();

  return (
    <GameView ref={gameViewRef} img={Picture}>
      {enemies.length > 0 &&
        enemies.map((enemy) => (
          <Fragment key={enemy.key}>{enemy.element}</Fragment>
        ))}
      <Player />
    </GameView>
  );
}

const GameView = styled.div(({ img }) => [
  tw`bg-blue-200 mx-auto mt-10 relative overflow-hidden`,
  css`
    background-image: url(${img});
    background-position: center;
    height: ${GAME_HEIGHT}px;
    width: ${GAME_WIDTH}px;
  `,
]);
